import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, LogOut, User as UserIcon, Home } from 'lucide-react'; // Added Home icon
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userName, setUserName] = useState('User');
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName') || 'User';
    setUserName(name);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isUserMenuOpen]);

  const scrollToSection = (id) => {
    // Added a check for the 'home' link
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    // Updated Navbar background
    <nav className="fixed w-full bg-gray-950/90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            onClick={() => scrollToSection('home')} // Make logo click scroll to top
            className="flex items-center gap-2 text-white font-bold hover:opacity-80 transition-opacity"
          >
            <Home size={22} className="text-blue-400" />
            <span className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Real root
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Our Projects', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                // Updated text colors
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}

            {/* Desktop User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                // Updated gradient
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg transition-shadow"
              >
                <UserIcon size={20} className="text-white" />
              </button>

              {isUserMenuOpen && (
                // Updated dropdown colors
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-700 bg-gray-900">
                    <p className="font-semibold text-white text-sm">{userName}</p>
                    <p className="text-gray-400 text-xs truncate">{localStorage.getItem('userEmail')}</p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsUserMenuOpen(false)}
                    // Updated link colors
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    <UserIcon size={18} className="text-purple-400" />
                    <span className="font-medium">My Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsUserMenuOpen(false);
                    }}
                    // Updated logout colors
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-900/50 transition-colors border-t border-gray-700"
                  >
                    <LogOut size={18} />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white" // Updated color
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        // Updated mobile menu colors
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Our Projects', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-purple-400 rounded-md font-medium"
              >
                {item}
              </button>
            ))}

            <div className="border-t border-gray-700 pt-2 mt-2">
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 w-full px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md font-medium"
              >
                <UserIcon size={18} className="text-purple-400" />
                <div>
                  <p className="text-sm font-medium text-white">{userName}</p>
                  <p className="text-xs text-gray-400">{localStorage.getItem('userEmail')}</p>
                </div>
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full px-3 py-2 text-red-500 hover:bg-red-900/50 rounded-md font-medium mt-1"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;