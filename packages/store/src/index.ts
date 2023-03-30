import { create } from 'zustand'
import { auth, onAuthStateChanged } from "@mentora/firebase";

import type { User } from "@mentora/firebase"

type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create<UserStore>((set) => {
  onAuthStateChanged(auth, (user: User | null) => {
    set(() => ({ user }));
  });

  return {
    user: null,
    setUser: (user) => set(() => ({ user })),
  };
});

export default useUserStore;
