import { useQuery } from '@tanstack/react-query'

interface ExampleData {
  message: string
  timestamp: number
}

async function fetchExampleData(): Promise<ExampleData> {
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    message: 'Hello from TanStack Query!',
    timestamp: Date.now()
  }
}

export function useExampleQuery() {
  return useQuery({
    queryKey: ['example'],
    queryFn: fetchExampleData,
    staleTime: 30000, // Consider data fresh for 30 seconds
    gcTime: 5 * 60 * 1000, // Keep in cache for 5 minutes (formerly cacheTime)
  })
}