import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import AdminProtectedRoute from './components/auth/AdminProtectedRoute';


function App() {


  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      {/* TODO:  add protected route */}
      <Route path='/dashboard' element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path='/admin' element={<AdminProtectedRoute><DashboardPage /></AdminProtectedRoute>} />

      <Route path='/' element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App