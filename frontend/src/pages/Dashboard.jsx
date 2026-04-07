import React, { useEffect, useState } from 'react'
import { BarChart3, FileText, Image, Users } from 'lucide-react'

const Dashboard = () => {

  const [creations, setCreations] = useState([]);

  const dummyCreationData = [
    { id: 1, type: 'Article', title: 'AI in Modern Business', date: '2024-01-15' },
    { id: 2, type: 'Image', title: 'Futuristic Cityscape', date: '2024-01-14' },
    { id: 3, type: 'Article', title: 'Machine Learning Basics', date: '2024-01-13' },
    { id: 4, type: 'Image', title: 'Abstract Art', date: '2024-01-12' },
  ];

  const getDashData = () => {
    setCreations(dummyCreationData)
  }

  useEffect(() => {
    getDashData()
  }, [])

  const stats = [
    { title: 'Total Creations', value: '24', icon: BarChart3, color: 'bg-blue-500' },
    { title: 'Articles Written', value: '12', icon: FileText, color: 'bg-green-500' },
    { title: 'Images Generated', value: '8', icon: Image, color: 'bg-purple-500' },
    { title: 'Active Users', value: '156', icon: Users, color: 'bg-orange-500' },
  ];

  return (
    <div className='h-full overflow-y-scroll px-6 py-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>Dashboard</h1>
          <p className='text-gray-600'>Welcome back! Here's an overview of your AI creations.</p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          {stats.map((stat, index) => (
            <div key={index} className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>{stat.title}</p>
                  <p className='text-2xl font-bold text-gray-900'>{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className='w-6 h-6 text-white' />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Creations */}
        <div className='bg-white rounded-lg shadow-sm border border-gray-200'>
          <div className='px-6 py-4 border-b border-gray-200'>
            <h2 className='text-xl font-semibold text-gray-900'>Recent Creations</h2>
          </div>
          <div className='divide-y divide-gray-200'>
            {creations.length > 0 ? (
              creations.map((creation) => (
                <div key={creation.id} className='px-6 py-4 flex items-center justify-between hover:bg-gray-50'>
                  <div className='flex items-center space-x-4'>
                    <div className={`p-2 rounded-full ${
                      creation.type === 'Article' ? 'bg-blue-100' : 'bg-purple-100'
                    }`}>
                      {creation.type === 'Article' ? (
                        <FileText className='w-5 h-5 text-blue-600' />
                      ) : (
                        <Image className='w-5 h-5 text-purple-600' />
                      )}
                    </div>
                    <div>
                      <p className='font-medium text-gray-900'>{creation.title}</p>
                      <p className='text-sm text-gray-500'>{creation.type} • {creation.date}</p>
                    </div>
                  </div>
                  <button className='text-blue-600 hover:text-blue-800 font-medium'>
                    View
                  </button>
                </div>
              ))
            ) : (
              <div className='px-6 py-8 text-center text-gray-500'>
                No creations yet. Start creating with our AI tools!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard