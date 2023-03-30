import useFetchSubject from '~/lib/firestore/use-fetch-subject';

export default function Subject({ params }: { params: { slug: string } }) {
  const { data: subject, status } = useFetchSubject(params.slug);

  /* data is loading */
  if (status === `loading`) {
    return <div>Loading...</div>;
  }

  /* request errored */
  if (status === `error`) {
    return <div>Error!</div>;
  }

  return (
    <>
      <h1>{subject.title}</h1>
      <h2>{subject.scheduledDate.getDate()}</h2>
      <p>{subject.description}</p>
    </>
  );
}
