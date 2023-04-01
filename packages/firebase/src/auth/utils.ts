import { auth } from '../auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const signInWithGooglePopup = async () => {
  await signInWithPopup(auth, new GoogleAuthProvider());
};

export const signOut = async () => {
  auth.signOut();
};
