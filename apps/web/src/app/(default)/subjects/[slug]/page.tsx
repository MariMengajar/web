import { fetchSubjectBySlug } from '@mentora/firebase';

export default async function Subject({ params }: { params: { slug: string } }) {
  const subject = await fetchSubjectBySlug(params.slug);

  return (
    <>
      <h1>{subject.data.title}</h1>
      <h3>{subject.data.scheduledDate.toDate().toLocaleDateString()}</h3>
      <p>{subject.data.description}</p>
    </>
  );
}
