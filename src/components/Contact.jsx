import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    areaCity: '',
  });
  
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmissionMessage('Thank you! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      areaCity: '',
    });
    setTimeout(() => {
      setSubmissionMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Info Block (Updated to Dark Theme text, original icon colors) */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to start your project? Contact us today and let's create something amazing together.
            </p>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                {/* Original icon colors for brand identity */}
                <div className="bg-purple-100 p-3 rounded-full">
                  <Phone className="text-purple-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-400">hello@creativehub.com</div>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="text-pink-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-400">123 Creative Street, Design City, DC 12345</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Block (Dark Theme) */}
          <div className="bg-gray-800 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Fields use dark theme styles */}
              <div>
                <label htmlFor="fullName" className="block text-gray-200 font-medium mb-2">Full Name</label>
                <input
                  type="text" id="fullName" name="fullName"
                  value={formData.fullName} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 font-medium mb-2">Email</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter Email Address"
                />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="block text-gray-200 font-medium mb-2">Mobile Number</label>
                <input
                  type="tel" id="mobileNumber" name="mobileNumber"
                  value={formData.mobileNumber} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Mobile Number"
                />
              </div>
              <div>
                <label htmlFor="areaCity" className="block text-gray-200 font-medium mb-2">Area, City</label>
                <input
                  type="text" id="areaCity" name="areaCity"
                  value={formData.areaCity} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Area, City"
                />
              </div>
              
              {/* Updated Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 hover:shadow-lg transition-all"
              >
                Get Quick Quote
              </button>
            </form>

            {/* Submission Message Area */}
            {submissionMessage && (
              <p className="mt-4 text-center text-green-400 font-medium">
                {submissionMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;