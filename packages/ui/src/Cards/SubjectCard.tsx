import Image from 'next/image';

interface SubjectProps {
  title: string;
  imageSrc: string;
  description: string;
  tags: string[];
  slug: string;
}

const SubjectCard = (props: SubjectProps) => {
  return (
    <div className='group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10'>
      <div className='relative overflow-hidden rounded-xl'>
        <Image
          src={props.imageSrc}
          alt='art cover'
          width={1000}
          height={667}
          className='h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105'
        />
      </div>
      <div className='mt-6 relative'>
        <h3 className='text-2xl font-semibold text-gray-800'>{props.title}</h3>
        <h4 className='text-sm font-thin text-gray-500'>{props.tags.join(' ')}</h4>
        <p className='mt-6 mb-8 text-gray-600'>{props.description.substring(0, 100)}</p>
        <a className='inline-block' href={props.slug}>
          <span className='text-primary'>Join</span>
        </a>
      </div>
    </div>
  );
};

export default SubjectCard;
