import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,Outlet, NavLink } from 'react-router-dom';

import '../src/styles/global.scss';
import { AuthProvider, useAuth } from "./context/AuthContext";
import  { UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import Users from "./pages/Users/Users";
import { PublicRoute, ProtectedRoute } from "./routes";

const DashboardLayout = () => {
  const { logout } = useAuth();
  return (
    <div className="material-layout">
      <aside className="material-sidebar" aria-label="Main Navigation">
        <div className="sidebar-brand">Admin Dashboard</div>
        <hr className="sidebar-divider" />
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/users" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Tables
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/settings" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="sidebar-bottom">
          <ul className="nav-list">
            <li className="nav-item">
              <button className="nav-link signout-btn" onClick={logout}>
                 Sign Out
              </button>
            </li>
          </ul>
        </div>
      </aside>
      
      <main className="main-content">
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>

            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;