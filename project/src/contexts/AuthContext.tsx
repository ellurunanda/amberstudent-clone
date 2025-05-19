import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types';

// Create auth context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  isLoading: false,
  error: null,
});

// Mock API delay
const simulateApiCall = (success: boolean = true, data: any = null): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject(new Error('Authentication failed'));
      }
    }, 800);
  });
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check local storage for user on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse stored user data');
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll check for a valid email format and accept any password
      if (!email.includes('@')) {
        throw new Error('Invalid email format');
      }

      // Simulate API call
      const userData: User = await simulateApiCall(true, {
        id: `user_${Date.now()}`,
        name: email.split('@')[0],
        email: email,
        profilePicture: 'https://randomuser.me/api/portraits/women/68.jpg',
      });

      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (err: any) {
      setError(err.message || 'Login failed');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate input
      if (!name.trim()) throw new Error('Name is required');
      if (!email.includes('@')) throw new Error('Invalid email format');
      if (password.length < 6) throw new Error('Password must be at least 6 characters');

      // Simulate API call
      const userData: User = await simulateApiCall(true, {
        id: `user_${Date.now()}`,
        name: name,
        email: email,
        profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
      });

      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (err: any) {
      setError(err.message || 'Signup failed');
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => useContext(AuthContext);