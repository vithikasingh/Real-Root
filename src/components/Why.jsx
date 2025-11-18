import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert Consultation',
      desc: 'Strategic guidance from industry professionals with 10+ years of experience',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      title: 'Stunning Design',
      desc: 'Award-winning creative designs that capture attention and drive engagement',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
    },
    {
      title: 'Digital Marketing',
      desc: 'Data-driven marketing strategies that deliver measurable results',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-300">
            We deliver excellence in every project
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="bg-gray-900 rounded-2xl p-6 transform transition-transform duration-300 hover:-translate-y-2"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-48 object-cover rounded-xl mb-4" 
              />
              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;