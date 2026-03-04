import { BrowserRouter as Router, Routes, Route } from 'react-router';
import FaceExpression from './Expression/components/FaceExpression';
import Home from './Home/pages/Home';
import Login from './Auth/pages/Login';
import Register from './Auth/pages/Register';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/face" element={<FaceExpression />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}