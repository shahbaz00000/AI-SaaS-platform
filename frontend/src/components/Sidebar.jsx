import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Home,
  FileText,
  PenTool,
  Image as ImageIcon,
  Scissors,
  Minus,
  LogOut,
  User
} from 'lucide-react'

const Sidebar = ({ sidebarOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { path: '/ai', label: 'Dashboard', icon: Home },
    { path: 'blog-title', label: 'Blog Title', icon: FileText },
    { path: 'write-article', label: 'Write Article', icon: PenTool },
    { path: 'generate-image', label: 'Generate Image', icon: ImageIcon },
    { path: 'remove-background', label: 'Remove Background', icon: Scissors },
    { path: 'remove-object', label: 'Remove Object', icon: Minus },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div
      className={`fixed top-16 left-0 z-40 h-[calc(100vh-64px)] w-64
      bg-white/95 backdrop-blur-2xl border-r border-gray-200/50 shadow-2xl
      transform transition-all duration-300 ease-in-out
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0`}
    >

      {/* Profile */}
      <div className="px-6 py-6 border-b border-gray-100/50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-linear-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold shadow-lg ring-2 ring-white">
              S
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-semibold text-gray-900 truncate">
              Shahbaz
            </h1>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <User className="w-3 h-3" />
              AI Creator 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${active
                    ? 'bg-linear-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:bg-gray-100 hover:shadow-md hover:shadow-gray-300'
                  }`}
              >
                <Icon className={`w-5 h-5 transition-colors duration-200
                  ${active ? 'text-white' : 'text-gray-500 group-hover:text-blue-500'}`} />
                <span className="font-medium">{item.label}</span>
                {active && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="px-4 pb-6">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl linear-to-r from-red-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200">
          <LogOut className="w-4 h-4" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar