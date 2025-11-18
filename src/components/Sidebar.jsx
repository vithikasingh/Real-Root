import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Mail,
  MailCheck,
  LogOut,
  Building,
} from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the admin session from localStorage
    localStorage.removeItem('adminSession');
    // Navigate back to the admin login page
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: Briefcase },
    { name: 'Clients', href: '/admin/clients', icon: Users },
    { name: 'Contacts', href: '/admin/contacts', icon: Mail },
    { name: 'Subscribers', href: '/admin/subscribers', icon: MailCheck },
  ];

  return (
    <div className="flex flex-col h-full bg-white text-gray-900">
      <div className="p-6 flex items-center justify-center border-b">
        <Building className="w-8 h-8 text-indigo-600" />
        <span className="text-2xl font-bold ml-3">Admin Panel</span>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 rounded-lg text-gray-600 hover:bg-red-100 hover:text-red-700 transition-colors duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}