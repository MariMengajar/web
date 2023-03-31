import { db, collection, getDocs, query, where, SUBJECTS_COLLECTION } from '@mentora/firebase';
import type { Subject } from '@mentora/firebase';

async function getSubject(subjectSlug: string) {
  const q = query(collection(db, SUBJECTS_COLLECTION), where('slug', '==', subjectSlug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size > 1) {
    throw new Error('There are more than one subject with the same slug');
  } else if (querySnapshot.size === 0) {
    throw new Error('There are no subjects with this slug');
  }

  const subject = querySnapshot.docs[0].data() as Subject;

  return subject;
}

export default async function Subject({ params }: { params: { slug: string } }) {
  const subject = await getSubject(params.slug);

  /* data is loading */
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
