import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import { useProperties } from '../../contexts/PropertyContext';

const FeaturedProperties: React.FC = () => {
  const { featuredProperties, loading } = useProperties();

  if (loading) {
    return (
      <div className="py-16">
        <div className="container-custom">
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Student Accommodation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium student accommodations in the most popular university cities worldwide.
          </p>
        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProperties.slice(0, 6).map((property, index) => (
            <div 
              key={property.id} 
              className={`animate-slide-in opacity-0 stagger-${index % 5 + 1}`}
            >
              <PropertyCard property={property} featured={true} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Link to="/properties" className="btn-primary px-8 py-3">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;