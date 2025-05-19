import React from 'react';
import { Search, Home, Calendar, Award } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Search size={32} />,
    title: 'Search',
    description: 'Explore thousands of verified student accommodations across multiple cities worldwide.',
  },
  {
    icon: <Home size={32} />,
    title: 'Compare',
    description: 'Compare different properties, view high-quality photos, and read authentic reviews from students.',
  },
  {
    icon: <Calendar size={32} />,
    title: 'Book',
    description: 'Secure your accommodation with our simple booking process and flexible payment options.',
  },
  {
    icon: <Award size={32} />,
    title: 'Move In',
    description: 'Enjoy peace of mind with our satisfaction guarantee and dedicated customer support.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How AmberClone Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding your perfect student accommodation has never been easier. 
            Our simple process helps you find, compare, and book your new home in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center animate-slide-in opacity-0 stagger-${index + 1}`}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/4">
                  <div className="w-16 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;