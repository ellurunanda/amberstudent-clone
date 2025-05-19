import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchForm from '../components/ui/SearchForm';
import FeaturedProperties from '../components/ui/FeaturedProperties';
import CityHighlights from '../components/ui/CityHighlights';
import HowItWorks from '../components/ui/HowItWorks';
import Testimonials from '../components/ui/Testimonials';
import Newsletter from '../components/ui/Newsletter';
import { MapPin, School, Building, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Student accommodation" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in opacity-0">
              Find Your Perfect Student Home
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-in opacity-0 stagger-1">
              Discover verified student accommodation worldwide with flexible booking options and full support throughout your stay.
            </p>
            
            {/* Search Form */}
            <div className="animate-slide-in opacity-0 stagger-2">
              <SearchForm isHero={true} />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="animate-slide-in opacity-0 stagger-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Building size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">30,000+</p>
                    <p className="text-white/80">Properties</p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-in opacity-0 stagger-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">500+</p>
                    <p className="text-white/80">Cities</p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-in opacity-0 stagger-5">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <School size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">1,200+</p>
                    <p className="text-white/80">Universities</p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-in opacity-0 stagger-5">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">100,000+</p>
                    <p className="text-white/80">Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties Section */}
      <FeaturedProperties />
      
      {/* City Highlights Section */}
      <CityHighlights />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose AmberClone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best experience for students seeking accommodation worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Verified Properties</h3>
              <p className="text-gray-600">
                Every listing on our platform is verified by our team to ensure quality and accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Booking</h3>
              <p className="text-gray-600">
                We offer flexible booking options, including short-term stays and semester-long accommodations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is available around the clock to assist with any queries or issues.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="btn-primary px-8 py-3">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Housing Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert advice and insights to help you make the most of your student accommodation experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Roommate tips" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                  Living Tips
                </span>
                <h3 className="text-xl font-semibold mb-2">How to Find the Perfect Roommate</h3>
                <p className="text-gray-600 mb-4">
                  Finding a compatible roommate can make all the difference in your student housing experience.
                </p>
                <Link to="/blog/roommate-tips" className="text-primary-600 hover:text-primary-700 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Budget planning" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full mb-3">
                  Financial Advice
                </span>
                <h3 className="text-xl font-semibold mb-2">Student Housing Budget Planning</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to manage your housing budget effectively and avoid common financial pitfalls.
                </p>
                <Link to="/blog/budget-planning" className="text-primary-600 hover:text-primary-700 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/7054481/pexels-photo-7054481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="International students" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full mb-3">
                  International
                </span>
                <h3 className="text-xl font-semibold mb-2">Guide for International Students</h3>
                <p className="text-gray-600 mb-4">
                  Essential tips for international students looking for accommodation in a new country.
                </p>
                <Link to="/blog/international-guide" className="text-primary-600 hover:text-primary-700 font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog" className="btn-outline px-8 py-3">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <Newsletter />
      
      <Footer />
    </>
  );
};

export default HomePage;