import React from 'react';
import bannerImage from '../assets/image/banner.avif';

const BrandsHero = () => {
  return (
    <div className="w-full bg-[#0B0C0E] pt-32 pb-24 relative overflow-hidden">
      
      {/* Background Image with Gradient Fade */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[500px] lg:h-[800px] z-0">
        <img 
          src={bannerImage} 
          alt="Brands Banner" 
          className="w-full h-full object-cover opacity-40 lg:opacity-60"
        />
        {/* Horizontal Gradient to blend image into left background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0E] via-[#0B0C0E]/80 to-transparent" />
        
        {/* Vertical Gradients to blend top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E] via-transparent to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Hero Text */}
        <div className="max-w-[800px] mb-24 lg:mb-32">
          <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6 block">
            OUR BRANDS
          </span>
          <h1 className="text-[#F2EEE6] font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-8">
            One house.<br/>
            A growing family of brands.
          </h1>
          <p className="text-[#D1CFC7] font-light text-[15px] lg:text-[16px] leading-[1.8] max-w-[600px]">
            AMS FOODS develops and owns consumer brands. Each brand keeps its own identity — united by our sourcing, quality and distribution platform.
          </p>
        </div>



      </div>
    </div>
  );
};

export default BrandsHero;
