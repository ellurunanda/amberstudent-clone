import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { popularCities } from '../../data/mockData';

interface SearchFormProps {
  isHero?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ isHero = false }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string>('');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);
  const [showLocationDropdown, setShowLocationDropdown] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query params
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests > 1) params.append('guests', guests.toString());
    
    // Navigate to properties page with search params
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className={`w-full rounded-2xl ${isHero ? 'bg-white/10 backdrop-blur-md md:bg-white/90 p-4 md:p-6 shadow-lg' : 'bg-white shadow p-4'}`}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location */}
          <div className="relative">
            <label 
              htmlFor="location" 
              className={`block text-sm font-medium mb-1 ${isHero ? 'text-white md:text-gray-700' : 'text-gray-700'}`}
            >
              Location
            </label>
            <div className="relative">
              <div 
                className={`flex items-center p-3 border rounded-lg ${isHero ? 'bg-white/90 border-white/20 md:bg-white md:border-gray-300' : 'bg-white border-gray-300'}`}
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <MapPin size={18} className={`mr-2 ${isHero ? 'text-primary-500 md:text-gray-500' : 'text-gray-500'}`} />
                <input
                  type="text"
                  id="location"
                  placeholder="Where are you going?"
                  className="w-full bg-transparent focus:outline-none text-gray-800"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setShowLocationDropdown(true)}
                  onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
                />
              </div>
              
              {/* Location dropdown */}
              {showLocationDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2 max-h-60 overflow-y-auto">
                  <p className="px-4 py-1 text-xs font-medium text-gray-500 uppercase">
                    Popular cities
                  </p>
                  {popularCities.map((city) => (
                    <div
                      key={city}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onMouseDown={() => {
                        setLocation(city);
                        setShowLocationDropdown(false);
                      }}
                    >
                      <MapPin size={16} className="mr-2 text-primary-500" />
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Check-in date */}
          <div>
            <label 
              htmlFor="check-in" 
              className={`block text-sm font-medium mb-1 ${isHero ? 'text-white md:text-gray-700' : 'text-gray-700'}`}
            >
              Check-in date
            </label>
            <div className={`flex items-center p-3 border rounded-lg ${isHero ? 'bg-white/90 border-white/20 md:bg-white md:border-gray-300' : 'bg-white border-gray-300'}`}>
              <Calendar size={18} className={`mr-2 ${isHero ? 'text-primary-500 md:text-gray-500' : 'text-gray-500'}`} />
              <input
                type="date"
                id="check-in"
                className="w-full bg-transparent focus:outline-none text-gray-800"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>
          
          {/* Check-out date */}
          <div>
            <label 
              htmlFor="check-out" 
              className={`block text-sm font-medium mb-1 ${isHero ? 'text-white md:text-gray-700' : 'text-gray-700'}`}
            >
              Check-out date
            </label>
            <div className={`flex items-center p-3 border rounded-lg ${isHero ? 'bg-white/90 border-white/20 md:bg-white md:border-gray-300' : 'bg-white border-gray-300'}`}>
              <Calendar size={18} className={`mr-2 ${isHero ? 'text-primary-500 md:text-gray-500' : 'text-gray-500'}`} />
              <input
                type="date"
                id="check-out"
                className="w-full bg-transparent focus:outline-none text-gray-800"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || undefined}
              />
            </div>
          </div>
          
          {/* Search button */}
          <div className="flex flex-col">
            <label 
              htmlFor="guests" 
              className={`block text-sm font-medium mb-1 ${isHero ? 'text-white md:text-gray-700' : 'text-gray-700'}`}
            >
              Guests
            </label>
            <div className="flex h-full">
              <div className={`flex items-center p-3 border rounded-l-lg flex-grow ${isHero ? 'bg-white/90 border-white/20 md:bg-white md:border-gray-300' : 'bg-white border-gray-300'}`}>
                <Users size={18} className={`mr-2 ${isHero ? 'text-primary-500 md:text-gray-500' : 'text-gray-500'}`} />
                <input
                  type="number"
                  id="guests"
                  min="1"
                  className="w-full bg-transparent focus:outline-none text-gray-800"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                />
              </div>
              <button
                type="submit"
                className="btn-primary rounded-l-none px-4"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;