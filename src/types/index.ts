export interface Submission {
  id: string
  user_id: string
  user_email?: string | null
  title: string
  application_url: string
  more_info?: string | null
  created_at: string
  updated_at: string
}

export interface Database {
  public: {
    Tables: {
      submissions: {
        Row: Submission
        Insert: Omit<Submission, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Submission, 'id' | 'created_at' | 'updated_at'>>
      }
    }
  }
}