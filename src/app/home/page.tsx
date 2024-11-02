import Image from 'next/image'
import Navbar from '@/components/Navbar'
import UserCard from '@/components/userCard'

export default function HealthDashboard() {
  return (
    <div>
    <div className='mb-20'>
        <Navbar/>
    </div>
    <div className="min-h-screen bg-white">
    <div className='flex flex-col sm:flex-row justify-between m-2'>
        <div className='flex sm:flex-row lg:flex-row flex-col-reverse'>
        <div className="bg-white p-6 m-3 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                + Add New Record
              </button>
              <button className="w-full bg-white text-blue-600 py-2 px-4 rounded border border-blue-600 hover:bg-blue-50 transition duration-200">
                Share Health Data
              </button>
            </div>
        </div>
         <div>
            <UserCard/>
        </div>
        </div>
        <div className="bg-white p-6 m-3 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Health Records Overview</h3>
            <p className="text-sm text-gray-600 mb-2">Last Uploaded: Blood Test Results - 12th Oct</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">View all records →</a>
          </div>
    </div>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back Adee !</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Profile Completion Status</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
            </div>
            <p className="text-sm text-gray-600 mb-2">80% complete</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">Complete your profile →</a>
          </div>

          

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Health Records Overview</h3>
            <p className="text-sm text-gray-600 mb-2">Last Uploaded: Blood Test Results - 12th Oct</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">View all records →</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Permissions & Data Sharing</h3>
            <p className="text-sm text-gray-600 mb-2">3 healthcare providers have access to your data</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">Manage permissions →</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Notifications & Alerts</h3>
            <ul className="space-y-2 text-sm text-gray-600 mb-2">
              <li>Reminder: Upload latest health report</li>
              <li>Message from Dr. Smith</li>
            </ul>
            <a href="#" className="text-blue-600 hover:underline text-sm">View all notifications →</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Health Analytics</h3>
            <p className="text-sm text-gray-600 mb-2">Your blood pressure has improved by 5% this month</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">View detailed analytics →</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Mental Health Check-in</h3>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mb-2">
              Take Quick Assessment
            </button>
            <a href="#" className="text-blue-600 hover:underline text-sm">View mental health resources →</a>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}