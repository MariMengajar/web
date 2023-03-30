import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
} from 'firebase/auth';

import { config } from './firebaseConfig';

const mentoraFirebase = initializeApp(config);

export const auth = getAuth(mentoraFirebase);
export const googleProvider = new GoogleAuthProvider();
export const signInGoogleWithPopup = () => {
  signInWithPopup(auth, googleProvider);
};
export const signOut = () => {
  auth.signOut();
};
export { onAuthStateChanged };
export type { User };

export default mentoraFirebase;
