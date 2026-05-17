import type { User } from './types'
import { UserList } from './UserList'

interface UsersPageProps {
  users: User[]
}

export function UsersPage({ users }: UsersPageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Usuários
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Gerencie os usuários cadastrados no sistema.
        </p>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
          <span className="text-sm text-gray-400">
            {users.length} usuário{users.length !== 1 ? 's' : ''} encontrado{users.length !== 1 ? 's' : ''}
          </span>
        </div>

        <UserList users={users} />
      </div>
    </div>
  )
}
