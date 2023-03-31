const FooterSmall = ({ absolute }: { absolute?: boolean }) => {
  return (
    <footer className={(absolute ? 'absolute w-full bottom-0 bg-slate-800' : 'relative') + ' pb-6'}>
      <div className='container mx-auto px-4'>
        <hr className='mb-6 border-b-1 border-slate-600' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 mx-auto'>
            <div className='mx-auto text-sm text-slate-500 font-semibold py-1 text-center'>
              Copyright © {new Date().getFullYear()} Mentora by Mentora Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSmall;
