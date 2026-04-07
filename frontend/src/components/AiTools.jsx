import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useUser } from '@clerk/react';
import { useNavigate } from 'react-router-dom';

const AiTools = () => {

    const navigate = useNavigate();
    const {user} = useUser()

  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24 bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 py-16 rounded-2xl'>
  
  {/* Heading */}
  <div className='text-center'>
    <h2 className='text-slate-700 text-[42px] font-semibold'>
      Powerful AI Tools
    </h2>
    <p className='text-gray-600 max-w-lg mx-auto'>
      Everything you need to create amazing content with the power of AI
    </p>
  </div>

  {/* Cards */}
  <div className='flex flex-wrap mt-10 justify-center'>
    
    {AiToolsData.map((tool, index) => (
      <div 
        onClick={() => user && navigate(tool.path)} 
        key={index} 
        className='w-full md:w-1/2 lg:w-1/3 p-4'
      >
        <div className='bg-linear-to-br from-indigo-200 via-purple-200 to-pink-200 hover:from-indigo-300 hover:to-pink-300 transition duration-300 rounded-xl shadow-lg p-6 h-full flex flex-col items-center text-center cursor-pointer'>
          
          <h3 className='text-lg font-semibold text-gray-800'>
            {tool.title}
          </h3>

          <p className='text-gray-600 mt-2'>
            {tool.description}
          </p>

        </div>
      </div>
    ))}

  </div>
</div>
  )
}

export default AiTools