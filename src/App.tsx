import './App.css';
import LoginPage from './pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register/RegisterPage';
import HomePage from './pages/home/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
