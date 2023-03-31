import SubjectCard from '@mentora/ui/Cards/SubjectCard';
import { fetchAllSubjects } from '@mentora/firebase';

export default async function SubjectCatalogue() {
  const subjects = await fetchAllSubjects();

  return (
    <div className='py-12'>
      <div className='xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='mb-12 space-y-2 text-center'>
          <h2 className='text-3xl font-bold text-gray-800 md:text-4xl'>Subjects</h2>
          <p className='lg:mx-auto lg:w-6/12 text-gray-600'>
            Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum
            officia aliquid explicabo? Excepturi, voluptate?
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {subjects.map(subject => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              imageSrc='https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
              description={subject.description}
              tags={subject.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
