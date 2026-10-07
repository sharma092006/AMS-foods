import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurStory from '../components/OurStory';
import Experience from '../components/Experience';
import Philosophy from '../components/Philosophy';
import MissionVision from '../components/MissionVision';
import WhatWeBelieve from '../components/WhatWeBelieve';
import Today from '../components/Today';
import OriginToMarket from '../components/OriginToMarket';
import sunImage from '../assets/image/sun.avif';

export default function AboutPage() {
  return (
    <div className="bg-[#0B0C0E] w-full min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src={sunImage} 
            alt="AMS Foods Sunrise" 
            className="w-full h-full object-cover"
          />
          {/* Overlays to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/95 via-[#0B0C0E]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/80 via-transparent to-[#0B0C0E] z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-[1440px] mx-auto w-full px-6 md:px-12 pt-[100px]">
          <div className="max-w-[750px]">
            <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-5 block">
              ABOUT AMS FOODS
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-serif leading-[1.05] text-[#F2EEE6] mb-8 font-['Times_New_Roman',serif] tracking-tight">
              A trading company built for the long term.
            </h1>
            
            <p className="text-[#D1CFC7] text-[14px] md:text-[15px] font-light leading-[1.8] max-w-[680px]">
              AMS FOODS is a Mozambique-based international sourcing, trading and distribution
              company connecting trusted manufacturers, quality products and growing markets
              across Africa and beyond. From sourcing and product development to private label,
              export coordination and market distribution, we help businesses move from origin to
              market.
            </p>
          </div>
        </div>
      </section>

      <OurStory />
      <Experience />
      <Philosophy />
      <MissionVision />
      <WhatWeBelieve />
      <Today />
      <OriginToMarket />

      <Footer />
    </div>
  );
}
