import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProjectForm from './pages/ProjectForm'
import Navbar from './components/Navbar'
import PrivateRoute from './utils/PrivateRoute'
import { useAuth } from './context/AuthContext'

const App = () => {
  const { user } = useAuth()

  return (
    <div>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <ProjectForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <ProjectForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
