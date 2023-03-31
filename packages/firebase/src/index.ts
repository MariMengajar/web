import { config } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import type { User } from 'firebase/auth';

const app = initializeApp(config);
export default app;

// =================
// Auth API
// =================
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGooglePopup = async () => {
  await signInWithPopup(auth, googleProvider);
};
const signOut = async () => {
  auth.signOut();
};

type FirebaseUser = User;

export type { FirebaseUser };
export { auth, onAuthStateChanged, signInWithGooglePopup, signOut };

// =================
// Firestore API
// =================
const db = getFirestore(app);

export {
  collection,
  getDoc,
  getDocs,
  setDoc,
  doc,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
export { db };
export * from './firestore/types';
export * from './firestore/constants';
export * from './firestore/utils';

// =================
// Cloud Storage API
// =================
const storage = getStorage();

export { storage };
