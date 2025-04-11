
import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, MessageSquare, Calendar, Users, Settings } from 'lucide-react'

function Layout() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link-inactive'
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-md">
        <div className="p-4 border-b border-gray-200 flex items-center justify-center">
          <img src="/logo.png" alt="Medic Clinic Logo" className="h-10" />
          <span className="ml-2 font-semibold text-primary-700">Medic Clinic</span>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/')}`}
              >
                <Home className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/messages" 
                className={`nav-link ${isActive('/messages')}`}
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                <span>Messages</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="nav-link nav-link-inactive"
              >
                <Calendar className="w-5 h-5 mr-3" />
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="nav-link nav-link-inactive"
              >
                <Users className="w-5 h-5 mr-3" />
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#" 
                className="nav-link nav-link-inactive"
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
        <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
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
