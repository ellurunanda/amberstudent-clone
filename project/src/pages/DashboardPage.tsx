import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Calendar, Settings, Map, ChevronRight } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import { mockProperties } from '../data/mockData';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Mock data for dashboard
  const savedProperties = mockProperties.slice(0, 3);
  const recentBookings = [
    {
      id: 'booking_1',
      propertyId: 'prop_1',
      propertyName: 'Urbanest King\'s Cross',
      checkInDate: '2025-04-01',
      checkOutDate: '2025-06-30',
      status: 'confirmed',
      amount: 3840,
    },
    {
      id: 'booking_2',
      propertyId: 'prop_5',
      propertyName: 'The Quad Boston',
      checkInDate: '2025-05-15',
      checkOutDate: null,
      status: 'pending',
      amount: 1200,
    },
  ];
  
  const recentSearches = [
    { location: 'London, UK', date: '2 days ago' },
    { location: 'Barcelona, Spain', date: '1 week ago' },
    { location: 'Boston, USA', date: '2 weeks ago' },
  ];
  
  return (
    <>
      <Header />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container-custom">
          {/* Dashboard header */}
          <div className="bg-white rounded-lg shadow-card p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  {user?.profilePicture ? (
                    <img 
                      src={user.profilePicture} 
                      alt={user.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600 text-xl font-bold">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/profile')}
                className="btn-outline flex items-center"
              >
                <Settings size={16} className="mr-2" /> Edit Profile
              </button>
            </div>
          </div>
          
          {/* Dashboard grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content - left 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Saved properties */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Saved Properties</h2>
                  <button
                    onClick={() => navigate('/favorites')}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    View all <ChevronRight size={16} />
                  </button>
                </div>
                
                {savedProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedProperties.map(property => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <Heart size={48} className="mx-auto mb-3 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">No saved properties yet</h3>
                    <p className="text-gray-600 mb-4">
                      You haven't saved any properties yet. Click the heart icon on any property to save it for later.
                    </p>
                    <button
                      onClick={() => navigate('/properties')}
                      className="btn-primary"
                    >
                      Browse Properties
                    </button>
                  </div>
                )}
              </div>
              
              {/* Recent bookings */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Recent Bookings</h2>
                  <button
                    onClick={() => navigate('/bookings')}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    View all <ChevronRight size={16} />
                  </button>
                </div>
                
                {recentBookings.length > 0 ? (
                  <div className="space-y-4">
                    {recentBookings.map(booking => (
                      <div 
                        key={booking.id} 
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h3 className="font-medium">{booking.propertyName}</h3>
                            <p className="text-gray-600 text-sm">
                              {new Date(booking.checkInDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              {booking.checkOutDate ? 
                                ` to ${new Date(booking.checkOutDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : 
                                ' (Open-ended)'
                              }
                            </p>
                          </div>
                          <div className="flex items-center mt-2 md:mt-0">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'confirmed' ? 'bg-success-100 text-success-700' : 
                              booking.status === 'pending' ? 'bg-warning-100 text-warning-700' : 
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                            <span className="ml-4 font-medium">${booking.amount}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <Calendar size={48} className="mx-auto mb-3 text-gray-400" />
                    <h3 className="text-lg font-medium mb-2">No bookings yet</h3>
                    <p className="text-gray-600 mb-4">
                      You haven't made any bookings yet. Browse our properties to find your perfect student accommodation.
                    </p>
                    <button
                      onClick={() => navigate('/properties')}
                      className="btn-primary"
                    >
                      Browse Properties
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar - right column */}
            <div className="space-y-6">
              {/* Account summary */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h2 className="text-xl font-bold mb-4">Account Summary</h2>
                
                <div className="divide-y divide-gray-100">
                  <div className="py-3 flex justify-between">
                    <span className="text-gray-600">Member since</span>
                    <span className="font-medium">April 2025</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="text-gray-600">Saved properties</span>
                    <span className="font-medium">{savedProperties.length}</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="text-gray-600">Active bookings</span>
                    <span className="font-medium">{recentBookings.filter(b => b.status === 'confirmed').length}</span>
                  </div>
                  <div className="py-3 flex justify-between">
                    <span className="text-gray-600">Pending bookings</span>
                    <span className="font-medium">{recentBookings.filter(b => b.status === 'pending').length}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                    View account details
                  </a>
                </div>
              </div>
              
              {/* Recent searches */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
                
                {recentSearches.length > 0 ? (
                  <div className="space-y-3">
                    {recentSearches.map((search, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Map size={16} className="text-gray-500 mr-2" />
                          <span>{search.location}</span>
                        </div>
                        <span className="text-sm text-gray-500">{search.date}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No recent searches</p>
                )}
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => navigate('/properties')}
                    className="btn-outline w-full"
                  >
                    New Search
                  </button>
                </div>
              </div>
              
              {/* Need help? */}
              <div className="bg-primary-50 rounded-lg p-6">
                <h2 className="text-lg font-bold mb-2">Need Help?</h2>
                <p className="text-primary-700 mb-4">
                  Our support team is available 24/7 to assist you with any questions or issues.
                </p>
                <a href="/contact" className="btn-primary block text-center">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default DashboardPage;