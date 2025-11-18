import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              {/* Reverted to a gradient that fits the original theme */}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Creative Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert consultation, stunning design, and powerful marketing strategies to elevate your brand to new heights.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>

          {/* Artistic Image Collage (with "real" images) */}
         <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Developer coding"
                className="rounded-2xl w-full h-full object-cover shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300"
              />
              {/* Image 2 */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                alt="UI/UX Design"
                className="rounded-2xl w-full h-full object-cover shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              />
              {/* Image 3 */}
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl w-full h-full object-cover shadow-2xl transform hover:scale-105 hover:translate-y-2 transition-all duration-300"
              />
              {/* Image 4 */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Data architecture"
                className="rounded-2xl w-full h-full object-cover shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;