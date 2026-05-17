export type UserRole = 'Admin' | 'Developer' | 'Designer' | 'Manager' | 'QA' | 'DevOps'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}
