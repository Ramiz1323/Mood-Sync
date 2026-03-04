import './App.scss'
import { AppRoutes } from './routes.jsx';
import { AuthProvider } from './Auth/auth.context.jsx';

function App() {
  return (
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
  )
}

export default App