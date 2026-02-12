import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-navy-900 to-gray-800 min-h-screen flex flex-col justify-between">
      <Banner />
      {/* Other components and content */}
      <Footer />
    </div>
  );
}

export default HomePage;