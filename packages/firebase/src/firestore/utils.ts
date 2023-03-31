import {
  db,
  collection,
  getDocs,
  query,
  orderBy,
  where,
  SUBJECTS_COLLECTION,
  SUBJECT_KEY,
} from '../';
import type { Subject, WithId } from '../';

export async function fetchSubjectBySlug(subjectSlug: string) {
  const q = query(collection(db, SUBJECTS_COLLECTION), where(SUBJECT_KEY.SLUG, '==', subjectSlug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size > 1) {
    throw new Error('There are more than one subject with the same slug');
  } else if (querySnapshot.size === 0) {
    throw new Error('There are no subjects with this slug');
  }

  const subject: WithId<Subject> = {
    id: querySnapshot.docs[0].id,
    ...(querySnapshot.docs[0].data() as Subject),
  };

  return subject;
}

export async function fetchAllSubjects() {
  const q = query(collection(db, SUBJECTS_COLLECTION), orderBy(SUBJECT_KEY.SCHEDULEDDATE, 'desc'));
  const querySnapshot = await getDocs(q);

  const subjects: WithId<Subject>[] = [];
  querySnapshot.forEach(doc => {
    subjects.push({
      id: doc.id,
      ...(doc.data() as Subject),
    });
  });

  return subjects;
}
