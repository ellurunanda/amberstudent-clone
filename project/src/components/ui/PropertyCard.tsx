import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Star, Calendar } from 'lucide-react';
import { Property } from '../../types';
import { format } from 'date-fns';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const {
    id,
    name,
    type,
    price,
    priceUnit,
    location,
    images,
    rating,
    reviewCount,
    availability,
    discountPercentage,
  } = property;

  const formattedAvailableFrom = availability.availableFrom 
    ? format(new Date(availability.availableFrom), 'MMM dd, yyyy')
    : 'Available Now';

  return (
    <div 
      className={`card group h-full transition-all duration-300 ${
        featured ? 'transform hover:-translate-y-2' : ''
      }`}
    >
      {/* Image container with overlay for actions */}
      <div className="relative overflow-hidden">
        {/* Main property image */}
        <img 
          src={images[0]} 
          alt={name} 
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Favorite button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all">
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>
        
        {/* Type badge */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 text-xs font-medium text-gray-700 rounded">
          {type}
        </div>

        {/* Discount badge */}
        {discountPercentage && (
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-accent-500 text-xs font-bold text-white rounded">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Featured badge */}
        {featured && !discountPercentage && (
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-primary-600 text-xs font-bold text-white rounded">
            Featured
          </div>
        )}
      </div>
      
      {/* Property details */}
      <div className="p-4">
        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin size={14} className="mr-1 flex-shrink-0" />
          <span className="truncate">{location.city}, {location.country}</span>
        </div>
        
        {/* Property name */}
        <Link to={`/properties/${id}`}>
          <h3 className="text-lg font-semibold mb-2 transition-colors hover:text-primary-600 line-clamp-1">{name}</h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center text-sm">
            <Star size={16} className="text-accent-500 mr-1" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500 ml-1">({reviewCount} reviews)</span>
          </div>
        </div>
        
        {/* Available from */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Calendar size={14} className="mr-1 flex-shrink-0" />
          <span>Available from {formattedAvailableFrom}</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xl font-bold text-primary-700">${price}</span>
            <span className="text-gray-500 text-sm">/{priceUnit}</span>
          </div>
          <Link 
            to={`/properties/${id}`} 
            className="btn-primary py-1.5 px-3 text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;