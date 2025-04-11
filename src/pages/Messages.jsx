
import React, { useState } from 'react'
import { 
  Send, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Edit
} from 'lucide-react'

// Mock data for demonstration
const initialMessages = [
  {
    id: 1,
    patientName: 'John Smith',
    messageType: 'Appointment Confirmation',
    status: 'delivered',
    sentAt: '2025-04-10T09:30:00',
  },
  {
    id: 2,
    patientName: 'Sarah Johnson',
    messageType: 'Appointment Reminder',
    status: 'read',
    sentAt: '2025-04-10T10:15:00',
  },
  {
    id: 3,
    patientName: 'Michael Brown',
    messageType: 'Birthday Wishes',
    status: 'sent',
    sentAt: '2025-04-10T11:45:00',
  },
  {
    id: 4,
    patientName: 'Emily Davis',
    messageType: 'Consultation Follow-up',
    status: 'error',
    sentAt: '2025-04-10T14:20:00',
  },
]

const triggerOptions = [
  'When an appointment is confirmed',
  '24 hours before an appointment',
  'After a consultation',
  'When an appointment is rescheduled',
  'On a patient\'s birthday'
]

function Messages() {
  const [messages, setMessages] = useState(initialMessages)
  const [messageText, setMessageText] = useState('Hello {{name}}, your appointment is scheduled for {{date}} at {{time}}.')
  const [selectedTrigger, setSelectedTrigger] = useState(triggerOptions[0])
  const [testNumber, setTestNumber] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleSendTest = () => {
    if (!testNumber) {
      showToastMessage('Please enter a phone number for testing')
      return
    }
    
    const previewMessage = messageText
      .replace('{{name}}', 'Test Patient')
      .replace('{{date}}', '04/15/2025')
      .replace('{{time}}', '10:00 AM')
    
    // In a real app, this would send the message to the WhatsApp API
    showToastMessage(`Test message sent to ${testNumber}: "${previewMessage}"`)
  }

  const showToastMessage = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  // Stats for the dashboard
  const totalSentToday = messages.length
  const upcomingScheduled = 5
  const failedMessages = messages.filter(m => m.status === 'error').length

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">WhatsApp Messages</h2>
      
      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
              <Send size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Sent Today</p>
              <p className="text-xl font-semibold">{totalSentToday}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Upcoming Scheduled</p>
              <p className="text-xl font-semibold">{upcomingScheduled}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-500 mr-4">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Failed Messages</p>
              <p className="text-xl font-semibold">{failedMessages}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message Editor */}
        <div className="lg:col-span-2 bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Message Editor</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message Template
              </label>
              <div className="relative">
                <textarea
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
                <div className="absolute bottom-2 right-2">
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs mr-1" 
                    onClick={() => setMessageText(messageText + '{{name}}')}>
                    {'{'}'{'}name{'}'}'{'}'}
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs mr-1"
                    onClick={() => setMessageText(messageText + '{{date}}')}>
                    {'{'}'{'}date{'}'}'{'}'}
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                    onClick={() => setMessageText(messageText + '{{time}}')}>
                    {'{'}'{'}time{'}'}'{'}'}
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Trigger
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={selectedTrigger}
                onChange={(e) => setSelectedTrigger(e.target.value)}
              >
                {triggerOptions.map((trigger, index) => (
                  <option key={index} value={trigger}>
                    {trigger}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Test Phone Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+1 (555) 123-4567"
                  value={testNumber}
                  onChange={(e) => setTestNumber(e.target.value)}
                />
              </div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center mt-5"
                onClick={handleSendTest}
              >
                <Send size={16} className="mr-2" />
                Send Test
              </button>
            </div>
          </div>
        </div>
        
        {/* Scheduling Panel */}
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Scheduling</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Appointment Reminder"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Calendar size={18} className="absolute right-2 top-2.5 text-gray-400" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Clock size={18} className="absolute right-2 top-2.5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Repeat
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Never</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
              Schedule Message
            </button>
          </div>
        </div>
      </div>
      
      {/* Message History */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Message History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {messages.map((message) => (
                <tr key={message.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{message.patientName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{message.messageType}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      message.status === 'delivered' ? 'bg-blue-100 text-blue-800' :
                      message.status === 'read' ? 'bg-green-100 text-green-800' :
                      message.status === 'sent' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(message.sentAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit size={16} />
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      <Send size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  )
}

export default Messages
