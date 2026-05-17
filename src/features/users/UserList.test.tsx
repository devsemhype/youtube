import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { UserList } from './UserList'
import type { User } from './types'

const mockUsers: User[] = [
  { id: '1', name: 'Ana Souza', email: 'ana@empresa.com', role: 'Admin' },
  { id: '2', name: 'Bruno Lima', email: 'bruno@empresa.com', role: 'Developer' },
]

describe('UserList', () => {
  it('renders all users', () => {
    render(<UserList users={mockUsers} />)

    expect(screen.getByText('Ana Souza')).toBeInTheDocument()
    expect(screen.getByText('Bruno Lima')).toBeInTheDocument()
  })

  it('renders user emails', () => {
    render(<UserList users={mockUsers} />)

    expect(screen.getByText('ana@empresa.com')).toBeInTheDocument()
    expect(screen.getByText('bruno@empresa.com')).toBeInTheDocument()
  })

  it('renders user roles', () => {
    render(<UserList users={mockUsers} />)

    expect(screen.getByText('Admin')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
  })

  it('renders empty list without crashing', () => {
    const { container } = render(<UserList users={[]} />)
    expect(container.querySelector('ul')).toBeInTheDocument()
  })
})
