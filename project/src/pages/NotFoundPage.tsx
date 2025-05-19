import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      
      <div className="min-h-screen flex items-center">
        <div className="container-custom py-16">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/" className="btn-primary">
                Back to Home
              </Link>
              <Link to="/properties" className="btn-outline">
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFoundPage;