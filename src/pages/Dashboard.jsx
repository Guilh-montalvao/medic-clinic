
import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Calendar, MessageSquare, Activity } from 'lucide-react'

function Dashboard() {
  const stats = [
    { title: 'Total Patients', value: '1,245', icon: <Users className="h-6 w-6" />, color: 'bg-blue-100 text-blue-600' },
    { title: 'Appointments Today', value: '42', icon: <Calendar className="h-6 w-6" />, color: 'bg-green-100 text-green-600' },
    { title: 'New Messages', value: '8', icon: <MessageSquare className="h-6 w-6" />, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Active Consultations', value: '12', icon: <Activity className="h-6 w-6" />, color: 'bg-purple-100 text-purple-600' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card flex items-center p-5 border border-gray-100">
            <div className={`p-3 rounded-full mr-4 ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Bem-vindo ao Medic Clinic</h3>
          <p className="text-gray-600 mb-4">
            Nosso sistema médico integrado facilita o gerenciamento de pacientes, consultas e comunicações.
          </p>
          <p className="text-gray-600 mb-6">
            Use o menu à esquerda para navegar pelas diferentes seções do aplicativo.
          </p>
          <Link 
            to="/messages" 
            className="btn btn-primary inline-flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Ver Mensagens
          </Link>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Próximas Consultas</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center p-3 border border-gray-100 rounded-lg">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full mr-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Paciente {index + 1}</p>
                  <p className="text-sm text-gray-500">{`${10 + index}:00 - Dr. Silva`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
