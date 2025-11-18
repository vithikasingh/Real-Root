import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const highlights = [
    'Creative Excellence', 
    'Client-Focused Approach', 
    'Proven Track Record', 
    'Innovative Solutions'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We are a passionate team of designers, marketers, and consultants dedicated to helping businesses thrive in the digital age. With over a decade of experience, we've helped hundreds of clients achieve their goals.
            </p>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {/* Using a theme-appropriate accent color */}
                  <CheckCircle className="text-blue-400" size={24} />
                  <span className="text-gray-200 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Our team"
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;