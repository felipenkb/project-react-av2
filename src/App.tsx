import './App.css';
import LoginPage from './pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register/RegisterPage';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import AuthService from './services/AuthService';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage authService={new AuthService()} />} />
        <Route path='/register' element={<RegisterPage authService={new AuthService()} />} />
        <Route path='/dashboard' element={<DashBoardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
