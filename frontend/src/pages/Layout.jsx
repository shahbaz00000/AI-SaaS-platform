import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom"
import { Menu, Sparkles, Bell, Search } from "lucide-react"
import { useState } from 'react'
import { X } from "lucide-react"
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from "@clerk/react"

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user } = useUser()

  if (!user) {
    return (
      <div className='min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <div className='text-center mb-8'>
            <div className='inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg mb-4'>
              <Sparkles className='w-8 h-8 text-white' />
            </div>
            <h1 className='text-2xl font-bold text-gray-900 mb-2'>Welcome to Quick AI</h1>
            <p className='text-gray-600'>Sign in to access your AI-powered workspace</p>
          </div>
          <div className='bg-white rounded-2xl shadow-xl border border-gray-100 p-6'>
            <SignIn />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex h-screen bg-gray-50 overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col overflow-hidden md:ml-64'>
        {/* Navbar */}
        <nav className='bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm z-30'>
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              {/* Left side - Mobile menu button */}
              <div className='flex items-center'>
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className='md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200'
                >
                  {sidebarOpen ? (
                    <X className='w-5 h-5' />
                  ) : (
                    <Menu className='w-5 h-5' />
                  )}
                </button>

                {/* Desktop Logo (hidden on mobile when sidebar is closed) */}
                <div className='hidden md:block md:ml-0'>
                  <Link to="/" className="flex items-center gap-3 text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-200">
                    <div className='w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center'>
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    Quick AI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className='flex-1 overflow-auto bg-gray-50'>
          <div className='h-full'>
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Layout