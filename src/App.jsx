import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import WhyChooseUs from './components/Why';
import AboutUs from './components/About';
import OurProjects from './components/Project';
import Testimonials from './components/Testimonial';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute'; // For regular users
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './components/AdminLayout';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import ContactsPage from './pages/ContactsPage';
import SubscribersPage from './pages/SubscribersPage';

// --- Admin Panel Imports ---
// 1. IMPORT YOUR NEW ADMIN PROTECTION COMPONENT
import AdminProtectedRoute from './components/AdminProtectedRoute'; 


export default function App() {
  return (
    <Router>
      <Routes>
        {/* === Public User-Facing Routes === */}
        <Route path="/login" element={<Login />} />

        {/* Redirect old paths */}
        <Route path="/new-login" element={<Navigate to="/login" replace />} />
        <Route path="/new-signup" element={<Navigate to="/login" replace />} />
        <Route path="/signup" element={<Navigate to="/login" replace />} />

        {/* Protected User-Facing Routes - With Navbar */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navbar />
              <HeroSection />
              <WhyChooseUs />
              <AboutUs />
              <OurProjects />
              <Testimonials />
              <ContactForm />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Navbar />
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* === Admin Panel Routes === */}
        
        {/* 1. Admin Login Page - No Protection */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 2. Protected Admin Panel - Uses AdminLayout */}
        <Route
          path="/admin"
          element={
            // 2. USE THE NEW AdminProtectedRoute HERE
            <AdminProtectedRoute> 
              <AdminLayout />
            </AdminProtectedRoute>
          }
        >
          {/* Redirect /admin to /admin/dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="subscribers" element={<SubscribersPage />} />
        </Route>
        
      </Routes>
    </Router>
  );
}