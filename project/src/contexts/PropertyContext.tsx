import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property, SearchParams } from '../types';
import { mockProperties } from '../data/mockData';

interface PropertyContextType {
  properties: Property[];
  featuredProperties: Property[];
  loading: boolean;
  error: string | null;
  searchProperties: (params: SearchParams) => void;
  getPropertyById: (id: string) => Property | undefined;
  searchResults: Property[];
  searchParams: SearchParams;
}

const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  featuredProperties: [],
  loading: false,
  error: null,
  searchProperties: () => {},
  getPropertyById: () => undefined,
  searchResults: [],
  searchParams: {},
});

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  // Load mock properties on mount
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProperties(mockProperties);
        
        // Set featured properties (those marked as featured or with discount)
        const featured = mockProperties.filter(p => p.featured || p.discountPercentage);
        setFeaturedProperties(featured);
        
        setError(null);
      } catch (err) {
        setError('Failed to fetch properties');
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Search properties based on params
  const searchProperties = (params: SearchParams) => {
    setSearchParams(params);
    setLoading(true);

    try {
      let results = [...properties];

      // Filter by location
      if (params.location) {
        const locationLower = params.location.toLowerCase();
        results = results.filter(
          p => p.location.city.toLowerCase().includes(locationLower) || 
               p.location.country.toLowerCase().includes(locationLower)
        );
      }

      // Filter by property type
      if (params.propertyType && params.propertyType !== 'all') {
        results = results.filter(p => p.type === params.propertyType);
      }

      // Filter by price range
      if (params.minPrice !== undefined) {
        results = results.filter(p => p.price >= params.minPrice!);
      }
      if (params.maxPrice !== undefined) {
        results = results.filter(p => p.price <= params.maxPrice!);
      }

      // Filter by amenities
      if (params.amenities && params.amenities.length > 0) {
        results = results.filter(p => 
          params.amenities!.every(amenity => p.amenities.includes(amenity))
        );
      }

      setSearchResults(results);
    } catch (err) {
      setError('Search failed');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get property by ID
  const getPropertyById = (id: string): Property | undefined => {
    return properties.find(p => p.id === id);
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        featuredProperties,
        loading,
        error,
        searchProperties,
        getPropertyById,
        searchResults,
        searchParams,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

// Custom hook for using property context
export const useProperties = () => useContext(PropertyContext);