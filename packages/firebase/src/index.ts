import { getStorage } from 'firebase/storage';

// =================
// Firebase App
// =================
export { default } from './app';

// =================
// Auth API
// =================
export { auth } from './auth';
export * from './auth/libs';
export * from './auth/types';
export * from './auth/utils';

// =================
// Firestore API
// =================
export { db } from './firestore';
export * from './firestore/constants';
export * from './firestore/libs';
export * from './firestore/types';
export * from './firestore/utils';

// =================
// Cloud Storage API
// =================
const storage = getStorage();

export { storage };
