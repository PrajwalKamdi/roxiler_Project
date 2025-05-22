import React from 'react'
import { LuLoaderCircle } from "react-icons/lu";
const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black text-white '>
     
      <LuLoaderCircle className='animate-spin ' size={50}/>
    </div>
  )
}

export default Loading
