import { ShieldAlert } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function AccessDenied() {
  return (
    <div className='flex gap-2 h-screen justify-center items-center '>
        <div className='bg-red-200 text-red-600 p-5 rounded-full '>
            <ShieldAlert/>
        </div>
        <div className=''>
            <h2>You don't have acceess to this page</h2>
            <p>Go back to  <Link className='underline cursor-pointer' href="/">Home</Link></p>
        </div>
    </div>
  )
}

export default AccessDenied