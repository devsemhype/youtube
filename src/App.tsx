import { users } from './data/users'
import { UsersPage } from './features/users/UsersPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <UsersPage users={users} />
    </div>
  )
}

export default App
