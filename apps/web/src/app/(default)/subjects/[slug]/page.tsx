import { fetchSubjectBySlug } from '@mentora/firebase';
import Image from 'next/image';

export default async function Subject({ params }: { params: { slug: string } }) {
  const subject = await fetchSubjectBySlug(params.slug);
  const splitLastWord = (s: string) => {
    let words = s.split(' ');
    const lastWord = words.pop();
    return { first: words.join(' '), last: lastWord };
  };

  const { first, last } = splitLastWord(subject.title);

  return (
    <div className='border-b py-16'>
      <div className='container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7'>
        <div className='grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0'>
          <div className='col-span-1'>
            <div className='relative w-full'>
              <Image src='/img/profile.jpg' alt='shoes' width={640} height={640} />
            </div>
          </div>

          <div className='relative col-span-1'>
            <h1 className='font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl'>
              {first} <span className='text-cyan-800'>{last}</span>.
            </h1>
            <div className='mt-8 lg:mt-16 space-y-8'>
              <p className='text-gray-700'>
                Date: {subject.scheduledDate.toDate().toLocaleDateString()}
              </p>
              <p className='text-gray-700'>Tags: {subject.tags.join(' ')}</p>
              <p className='text-gray-700'>{subject.description}</p>
              <div className='flex space-x-4 mt-6'>
                <button
                  type='button'
                  title='Start buying'
                  className='w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max'
                >
                  <span className='block text-white text-sm'>Join now</span>
                </button>
                <button
                  type='button'
                  title='Start buying'
                  className='w-full py-3 px-6 text-center rounded-full transition border border-gray-200 sm:w-max'
                >
                  <span className='block text-gray-800 text-sm'>Learn more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
