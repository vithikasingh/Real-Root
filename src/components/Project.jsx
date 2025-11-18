import React from 'react';
import { ArrowRight } from 'lucide-react';

const OurProjects = () => {
  const projects = [
    {
      title: 'Consultation',
      projectName: 'Business Strategy Plan',
      location: 'New York, USA',
      img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop'
    },
    {
      title: 'Design',
      projectName: 'Modern Villa Design',
      location: 'Los Angeles, USA',
      img: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop'
    },
    {
      title: 'Marketing & Design',
      projectName: 'Brand Identity Package',
      location: 'Miami, USA',
      img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop'
    },
    {
      title: 'Consultation & Marketing',
      projectName: 'Digital Transformation',
      location: 'Chicago, USA',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop'
    },
    {
      title: 'Consultation',
      projectName: 'Corporate Consulting',
      location: 'Boston, USA',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop'
    },
    {
      title: 'Design',
      projectName: 'Interior Design Project',
      location: 'San Francisco, USA',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="our-projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {project.title}
                  </span>
                </div>

                {/* Project Details */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.projectName}
                </h3>
                <p className="text-gray-400 mb-6">
                   {project.location}
                </p>

                {/* CTA Button */}
                <button className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg group">
                  READ MORE
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;