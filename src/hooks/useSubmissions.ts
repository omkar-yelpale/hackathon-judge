import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../lib/supabase'
import type { Submission } from '../types'
import { useAuth } from './useAuth'

export function useSubmissions() {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  // Fetch all submissions
  const { data: submissions = [], isLoading, error } = useQuery({
    queryKey: ['submissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as Submission[]
    }
  })

  // Check if current user has already submitted
  const { data: userSubmission } = useQuery({
    queryKey: ['userSubmission', user?.id],
    queryFn: async () => {
      if (!user) return null
      
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle()

      if (error) throw error
      return data as Submission | null
    },
    enabled: !!user
  })

  // Add submission mutation
  const addSubmission = useMutation({
    mutationFn: async (submission: { title: string; application_url: string; more_info?: string }) => {
      if (!user) throw new Error('User not authenticated')

      const { data, error } = await supabase
        .from('submissions')
        .insert({
          ...submission,
          user_id: user.id,
          user_email: user.email
        })
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] })
      queryClient.invalidateQueries({ queryKey: ['userSubmission'] })
    }
  })

  // Update submission mutation
  const updateSubmission = useMutation({
    mutationFn: async ({ id, ...updates }: { id: string; title?: string; application_url?: string; more_info?: string }) => {
      const { data, error } = await supabase
        .from('submissions')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] })
      queryClient.invalidateQueries({ queryKey: ['userSubmission'] })
    }
  })

  return {
    submissions,
    isLoading,
    error,
    userSubmission,
    hasSubmitted: !!userSubmission,
    addSubmission,
    updateSubmission
  }
}