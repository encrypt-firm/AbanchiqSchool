import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
// import Logout from './components/logout/Logout'


function App() {
  return (

    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
