import React from 'react';
import cityImage from '../assets/image/pexels-photo-30188147.avif';

export default function OurMarkets() {
  return (
    <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={cityImage} 
          alt="Maputo Mozambique Skyline" 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E]/90 via-[#0B0C0E]/30 to-transparent z-10" />
      </div>

      <div className="max-w-[1440px] w-full px-6 md:px-12 relative z-20 pb-10 lg:pb-14">
        
        {/* Content Container */}
        <div className="flex flex-col items-start max-w-3xl">
          
          <span className="text-[#A28251] font-bold text-[10px] lg:text-[11px] tracking-[0.3em] uppercase mb-3 lg:mb-4 block">
            12 <span className="mx-3 font-light">/</span> Our Markets
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-serif leading-[1.05] font-['Times_New_Roman',serif] tracking-tight mb-6 lg:mb-8">
            <span className="block text-[#F2EEE6] mb-1">Growing from Mozambique.</span>
            <span className="block text-[#A28251] italic">Connecting with Africa.</span>
          </h2>
          
          {/* Badge */}
          <div className="bg-[#0B0C0E]/80 backdrop-blur-sm border border-[#2B2D31]/50 px-5 py-3 lg:px-6 lg:py-4 inline-block">
            <span className="text-[#F2EEE6] text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase">
              Headquarters – Maputo, Mozambique
            </span>
          </div>
          
        </div>
      </div>
    </section>
  );
}
