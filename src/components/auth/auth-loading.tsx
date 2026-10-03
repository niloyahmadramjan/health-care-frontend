import { Loader } from 'lucide-react'
import React from 'react'

function AuthLoading({label = "Verify account"}: {label?: string}) {
  return (
    <div className='flex gap-3 justify-center items-center w-full h-screen '>
        <Loader className='size-5 animate-spin'/>
        <h2 >{label}</h2>
    </div>
  )
}

export default AuthLoading