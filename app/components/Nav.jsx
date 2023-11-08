import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div>
        <div className='flex justify-center items-center text-center' >
      <div className='w-screen h-10 bg-blue-500 px-8 py-4 flex justify-center items-center text-center'>
        <Link className='rounded bg-blue-300 px-2  py-1 text-black' href='/login' >Sign/register</Link>
      </div>
    </div>
    </div>
  )
}
