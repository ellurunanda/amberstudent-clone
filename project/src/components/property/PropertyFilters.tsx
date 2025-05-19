import React, { useState } from 'react';
import { Sliders, ChevronDown, ChevronUp } from 'lucide-react';
import { amenityOptions, propertyTypes } from '../../data/mockData';
import { SearchParams } from '../../types';

interface PropertyFiltersProps {
  onFilter: (filters: SearchParams) => void;
  currentFilters: SearchParams;
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onFilter, currentFilters }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<SearchParams>(currentFilters);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    currentFilters.minPrice || 0,
    currentFilters.maxPrice || 2000
  ]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    currentFilters.amenities || []
  );
  
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    setLocalFilters({
      ...localFilters,
      minPrice: min,
      maxPrice: max
    });
  };
  
  const handlePropertyTypeChange = (type: string) => {
    setLocalFilters({
      ...localFilters,
      propertyType: type === 'all' ? undefined : type
    });
  };
  
  const handleAmenityToggle = (amenity: string) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter(a => a !== amenity)
      : [...selectedAmenities, amenity];
    
    setSelectedAmenities(updatedAmenities);
    setLocalFilters({
      ...localFilters,
      amenities: updatedAmenities.length > 0 ? updatedAmenities : undefined
    });
  };
  
  const handleApplyFilters = () => {
    onFilter(localFilters);
  };
  
  const handleResetFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedAmenities([]);
    setLocalFilters({});
    onFilter({});
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      {/* Mobile toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="flex items-center justify-between w-full text-left font-medium"
        >
          <div className="flex items-center">
            <Sliders size={18} className="mr-2" />
            Filters
          </div>
          {isFiltersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
      
      {/* Filter content - always visible on desktop, toggleable on mobile */}
      <div className={`${isFiltersOpen ? 'block' : 'hidden'} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Price range */}
          <div>
            <h3 className="text-lg font-medium mb-4">Price Range</h3>
            <div className="px-2">
              <div className="flex justify-between mb-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(parseInt(e.target.value), priceRange[1])}
                className="w-full mb-4"
              />
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Property type */}
          <div>
            <h3 className="text-lg font-medium mb-4">Property Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="type-all"
                  name="property-type"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  checked={!localFilters.propertyType}
                  onChange={() => handlePropertyTypeChange('all')}
                />
                <label htmlFor="type-all" className="ml-2 text-gray-700">
                  All Types
                </label>
              </div>
              {propertyTypes.map(type => (
                <div key={type} className="flex items-center">
                  <input
                    type="radio"
                    id={`type-${type.toLowerCase().replace(' ', '-')}`}
                    name="property-type"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    checked={localFilters.propertyType === type}
                    onChange={() => handlePropertyTypeChange(type)}
                  />
                  <label 
                    htmlFor={`type-${type.toLowerCase().replace(' ', '-')}`} 
                    className="ml-2 text-gray-700"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Amenities */}
          <div>
            <h3 className="text-lg font-medium mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {amenityOptions.slice(0, 8).map(amenity => (
                <div key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`amenity-${amenity.toLowerCase().replace(' ', '-')}`}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                  />
                  <label 
                    htmlFor={`amenity-${amenity.toLowerCase().replace(' ', '-')}`} 
                    className="ml-2 text-gray-700 text-sm"
                  >
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Filter actions */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleResetFilters}
            className="btn-outline py-2"
          >
            Reset Filters
          </button>
          <button
            onClick={handleApplyFilters}
            className="btn-primary py-2"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;