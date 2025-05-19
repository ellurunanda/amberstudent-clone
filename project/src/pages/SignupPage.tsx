import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SignupForm from '../components/auth/SignupForm';
import { Building } from 'lucide-react';

const SignupPage: React.FC = () => {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-28">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row">
            {/* Content */}
            <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
                <p className="text-gray-600 mb-6">
                  Join thousands of students finding their perfect accommodation. Sign up for free and unlock access to exclusive features.
                </p>
                
                <div className="mb-8">
                  <img 
                    src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Students living" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Benefits of joining:</h3>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Save your favorite properties
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Book accommodation securely
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Receive personalized recommendations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Access exclusive student discounts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    24/7 customer support
                  </li>
                </ul>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <Building size={24} className="text-primary-600 mr-3" />
                    <p className="text-primary-800 font-medium">
                      Join over 100,000 students already using AmberClone
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Signup form */}
            <div className="lg:w-1/2 lg:pl-8">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SignupPage;