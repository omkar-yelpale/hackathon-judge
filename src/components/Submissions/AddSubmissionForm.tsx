import { useState } from 'react'
import { Button, TextInput, Textarea, Tooltip } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useSubmissions } from '../../hooks/useSubmissions'

export function AddSubmissionForm() {
  const navigate = useNavigate()
  const { addSubmission, hasSubmitted } = useSubmissions()
  const [title, setTitle] = useState('')
  const [applicationUrl, setApplicationUrl] = useState('')
  const [moreInfo, setMoreInfo] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!title.trim()) {
      newErrors.title = 'Title is required'
    } else if (title.length > 100) {
      newErrors.title = 'Title must be 100 characters or less'
    }

    if (!applicationUrl.trim()) {
      newErrors.applicationUrl = 'Application URL is required'
    } else {
      try {
        new URL(applicationUrl)
      } catch {
        newErrors.applicationUrl = 'Please enter a valid URL'
      }
    }

    if (moreInfo.length > 1000) {
      newErrors.moreInfo = 'More info must be 1000 characters or less'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    try {
      await addSubmission.mutateAsync({
        title: title.trim(),
        application_url: applicationUrl.trim(),
        more_info: moreInfo.trim() || undefined
      })
      navigate('/dashboard')
    } catch (error) {
      if (error instanceof Error && error.message.includes('duplicate')) {
        setErrors({ form: 'You have already submitted a project' })
      } else {
        setErrors({ form: 'Failed to submit. Please try again.' })
      }
    }
  }

  if (hasSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-2">You've already submitted!</h2>
          <p className="text-gray-400 mb-4">Each participant can only submit one project.</p>
          <Button
            onClick={() => navigate('/dashboard')}
            variant="subtle"
            className="text-purple-400 hover:text-purple-300"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Submit Your Project</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextInput
            label="Project Title"
            placeholder="My Awesome Hack"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            error={errors.title}
            required
            description={`${title.length}/100 characters`}
            styles={{
              label: { color: '#9ca3af' },
              input: { 
                backgroundColor: '#1f2937',
                borderColor: '#374151',
                color: '#fff',
                '&:focus': { borderColor: '#a855f7' }
              },
              description: { color: '#6b7280' }
            }}
          />

          <TextInput
            label="Application URL"
            placeholder="https://your-app.com"
            value={applicationUrl}
            onChange={(e) => setApplicationUrl(e.currentTarget.value)}
            error={errors.applicationUrl}
            required
            description="Enter the URL of your deployed application"
            styles={{
              label: { color: '#9ca3af' },
              input: { 
                backgroundColor: '#1f2937',
                borderColor: '#374151',
                color: '#fff',
                '&:focus': { borderColor: '#a855f7' }
              },
              description: { color: '#6b7280' }
            }}
          />

          <Textarea
            label={
              <div className="flex items-center gap-2">
                <span>More Information (Optional)</span>
                <Tooltip
                  label={
                    <div className="space-y-1">
                      <p>Include details such as:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Source code URL (GitHub, GitLab, etc.)</li>
                        <li>Team members' names</li>
                        <li>Project description and features</li>
                        <li>Technologies used</li>
                        <li>Any other relevant information</li>
                      </ul>
                    </div>
                  }
                  multiline
                  width={300}
                  withArrow
                  position="top"
                >
                  <div className="cursor-help">
                    <svg className="w-4 h-4 text-gray-400 hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </Tooltip>
              </div>
            }
            placeholder="Include source code URL, team members, project details..."
            value={moreInfo}
            onChange={(e) => setMoreInfo(e.currentTarget.value)}
            error={errors.moreInfo}
            minRows={4}
            description={`${moreInfo.length}/1000 characters`}
            styles={{
              label: { color: '#9ca3af' },
              input: { 
                backgroundColor: '#1f2937',
                borderColor: '#374151',
                color: '#fff',
                '&:focus': { borderColor: '#a855f7' }
              },
              description: { color: '#6b7280' }
            }}
          />

          {errors.form && (
            <div className="text-red-500 text-sm">{errors.form}</div>
          )}

          <div className="flex gap-4">
            <Button
              type="submit"
              loading={addSubmission.isPending}
              disabled={!title || !applicationUrl}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Submit Project
            </Button>
            
            <Button
              type="button"
              variant="subtle"
              onClick={() => navigate('/dashboard')}
              className="text-gray-400 hover:text-white"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}