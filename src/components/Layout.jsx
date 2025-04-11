
import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, MessageSquare, Calendar, Users, Settings } from 'lucide-react'

function Layout() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <img src="/logo.png" alt="Medic Clinic Logo" className="h-10 mx-auto" />
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className={`flex items-center px-4 py-3 rounded-lg ${isActive('/')}`}
              >
                <Home className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/messages" 
                className={`flex items-center px-4 py-3 rounded-lg ${isActive('/messages')}`}
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Calendar className="w-5 h-5 mr-3" />
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Users className="w-5 h-5 mr-3" />
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 py-4 px-6">
          <h1 className="text-xl font-semibold text-gray-800">Medic Clinic</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
