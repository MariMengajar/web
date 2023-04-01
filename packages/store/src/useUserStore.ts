import type { User } from '@mentora/firebase';

import { create } from 'zustand';
import {
  auth,
  signInWithGooglePopup,
  signOut,
  fetchDBUserByAuthUser,
  onAuthStateChanged,
} from '@mentora/firebase';

type UserStore = {
  user: User | null;
  loading: boolean;
  error: string | null;
  actions: {
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
  };
};

// Why that currying `()(...)`? https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#basic-usage
export const useUserStore = create<UserStore>()(set => {
  const handleSignIn = async () => {
    try {
      set({ loading: true });
      await signInWithGooglePopup();
      set({
        loading: false,
        user: await fetchDBUserByAuthUser(auth.currentUser!),
      });
    } catch (error: any) {
      set({ loading: false, error: error?.message });
    }
  };

  const handleSignOut = async () => {
    try {
      set({ loading: true });
      await signOut();
      set({ loading: false, user: null });
    } catch (error: any) {
      set({ loading: false, error: error?.message });
    }
  };

  return {
    user: null,
    loading: false,
    error: null,
    actions: {
      setUser: user => set({ user }),
      setLoading: loading => set({ loading }),
      signIn: handleSignIn,
      signOut: handleSignOut,
    },
  };
});

// TODO: Move somewhere else or use next-auth https://next-auth.
onAuthStateChanged(auth, async user => {
  useUserStore.setState({ loading: true });
  const userData = await fetchDBUserByAuthUser(user);
  useUserStore.setState({ user: userData, loading: false });
});
