import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate =  useNavigate();
    const handleClick = () => {
        navigate('/search');
      };
  return (
    <div className='bg-mainBgColor w-full h-screen text-white flex flex-col gap-12 font-bold'>
      <div  className='font-black text-gray-100 text-8xl font-sans flex justify-center pt-40'>AI Trip Planner</div>
      <div className='text-yellowColor flex justify-center items-center'>From sunrise to sunset, let your dreams take flight,<br/> We’ll plan every detail, making your journey just right</div>
      <button onClick={handleClick} className='bg-btnColor text-black w-24 m-auto p-2 rounded-lg'>Let's Plan</button>
    </div>
  )
}

