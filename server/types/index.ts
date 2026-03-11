export interface AuditRequest {
  url: string
  deepScan?: boolean
}

export interface AuditResult {
  id: string
  url: string
  score: number
  errors: string[]
  warnings: string[]
  timestamp: Date
}

export interface User {
  id: string
  email: string
  name: string
}
