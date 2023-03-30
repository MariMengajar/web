import { useFirestore, useFirestoreDocData } from 'reactfire';
import { doc, DocumentReference, t, c } from '@mentora/firebase/firestore';

type Response = t.Subject;

export function useFetchSubject(subjectId: string) {
  const firestore = useFirestore();

  const ref = doc(firestore, c.SUBJECTS_COLLECTION, subjectId) as DocumentReference<Response>;

  return useFirestoreDocData(ref, { idField: 'id' });
}

export default useFetchSubject;
