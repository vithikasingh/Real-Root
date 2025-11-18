import React from 'react';
import { Navigate } from 'react-router-dom';

const checkAdminAuth = () => {
  // --- THIS IS THE FIX ---
  // Check for 'adminSession' (which you set in AdminLogin.jsx) 
  // instead of 'adminToken'.
  const adminSession = localStorage.getItem('adminSession');
  
  // Returns true if session exists, false otherwise
  return !!adminSession; 
};

const AdminProtectedRoute = ({ children }) => {
  const isAdmin = checkAdminAuth();

  if (!isAdmin) {
    // If not an authenticated admin, redirect to the admin login page
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated, render the children (in your case, AdminLayout)
  return children;
};

export default AdminProtectedRoute;