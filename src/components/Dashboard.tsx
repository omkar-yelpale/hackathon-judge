import { Button } from '@mantine/core'
import { useAuth } from '../hooks/useAuth'

export function Dashboard() {
  const { signOut } = useAuth()

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-xl font-bold text-white">Judgify</h1>
              </div>
              <span className="text-xs mt-1 px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full font-medium">
                Beta
              </span>
            </div>
            
            <Button onClick={signOut} variant="subtle" size="sm" className="text-gray-400 hover:text-white">
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Welcome to Judgify</h2>
          <p className="text-gray-400">Dashboard content coming soon...</p>
        </div>
      </main>
    </div>
  )
}