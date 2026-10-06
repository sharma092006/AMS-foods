import React from 'react';
import Header from './components/Header';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import WhyAMSFoods from './components/WhyAMSFoods';
import AtAGlance from './components/AtAGlance';
import WhoWeServe from './components/WhoWeServe';
import WaysToWork from './components/WaysToWork';
import OurBrands from './components/OurBrands';
import OurProducts from './components/OurProducts';
import PrivateLabel from './components/PrivateLabel';
import GlobalSourcing from './components/GlobalSourcing';
import OurMarkets from './components/OurMarkets';
import Partnerships from './components/Partnerships';
import QualityStandards from './components/QualityStandards';
import PeopleBehind from './components/PeopleBehind';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  if (window.location.pathname === '/products') {
    return <ProductsPage />;
  }
  if (window.location.pathname === '/product-details') {
    return <ProductDetailsPage />;
  }

  return (
    <div className="bg-neutral-900">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?q=80&w=2070&auto=format&fit=crop')" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

        {/* Hero Content Area */}
        <div className="relative z-10 pt-[120px] px-8 max-w-[1920px] mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide drop-shadow-lg">
            Delicious from the Earth
          </h1>
          <p className="text-xl md:text-2xl text-[#f3ecdb] max-w-2xl leading-relaxed drop-shadow-md">
            Premium quality food products sourced directly from nature. Experience the authentic taste of tradition and excellence with AMS FOODS.
          </p>
          
          <div className="mt-12">
            <button className="bg-[#ce9e4b] hover:bg-[#dcb05f] text-black text-sm md:text-base font-bold tracking-wider px-8 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(206,158,75,0.3)] hover:shadow-[0_0_30px_rgba(206,158,75,0.5)]">
              EXPLORE OUR PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Why AMS Foods Section */}
      <WhyAMSFoods />

      {/* At A Glance Section */}
      <AtAGlance />

      {/* Who We Serve Section */}
      <WhoWeServe />

      {/* Ways To Work Section */}
      <WaysToWork />

      {/* Our Brands Section */}
      <OurBrands />

      {/* Our Products Section */}
      <OurProducts />

      {/* Private Label Section */}
      <PrivateLabel />

      {/* Global Sourcing Section */}
      <GlobalSourcing />

      {/* Our Markets Section */}
      <OurMarkets />

      {/* Partnerships Section */}
      <Partnerships />

      {/* Quality Standards Section */}
      <QualityStandards />

      {/* People Behind Section */}
      <PeopleBehind />

      {/* Call To Action Section */}
      <CallToAction />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
