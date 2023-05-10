import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Header from './components/Header/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
