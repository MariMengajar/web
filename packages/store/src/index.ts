import { create } from 'zustand'
import { auth, doc, onAuthStateChanged, signInWithGooglePopup, signOut, getDoc, setDoc, db } from "@mentora/firebase";

import type { User } from "@mentora/firebase"

type UserStore = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

const useUserStore = create<UserStore>((set) => {
  const handleSignIn = async () => {
    try {
      set({ loading: true })
      await signInWithGooglePopup()

      const userRef = doc(db, "users", auth.currentUser?.uid!)
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        const newUser: User = {
          username: auth.currentUser?.displayName!,
          accountType: "mentee",
          status: "active",
          biodata: ""
        }

        await setDoc(userRef, newUser)
      }
      const userData = userDoc.data() as User;
      set({ loading: false, user: userData })
    } catch (error: any) {
      set({ loading: false, error: error.message })
    }
  }

  const handleSignOut = async () => {
    try {
      set({ loading: true })
      await signOut()
      set({ loading: false, user: null })
    } catch (error: any) {
      set({ loading: false, error: error.message })
    }
  }

  return {
    user: null,
    loading: false,
    error: null,
    signIn: handleSignIn,
    signOut: handleSignOut
  }
})


onAuthStateChanged(auth, async (user) => {
  useUserStore.setState({ loading: true })
  if (user) {
    const userRef = doc(db, "users", user.uid)
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      const newUser: User = {
        username: user.displayName!,
        accountType: "mentee",
        status: "active",
        biodata: ""
      }

      await setDoc(userRef, newUser)
    }
    const userData = userDoc.data() as User;

    useUserStore.setState({ user: userData, loading: false });
  } else {
    useUserStore.setState({ user: null, loading: false });
  }
})

export { useUserStore }
