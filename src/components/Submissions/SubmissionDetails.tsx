import { format } from 'date-fns'
import { Button } from '@mantine/core'
import type { Submission } from '../../types'

interface SubmissionDetailsProps {
  submission: Submission
}

export function SubmissionDetails({ submission }: SubmissionDetailsProps) {
  return (
    <div className="space-y-5">
      {/* Project Title Header */}
      <div className="pb-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white">{submission.title}</h2>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
          <span>{submission.user_email || 'Anonymous'}</span>
          <span>•</span>
          <span>{format(new Date(submission.created_at), 'MMM d, yyyy h:mm a')}</span>
        </div>
      </div>

      {/* Application Link */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Application</h3>
        <Button
          component="a"
          href={submission.application_url}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          color="violet"
          leftSection={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          }
          fullWidth
          className="justify-start"
        >
          Visit Application
        </Button>
        <p className="mt-2 text-xs text-gray-500 break-all">{submission.application_url}</p>
      </div>

      {/* Project Details */}
      {submission.more_info && (
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Project Details</h3>
          <div className="bg-gray-800/50 rounded-md p-4 border border-gray-700">
            <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
              {submission.more_info}
            </p>
          </div>
        </div>
      )}

      {!submission.more_info && (
        <div className="text-center py-4 text-gray-500 text-sm">
          No additional project details provided
        </div>
      )}
    </div>
  )
}