import { useState } from 'react'
import { Button } from '@mantine/core'
import { useExampleQuery } from './hooks/useExampleQuery'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { data, isLoading, error, refetch } = useExampleQuery()

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="flex flex-col items-center gap-12">
        <div className="flex gap-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-4xl font-bold text-blue-500">Vite + React + Mantine + Tailwind + TanStack Query</h1>
        
        <div className="flex flex-col items-center gap-4">
          <Button onClick={() => setCount((count) => count + 1)} size="lg">
            count is {count}
          </Button>
          <p className="text-gray-600">
            Edit <code className="bg-gray-100 px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">TanStack Query Example</h3>
          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
            </div>
          )}
          {error && <p className="text-red-500">Error: {(error as Error).message}</p>}
          {data && (
            <div className="flex flex-col gap-2">
              <p>{data.message}</p>
              <p className="text-xs text-gray-500">
                Fetched at: {new Date(data.timestamp).toLocaleTimeString()}
              </p>
              <Button onClick={() => refetch()} variant="light" size="xs">
                Refetch Data
              </Button>
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
