import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandsHero from '../components/BrandsHero';

export default function BrandsPage() {
  return (
    <div className="bg-[#0B0C0E] w-full min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header />
      
      <BrandsHero />

      <Footer />
    </div>
  );
}
