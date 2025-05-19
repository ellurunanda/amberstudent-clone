import React from 'react';
import { Link } from 'react-router-dom';

interface CityHighlight {
  city: string;
  country: string;
  image: string;
  propertyCount: number;
  featured?: boolean;
}

const cityHighlights: CityHighlight[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyCount: 240,
    featured: true,
  },
  {
    city: 'Barcelona',
    country: 'Spain',
    image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyCount: 185,
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyCount: 132,
  },
  {
    city: 'Boston',
    country: 'United States',
    image: 'https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyCount: 97,
  },
  {
    city: 'Berlin',
    country: 'Germany',
    image: 'https://images.pexels.com/photos/1128415/pexels-photo-1128415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyCount: 156,
  },
];

const CityHighlights: React.FC = () => {
  // Split cities into featured and regular
  const featuredCity = cityHighlights.find(city => city.featured);
  const regularCities = cityHighlights.filter(city => !city.featured);

  return (
    <section className="py-16">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Student Cities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore accommodations in these top destinations for students around the world.
          </p>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured city (larger card) */}
          {featuredCity && (
            <div className="lg:col-span-2 lg:row-span-2">
              <Link 
                to={`/properties?location=${featuredCity.city}`}
                className="block h-full"
              >
                <div className="relative overflow-hidden rounded-xl shadow-card h-full group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
                  <img 
                    src={featuredCity.image} 
                    alt={featuredCity.city} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                    <h3 className="text-3xl font-bold mb-1">{featuredCity.city}</h3>
                    <p className="text-gray-200 mb-2">{featuredCity.country}</p>
                    <p className="text-sm text-gray-300">
                      {featuredCity.propertyCount}+ properties
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Regular cities */}
          {regularCities.map((city, index) => (
            <div key={city.city} className="animate-slide-in opacity-0 stagger-1">
              <Link 
                to={`/properties?location=${city.city}`}
                className="block h-full"
              >
                <div className="relative overflow-hidden rounded-xl shadow-card h-full group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
                  <img 
                    src={city.image} 
                    alt={city.city} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                    <h3 className="text-2xl font-bold mb-1">{city.city}</h3>
                    <p className="text-gray-200 mb-2">{city.country}</p>
                    <p className="text-sm text-gray-300">
                      {city.propertyCount}+ properties
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityHighlights;