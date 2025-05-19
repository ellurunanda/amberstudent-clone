import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchForm from '../components/ui/SearchForm';
import PropertyFilters from '../components/property/PropertyFilters';
import PropertyList from '../components/property/PropertyList';
import Newsletter from '../components/ui/Newsletter';
import { useProperties } from '../contexts/PropertyContext';
import { SearchParams } from '../types';

const PropertiesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { properties, loading, searchProperties, searchResults } = useProperties();
  const [currentFilters, setCurrentFilters] = useState<SearchParams>({});
  
  // Extract search parameters on initial load
  useEffect(() => {
    const params: SearchParams = {};
    
    // Get all possible search parameters from URL
    if (searchParams.get('location')) params.location = searchParams.get('location') || undefined;
    if (searchParams.get('checkIn')) params.checkIn = searchParams.get('checkIn') || undefined;
    if (searchParams.get('checkOut')) params.checkOut = searchParams.get('checkOut') || undefined;
    if (searchParams.get('propertyType')) params.propertyType = searchParams.get('propertyType') || undefined;
    if (searchParams.get('minPrice')) params.minPrice = parseInt(searchParams.get('minPrice') || '0');
    if (searchParams.get('maxPrice')) params.maxPrice = parseInt(searchParams.get('maxPrice') || '2000');
    if (searchParams.get('amenities')) {
      const amenitiesParam = searchParams.get('amenities');
      params.amenities = amenitiesParam ? amenitiesParam.split(',') : undefined;
    }
    
    // Set current filters
    setCurrentFilters(params);
    
    // Perform the search
    searchProperties(params);
  }, [searchParams, searchProperties]);
  
  const handleFilter = (filters: SearchParams) => {
    // Update URL params
    const newParams = new URLSearchParams();
    
    if (filters.location) newParams.append('location', filters.location);
    if (filters.checkIn) newParams.append('checkIn', filters.checkIn);
    if (filters.checkOut) newParams.append('checkOut', filters.checkOut);
    if (filters.propertyType) newParams.append('propertyType', filters.propertyType);
    if (filters.minPrice !== undefined) newParams.append('minPrice', filters.minPrice.toString());
    if (filters.maxPrice !== undefined) newParams.append('maxPrice', filters.maxPrice.toString());
    if (filters.amenities && filters.amenities.length > 0) {
      newParams.append('amenities', filters.amenities.join(','));
    }
    
    setSearchParams(newParams);
  };
  
  const location = searchParams.get('location');
  const checkIn = searchParams.get('checkIn');
  
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {location ? `Student Accommodation in ${location}` : 'All Properties'}
            </h1>
            <p className="text-gray-600">
              {checkIn 
                ? `Available from ${new Date(checkIn).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                : 'Find your perfect student accommodation'
              }
            </p>
          </div>
          
          {/* Search form */}
          <div className="mb-8">
            <SearchForm />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1">
              <PropertyFilters 
                onFilter={handleFilter} 
                currentFilters={currentFilters} 
              />
            </div>
            
            {/* Main content with property list */}
            <div className="lg:col-span-3">
              <PropertyList 
                properties={searchResults.length > 0 ? searchResults : properties} 
                isLoading={loading} 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter section */}
      <Newsletter />
      
      <Footer />
    </>
  );
};

export default PropertiesPage;