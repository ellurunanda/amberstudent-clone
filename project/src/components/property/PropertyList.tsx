import React from 'react';
import { Grid, List } from 'lucide-react';
import PropertyCard from '../ui/PropertyCard';
import { Property } from '../../types';

interface PropertyListProps {
  properties: Property[];
  isLoading: boolean;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, isLoading }) => {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  
  if (isLoading) {
    return (
      <div className="h-96 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (properties.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">No properties found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your search filters or exploring different locations.
        </p>
        <img 
          src="https://images.pexels.com/photos/7107619/pexels-photo-7107619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="No results" 
          className="w-full max-w-md mx-auto rounded-lg"
        />
      </div>
    );
  }
  
  return (
    <div>
      {/* View toggle and results count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          <span className="font-medium text-gray-900">{properties.length}</span> properties found
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${
              viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-500 hover:bg-gray-100'
            }`}
            aria-label="Grid view"
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${
              viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-500 hover:bg-gray-100'
            }`}
            aria-label="List view"
          >
            <List size={20} />
          </button>
        </div>
      </div>
      
      {/* Property grid/list */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className={`animate-slide-in opacity-0 stagger-${index % 5 + 1}`}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className={`bg-white rounded-lg shadow-card overflow-hidden hover:shadow-lg transition-shadow animate-slide-in opacity-0 stagger-${index % 5 + 1}`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={property.images[0]} 
                    alt={property.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium mr-2">
                      {property.type}
                    </span>
                    <span>{property.location.city}, {property.location.country}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {property.amenities.slice(0, 4).map((amenity, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-xl font-bold text-primary-700">${property.price}</span>
                      <span className="text-gray-500 text-sm">/{property.priceUnit}</span>
                    </div>
                    <a 
                      href={`/properties/${property.id}`} 
                      className="btn-primary py-1.5 px-3 text-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;