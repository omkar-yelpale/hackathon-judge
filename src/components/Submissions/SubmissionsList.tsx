import { useState } from 'react'
import { Button, Modal } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useSubmissions } from '../../hooks/useSubmissions'
import { SubmissionCard } from './SubmissionCard'
import { SubmissionDetails } from './SubmissionDetails'
import type { Submission } from '../../types'

export function SubmissionsList() {
  const navigate = useNavigate()
  const { submissions, isLoading, error, hasSubmitted } = useSubmissions()
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error loading submissions</p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Submissions</h2>
            <p className="text-gray-400 mt-1">
              {submissions.length} {submissions.length === 1 ? 'project' : 'projects'} submitted
            </p>
          </div>
          
          {!hasSubmitted && (
            <Button
              onClick={() => navigate('/add-submission')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Add Submission
            </Button>
          )}
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-12 bg-gray-800 rounded-lg border border-gray-700">
            <svg className="w-12 h-12 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-400">No submissions yet</p>
            {!hasSubmitted && (
              <p className="text-gray-500 mt-2">Be the first to submit your project!</p>
            )}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {submissions.map((submission) => (
              <SubmissionCard
                key={submission.id}
                submission={submission}
                onClick={() => setSelectedSubmission(submission)}
              />
            ))}
          </div>
        )}
      </div>

      <Modal
        opened={!!selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
        size="lg"
        title={selectedSubmission?.title}
        styles={{
          header: { backgroundColor: '#1f2937', color: '#fff' },
          body: { backgroundColor: '#1f2937' },
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' }
        }}
      >
        {selectedSubmission && (
          <SubmissionDetails submission={selectedSubmission} />
        )}
      </Modal>
    </>
  )
}