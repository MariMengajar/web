import { config } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(config);
export default app;

// =================
// Auth API
// =================
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInGoogleWithPopup = () => {
  signInWithPopup(auth, googleProvider);
};
const signOut = () => {
  auth.signOut();
};

export { auth, onAuthStateChanged, signInGoogleWithPopup, signOut };
export type { User };

// =================
// Firestore API
// =================
const db = getFirestore(app);

export { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
export { db };
export * from './firestore/types';
export * from './firestore/collections';
