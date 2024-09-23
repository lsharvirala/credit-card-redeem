// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
//import PrivateRoute from './components/PrivateRoute';



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>        
          <Route path="/Login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Dashboard/>} />
         
          
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
