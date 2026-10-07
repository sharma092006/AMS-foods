import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CapabilitiesSourcing from '../components/CapabilitiesSourcing';
import CapabilitiesImportExport from '../components/CapabilitiesImportExport';
import CapabilitiesDistribution from '../components/CapabilitiesDistribution';
import CapabilitiesPrivateLabel from '../components/CapabilitiesPrivateLabel';
import shipImage from '../assets/image/ship.avif';

export default function CapabilitiesPage() {
  return (
    <div className="bg-[#0B0C0E] w-full min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={shipImage} alt="Capabilities Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B0C0E]/70"></div>
        </div>
        
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 flex flex-col justify-center">
          <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-8 block">
            OUR CAPABILITIES
          </span>
          
          <h1 className="text-[#F2EEE6] font-serif text-5xl md:text-6xl lg:text-[76px] leading-[1.05] mb-8 font-['Times_New_Roman',serif] tracking-tight break-words">
            <span className="block mb-2">One partner.</span>
            <span className="block">From source to shelf.</span>
          </h1>
          
          <p className="text-[#D1CFC7] font-light text-[15px] lg:text-[17px] leading-[1.8] max-w-[750px]">
            AMS FOODS brings sourcing, international trade, distribution and brand development together — one accountable structure from origin to market.
          </p>
        </div>
      </section>

      <CapabilitiesSourcing />
      <CapabilitiesImportExport />
      <CapabilitiesDistribution />
      <CapabilitiesPrivateLabel />

      <Footer />
    </div>
  );
}
