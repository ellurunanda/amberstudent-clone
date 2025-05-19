import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Building, Users, Globe2, Award, BookOpen, HeartHandshake } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About AmberClone</h1>
            <p className="text-xl text-gray-600">
              Connecting students with their perfect accommodation worldwide through 
              innovative technology and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At AmberClone, we're dedicated to making student accommodation search 
                simple, transparent, and stress-free. Our platform connects students 
                with quality housing options worldwide, ensuring they can focus on 
                their education while we handle their accommodation needs.
              </p>
              <p className="text-gray-600">
                We believe every student deserves access to safe, comfortable, and 
                affordable housing that enhances their educational journey. Through 
                innovative technology and personalized support, we're transforming 
                how students find their home away from home.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Students studying"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30k+</div>
              <div className="text-primary-100">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100k+</div>
              <div className="text-primary-100">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency in our operations and building 
                trust with our users through honest communication.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Service</h3>
              <p className="text-gray-600">
                We maintain high standards in our service delivery and ensure 
                every student receives exceptional support.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                We connect students with quality accommodation options across 
                the globe, making international education accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="CEO"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">John Smith</h3>
              <p className="text-gray-600 mb-3">CEO & Co-founder</p>
              <p className="text-gray-600 text-sm">
                15+ years experience in PropTech and Student Housing
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="CTO"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-gray-600 mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Former Tech Lead at leading property platforms
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg"
                alt="COO"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-gray-600 mb-3">COO</p>
              <p className="text-gray-600 text-sm">
                20+ years in operations and student services
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;