import React from 'react'
import Signup from './Pages/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Routes>
      <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App