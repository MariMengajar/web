import SignInButton from './signinButton';

export default function Login() {
  return (
    <div className='container mx-auto px-4 h-full'>
      <div className='flex content-center items-center justify-center h-full'>
        <div className='w-full lg:w-4/12 px-4'>
          <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0'>
            <div className='rounded-t mb-0 px-6 py-6'>
              <div className='text-center mb-3'>
                <h6 className='text-slate-500 text-sm font-bold'>Sign in with</h6>
              </div>
              <SignInButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
