import React, { useState } from 'react';
import { Home, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    setEmail('');
  };

  return (
    <footer className="w-full">
      {/* Top (Original Gradient) Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              <li><a href="#home" className="hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="#our-projects" className="hover:text-gray-200 transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-gray-200 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </nav>

          {/* Subscription Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full lg:w-auto">
            <label htmlFor="email-subscribe" className="sr-only">Enter Email Address</label>
            <input 
              type="email" 
              id="email-subscribe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              required
              className="bg-transparent text-white placeholder-gray-200 border-b-2 border-gray-300 focus:border-white focus:outline-none py-2 w-full sm:w-auto"
            />
            <button 
              type="submit"
              className="bg-white text-blue-600 cursor-pointer font-semibold px-6 py-3 rounded-2xl hover:bg-gray-200 transition-colors w-full sm:w-auto shadow-lg"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

      {/* Bottom (Dark) Section - Kept dark theme, reverted logo */}
      <div className="bg-gray-950 text-gray-400 p-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
          
          {/* Copyright */}
          <p className="text-sm order-last sm:order-first">
            &copy; 2025 Real root. All Rights Reserved.
          </p>

          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold order-first sm:order-none">
            <Home size={24} />
            <span>Real root</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4 order-2 sm:order-last">
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;