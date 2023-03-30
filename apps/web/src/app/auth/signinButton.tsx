'use client'
import Image from 'next/image';
import useUserStore from '@mentora/store'
import { auth, signInGoogleWithPopup, signOut } from "@mentora/firebase"

export default function SignInButton() {
  const userState = useUserStore((state: any) => state.user)

  const handleLogin = () => {
    signInGoogleWithPopup()
  }

  const handleLogout = () => {
    signOut()
  }
  return (
    <div className='btn-wrapper text-center'>
      {!userState ? (
        <button
          className='bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
          type='button'
          onClick={handleLogin}
        >
          <Image
            alt='...'
            className='w-5 mr-1'
            src='/img/google.svg'
            width={20}
            height={20}
          />
          Google
        </button>
      ) : (
        <button
          className='bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150'
          type='button'
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  )
}
