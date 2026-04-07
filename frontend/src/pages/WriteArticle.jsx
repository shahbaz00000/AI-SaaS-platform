import React from 'react'

const WriteArticle = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto space-y-6'>
        <h1 className='text-3xl font-bold text-gray-900'>Write Article</h1>

        <div className='grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6'>
          <form className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Enter prompt</h2>
            <p className='text-sm text-gray-500 mb-6'>Describe the article you want written.</p>

            <input
              type='text'
              placeholder='e.g. benefits of remote work for startups'
              className='w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition'
            />

            <button
              type='submit'
              className='mt-5 inline-flex items-center justify-center w-full rounded-2xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition'
            >
              Generate Article
            </button>
          </form>

          <section className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm min-h-320px'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Generated Output</h2>
            <div className='rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-5 text-gray-600 min-h-220px'>
              <p className='text-gray-500'>Your article output will show here.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default WriteArticle