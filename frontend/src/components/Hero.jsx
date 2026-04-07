import React from 'react'
import { useNavigate } from 'react-router-dom'
import AiTools from './AiTools'

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 text-white shadow-md bg-cover bg-no-repeat min-h-screen'>
      <div className='text-center mb-6'>
        <h1 className='text-black text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create amazing content <br /> with
        <span className='text-blue-500'>  AI tools</span></h1>
        <p className='text-lg sm:text-xl md:text-2xl text-gray-700'>transform your content creation with  our suite of premium AI tools write articles,generate images and enhance your workflow.</p>
      </div>
      <div className='flex gap-6 justify-center items-center mt-6 flex-wrap'>
      
      <button
        onClick={() => navigate("/ai")}
        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300'
      >
        Start Creating Now
      </button>

      <button
        onClick={() => navigate("/demo")}
        className='bg-white hover:bg-blue-100 text-gray-800 px-6 py-3 rounded-lg shadow-lg transition duration-300'
      >
        Watch Demo
      </button>

    </div>
    </div>
  )
}

export default Hero