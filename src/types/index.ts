export interface User {
  id: string
  email: string
  name: string
  plan: 'explorer' | 'pro' | 'elite' | 'souveraine'
  createdAt: Date
}

export interface AuditResult {
  id: string
  url: string
  score: number
  errors: string[]
  createdAt: Date
}

export interface Plan {
  id: string
  name: string
  price: number
  features: string[]
}
