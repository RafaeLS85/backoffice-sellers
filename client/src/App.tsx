import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Layout from './components/Layout'; // Import Layout

const App: React.FC = () => {
  const [cookies] = useCookies(['token']); // Leer la cookie del token

  const isAuthenticated = () => {
    return Boolean(cookies.token); // Verifica si el token existe
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/posts"
          element={
            isAuthenticated() ? (
              <Layout>
                <Posts />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/users"
          element={
            isAuthenticated() ? (
              <Layout>
                <Users />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
