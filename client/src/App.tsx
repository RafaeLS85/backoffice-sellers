import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Users from './pages/Users';

const isAuthenticated = () => {
  // Verificar si la cookie del token existe
  return document.cookie.includes('token=');
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/posts"
          element={isAuthenticated() ? <Posts /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={isAuthenticated() ? <Users /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
