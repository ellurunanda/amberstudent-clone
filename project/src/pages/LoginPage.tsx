import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-28">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row">
            {/* Login form */}
            <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
              <LoginForm />
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2 lg:pl-8">
              <div className="bg-white p-8 rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-6">Welcome to AmberClone</h2>
                <p className="text-gray-600 mb-6">
                  Sign in to access your saved properties, bookings, and preferences. Looking for student accommodation? You're in the right place!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Search Properties</h3>
                      <p className="text-gray-600">
                        Find accommodation that matches your needs across thousands of verified options.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Book Securely</h3>
                      <p className="text-gray-600">
                        Book your accommodation with confidence through our secure booking system.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">24/7 Support</h3>
                      <p className="text-gray-600">
                        Our dedicated team is available around the clock to assist with any questions or issues.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Don't have an account yet? Join thousands of students finding their perfect accommodation.
                  </p>
                  <Link to="/signup" className="btn-primary w-full">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default LoginPage;