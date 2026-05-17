import type { User } from './types'

const roleColors: Record<string, string> = {
  Admin: 'bg-purple-500/10 text-purple-400 ring-purple-500/20',
  Developer: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
  Designer: 'bg-pink-500/10 text-pink-400 ring-pink-500/20',
  Manager: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
  QA: 'bg-green-500/10 text-green-400 ring-green-500/20',
  DevOps: 'bg-cyan-500/10 text-cyan-400 ring-cyan-500/20',
}

interface UserListProps {
  users: User[]
}

export function UserList({ users }: UserListProps) {
  return (
    <ul className="divide-y divide-gray-800">
      {users.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-800/50"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-sm font-medium text-gray-200">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>

          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${roleColors[user.role] ?? 'bg-gray-500/10 text-gray-400 ring-gray-500/20'}`}
          >
            {user.role}
          </span>
        </li>
      ))}
    </ul>
  )
}
