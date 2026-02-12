import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-[#0a0f2c] to-[#2c2c2c] min-h-screen flex flex-col justify-between">
      <Banner />
      {/* Other components and content */}
      <Footer />
    </div>
  );
}

export default HomePage;