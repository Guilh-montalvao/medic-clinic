
import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">Welcome to the Medic Clinic application.</p>
        <p className="text-gray-600 mb-4">Use the menu on the left to navigate through different sections of the application.</p>
        <Link 
          to="/messages" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Go to Messages
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
