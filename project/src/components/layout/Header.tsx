import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Heart, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled && !isMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent text-white' 
          : 'bg-white text-gray-800 shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isTransparent ? 'text-white' : 'text-primary-600'}`}>
              AmberClone
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/properties" className={`font-medium hover:${isTransparent ? 'text-gray-200' : 'text-primary-600'}`}>
              Properties
            </Link>
            <div className="relative group">
              <button className="flex items-center font-medium group-hover:text-primary-600">
                Cities <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-800">
                <Link to="/properties?location=London" className="block px-4 py-2 hover:bg-gray-100">London</Link>
                <Link to="/properties?location=Barcelona" className="block px-4 py-2 hover:bg-gray-100">Barcelona</Link>
                <Link to="/properties?location=Melbourne" className="block px-4 py-2 hover:bg-gray-100">Melbourne</Link>
                <Link to="/properties?location=Boston" className="block px-4 py-2 hover:bg-gray-100">Boston</Link>
                <Link to="/properties?location=Sydney" className="block px-4 py-2 hover:bg-gray-100">Sydney</Link>
              </div>
            </div>
            <Link to="/about" className={`font-medium hover:${isTransparent ? 'text-gray-200' : 'text-primary-600'}`}>
              About
            </Link>
            <Link to="/contact" className={`font-medium hover:${isTransparent ? 'text-gray-200' : 'text-primary-600'}`}>
              Contact
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`p-2 rounded-full hover:bg-${isTransparent ? 'white/20' : 'gray-100'}`}>
              <Search size={20} />
            </button>
            <Link to="/favorites" className={`p-2 rounded-full hover:bg-${isTransparent ? 'white/20' : 'gray-100'}`}>
              <Heart size={20} />
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    {user?.profilePicture ? (
                      <img 
                        src={user.profilePicture} 
                        alt={user.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-${isTransparent ? 'white/20' : 'primary-100'} text-primary-600`}>
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                  </div>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-800">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                  <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                  <Link to="/bookings" className="block px-4 py-2 hover:bg-gray-100">My Bookings</Link>
                  <button 
                    onClick={logout} 
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className={`font-medium hover:${isTransparent ? 'text-gray-200' : 'text-primary-600'}`}>
                  Login
                </Link>
                <Link to="/signup" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen bg-white text-gray-800' : 'max-h-0'
      }`}>
        <div className="container-custom py-4 space-y-4">
          <Link to="/properties" className="block py-2 font-medium">
            Properties
          </Link>
          <div className="py-2">
            <button className="flex items-center font-medium w-full justify-between">
              Cities <ChevronDown size={16} />
            </button>
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/properties?location=London" className="block py-1">London</Link>
              <Link to="/properties?location=Barcelona" className="block py-1">Barcelona</Link>
              <Link to="/properties?location=Melbourne" className="block py-1">Melbourne</Link>
              <Link to="/properties?location=Boston" className="block py-1">Boston</Link>
              <Link to="/properties?location=Sydney" className="block py-1">Sydney</Link>
            </div>
          </div>
          <Link to="/about" className="block py-2 font-medium">
            About
          </Link>
          <Link to="/contact" className="block py-2 font-medium">
            Contact
          </Link>
          
          <div className="pt-4 border-t border-gray-100">
            {isAuthenticated ? (
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    {user?.profilePicture ? (
                      <img 
                        src={user.profilePicture} 
                        alt={user.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600">
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <Link to="/dashboard" className="block py-2">Dashboard</Link>
                <Link to="/bookings" className="block py-2">My Bookings</Link>
                <button 
                  onClick={logout} 
                  className="block w-full text-left py-2 text-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link to="/login" className="btn-outline w-full">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary w-full">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;