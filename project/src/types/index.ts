export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

export interface Property {
  id: string;
  name: string;
  description: string;
  type: string;
  price: number;
  priceUnit: 'week' | 'month' | 'semester';
  location: {
    city: string;
    country: string;
    address: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  images: string[];
  amenities: string[];
  distance?: string;
  rating: number;
  reviewCount: number;
  availability: {
    availableFrom: string;
    availableTo?: string;
  };
  featured?: boolean;
  discountPercentage?: number;
}

export interface SearchParams {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  amenities?: string[];
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  checkInDate: string;
  checkOutDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
}