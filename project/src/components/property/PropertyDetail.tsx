import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Star, Heart, Share2, CheckCircle, Info, Users, Wifi, Tv, Home } from 'lucide-react';
import { useProperties } from '../../contexts/PropertyContext';
import { useAuth } from '../../contexts/AuthContext';
import { format } from 'date-fns';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPropertyById, loading } = useProperties();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [bookingStartDate, setBookingStartDate] = useState<string>('');
  const [bookingEndDate, setBookingEndDate] = useState<string>('');
  const [guests, setGuests] = useState(1);
  
  const property = id ? getPropertyById(id) : undefined;
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
        <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/properties')}
          className="btn-primary"
        >
          Browse All Properties
        </button>
      </div>
    );
  }
  
  const handleBooking = () => {
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      navigate('/login', { state: { from: `/properties/${id}` } });
      return;
    }
    
    // Validate booking dates
    if (!bookingStartDate) {
      alert('Please select a check-in date');
      return;
    }
    
    // In a real app, this would submit the booking to an API
    alert(`Booking submitted for ${property.name} from ${bookingStartDate} to ${bookingEndDate || 'open-ended'}`);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex text-sm text-gray-500">
            <li className="hover:text-primary-600 cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="mx-2">/</li>
            <li className="hover:text-primary-600 cursor-pointer" onClick={() => navigate('/properties')}>Properties</li>
            <li className="mx-2">/</li>
            <li className="text-primary-600">{property.name}</li>
          </ol>
        </nav>
        
        {/* Property header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <div className="flex items-center text-gray-600 mb-1">
              <MapPin size={16} className="mr-1" />
              <span>{property.location.address}</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <Star size={16} className="text-accent-500 mr-1" />
                <span className="font-medium">{property.rating}</span>
                <span className="text-gray-500 ml-1">({property.reviewCount} reviews)</span>
              </div>
              <div className="text-gray-600">
                <span className="text-primary-700 font-medium">{property.distance}</span>
              </div>
            </div>
          </div>
          
          <div className="flex mt-4 md:mt-0">
            <button className="btn-outline mr-2 flex items-center">
              <Heart size={18} className="mr-2" /> Save
            </button>
            <button className="btn-outline flex items-center">
              <Share2 size={18} className="mr-2" /> Share
            </button>
          </div>
        </div>
        
        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden h-96">
              <img 
                src={property.images[activeImageIndex]} 
                alt={property.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {property.images.map((image, index) => (
              <div 
                key={index}
                className={`rounded-lg overflow-hidden h-44 cursor-pointer transition-all duration-200 ${
                  activeImageIndex === index ? 'ring-4 ring-primary-500' : 'hover:opacity-90'
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${property.name} ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column: Property details */}
          <div className="lg:col-span-2">
            {/* Property type and overview */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Overview</h2>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {property.type}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">
                {property.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center text-sm">
                  <Calendar size={18} className="text-primary-600 mr-2" />
                  <div>
                    <p className="font-medium">Available from</p>
                    <p className="text-gray-600">{format(new Date(property.availability.availableFrom), 'MMMM dd, yyyy')}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin size={18} className="text-primary-600 mr-2" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{property.location.city}, {property.location.country}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Users size={18} className="text-primary-600 mr-2" />
                  <div>
                    <p className="font-medium">Property type</p>
                    <p className="text-gray-600">{property.type}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={18} className="text-primary-600 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">About this property</h2>
              <div className="prose text-gray-700">
                <p>{property.description}</p>
                <p>
                  This property is located {property.distance} from campus, making it an ideal choice for students looking for convenient accommodation.
                </p>
                <p>
                  Student life is vibrant here, with communal spaces designed for socializing and studying. The property features various amenities to ensure a comfortable stay, including {property.amenities.slice(0, 3).join(', ')}, and more.
                </p>
              </div>
            </div>
            
            {/* Location */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map view would be displayed here</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-700">{property.location.address}</p>
              </div>
            </div>
          </div>
          
          {/* Right column: Booking form */}
          <div>
            <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold text-primary-700">${property.price}</span>
                <span className="text-gray-600 ml-1">/{property.priceUnit}</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-1">
                  <Calendar size={16} className="text-gray-600 mr-1" />
                  <span className="text-sm text-gray-600">
                    Available from {format(new Date(property.availability.availableFrom), 'MMMM dd, yyyy')}
                  </span>
                </div>
                
                {property.discountPercentage && (
                  <div className="bg-accent-50 text-accent-700 px-3 py-2 rounded-lg text-sm font-medium flex items-center">
                    <Info size={16} className="mr-1" />
                    {property.discountPercentage}% discount for early booking!
                  </div>
                )}
              </div>
              
              {/* Booking form */}
              <form>
                <div className="mb-4">
                  <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in date
                  </label>
                  <input
                    type="date"
                    id="check-in"
                    min={property.availability.availableFrom}
                    className="input"
                    value={bookingStartDate}
                    onChange={(e) => setBookingStartDate(e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out date (optional)
                  </label>
                  <input
                    type="date"
                    id="check-out"
                    min={bookingStartDate || property.availability.availableFrom}
                    className="input"
                    value={bookingEndDate}
                    onChange={(e) => setBookingEndDate(e.target.value)}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of guests
                  </label>
                  <select
                    id="guests"
                    className="input"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="button"
                  onClick={handleBooking}
                  className="btn-primary w-full"
                >
                  {isAuthenticated ? 'Book now' : 'Sign in to book'}
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  You won't be charged yet
                </p>
              </form>
              
              {/* Property details summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Property highlights</h3>
                <ul className="space-y-2">
                  {property.amenities.slice(0, 5).map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      {amenity.toLowerCase().includes('wifi') ? (
                        <Wifi size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      ) : amenity.toLowerCase().includes('tv') ? (
                        <Tv size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      ) : (
                        <Home size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                      )}
                      <span className="text-sm">{amenity}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 text-sm text-gray-600">
                  {property.type === 'Student Hall' ? (
                    <p>Perfect for university students seeking convenient campus living.</p>
                  ) : property.type === 'Shared Apartment' ? (
                    <p>Great for students who want to share accommodations with others.</p>
                  ) : (
                    <p>Ideal for students looking for independent living arrangements.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;