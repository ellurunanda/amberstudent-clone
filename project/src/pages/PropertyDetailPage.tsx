import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PropertyDetail from '../components/property/PropertyDetail';
import Newsletter from '../components/ui/Newsletter';

const PropertyDetailPage: React.FC = () => {
  return (
    <>
      <Header />
      <PropertyDetail />
      <Newsletter />
      <Footer />
    </>
  );
};

export default PropertyDetailPage;