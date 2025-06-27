import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { AddSubmissionForm } from './components/Submissions/AddSubmissionForm'
import { Layout } from './components/Layout/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRoute />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/add-submission" 
          element={
            <ProtectedRoute>
              <Layout>
                <AddSubmissionForm />
              </Layout>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

function LoginRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  return <Login />
}

export default App
