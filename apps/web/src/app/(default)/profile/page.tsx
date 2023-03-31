'use client';
import { useUserStore } from '@mentora/store';

export default function Profile() {
  const { user, signOut } = useUserStore();

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0'>
              <div className='rounded-t mb-0 px-6 py-6 space-y-6'>
                <div className='text-center mb-3'>
                  <h2 className='font-bold'>User Profile</h2>
                  {user && (
                    <button
                      className='bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 mx-auto'
                      type='button'
                      onClick={signOut}
                    >
                      Logout
                    </button>
                  )}
                </div>
                <div>
                  <h2 className='font-bold'>Username</h2>
                  <p>{user?.username}</p>
                </div>
                <div>
                  <h2 className='font-bold'>Account Type</h2>
                  <p className='capitalize'>{user?.accountType}</p>
                </div>
                <div>
                  <h2 className='font-bold'>Account Status</h2>
                  <p className='capitalize'>{user?.status}</p>
                </div>
                <div>
                  <h2 className='font-bold'>Biodata</h2>
                  <p className='capitalize'>{user?.biodata ? user.biodata : '....'}</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor='verificationFile' className='font-bold'>
                    Verification Status
                  </label>
                  <input type='file' name='verificationFile' id='verificationFile' />
                  <input
                    type='submit'
                    value='Submit'
                    className='bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 mx-auto'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
