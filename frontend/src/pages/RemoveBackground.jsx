import React from 'react'

const RemoveBackground = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto space-y-6'>
        <h1 className='text-3xl font-bold text-gray-900'>Remove Background</h1>

        <div className='grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6'>
          <form className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Upload or paste image URL</h2>
            <p className='text-sm text-gray-500 mb-6'>Provide the image you want to remove the background from.</p>

            <input
              type='text'
              placeholder='Image URL or upload path'
              className='w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition'
            />

            <button
              type='submit'
              className='mt-5 inline-flex items-center justify-center w-full rounded-2xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition'
            >
              Remove Background
            </button>
          </form>

          <section className='bg-white rounded-3xl border border-gray-200 p-6 shadow-sm min-h-320px'>
            <h2 className='text-xl font-semibold text-gray-900 mb-4'>Output</h2>
            <div className='rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-5 min-h-220px'>
              <div className='relative overflow-hidden rounded-3xl bg-white shadow-sm'>
                <div className='aspect-4/3 bg-linear-to-br from-gray-200 via-white to-gray-200 flex items-center justify-center'>
                  <span className='text-gray-500'>Background removed image preview</span>
                </div>
              </div>
              <p className='mt-4 text-sm text-gray-500'>The finalized image with the background removed will appear here.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RemoveBackground