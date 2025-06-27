import { formatDistanceToNow } from 'date-fns'
import type { Submission } from '../../types'

interface SubmissionCardProps {
  submission: Submission
  onClick: () => void
}

export function SubmissionCard({ submission, onClick }: SubmissionCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 cursor-pointer transition-colors border border-gray-700 hover:border-purple-500/50"
    >
      <h3 className="text-lg font-semibold text-white mb-2 truncate">
        {submission.title}
      </h3>
      
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span className="truncate mr-2">
          {submission.user_email || 'Anonymous'}
        </span>
        <span className="flex-shrink-0">
          {formatDistanceToNow(new Date(submission.created_at), { addSuffix: true })}
        </span>
      </div>
    </div>
  )
}