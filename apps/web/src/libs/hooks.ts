import { useEffect } from 'react';

import { onAuthStateChanged, auth, fetchDBUserByAuthUser } from '@mentora/firebase';
import { useUserStore } from '@mentora/store';

export const useSignIn = () => {
  const user = useUserStore(state => state.user);
  const loading = useUserStore(state => state.loading);
  const { signIn, signOut, setLoading, setUser } = useUserStore(state => state.actions);

  // Adds an observer for changes to the user's sign-in state, only once on mount
  // useEffect(() => {
  //   onAuthStateChanged(auth, async user => {
  //     const dbUser = await fetchDBUserByAuthUser(user!);
  //     setLoading(true);
  //     if (user) {
  //       setUser(dbUser);
  //       setLoading(false);
  //     } else {
  //       setUser(null);
  //       setLoading(false);
  //     }
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return { user, loading, signIn, signOut };
};
