import { Button } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'

export function Login() {
  const { signInWithGoogle } = useAuth()

  // Fetch submission count for preview
  const { data: submissionCount } = useQuery({
    queryKey: ['submissionCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('submissions')
        .select('*', { count: 'exact', head: true })
      return count || 0
    }
  })

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error('Error signing in with Google:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-3xl font-bold text-white">Judgify</h1>
          </div>
          <h2 className="text-xl text-gray-300">
            Hackathon Submission Portal
          </h2>
          <p className="mt-2 text-gray-400">
            Submit and browse hackathon projects in one place
          </p>
          {submissionCount !== undefined && submissionCount > 0 && (
            <div className="mt-4">
              <p className="text-purple-400 font-medium">
                {submissionCount} {submissionCount === 1 ? 'project' : 'projects'} submitted
              </p>
            </div>
          )}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <Button
            onClick={handleGoogleSignIn}
            fullWidth
            size="lg"
            leftSection={
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
            variant="white"
            className="bg-white text-gray-900 hover:bg-gray-100 font-medium"
          >
            Sign in with Google
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Sign in to submit your project or browse submissions
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to participate fairly and respectfully
          </p>
        </div>
      </div>
    </div>
  )
}