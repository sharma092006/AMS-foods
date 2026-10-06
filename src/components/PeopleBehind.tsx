import React from 'react';
import amitaPortrait from '../assets/image/amita-portrait.jpg';

export default function PeopleBehind() {
  return (
    <section className="w-full py-16 lg:py-24 px-6 md:px-12 flex justify-center bg-[#0B0C0E]">
      <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Image */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[450px] lg:max-w-none">
            {/* Gold Frame Offset */}
            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 w-full h-full border border-[#A28251]/60 z-0"></div>
            {/* Main Portrait */}
            <img 
              src={amitaPortrait} 
              alt="Amita Motichande Cantilal - Managing Director" 
              className="relative z-10 w-full h-auto object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <span className="text-[#A28251] font-bold text-[10px] tracking-[0.3em] uppercase mb-6 block">
            The People Behind AMS Foods
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.05] font-['Times_New_Roman',serif] tracking-tight mb-8">
            <span className="text-[#F2EEE6]">The thinking behind </span>
            <span className="text-[#A28251] italic">AMS FOODS.</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-6 mb-8">
            <h3 className="text-[22px] lg:text-[26px] text-[#F2EEE6] font-serif leading-none">
              Amita Motichande Cantilal
            </h3>
            <span className="text-[#A28251] text-[9px] lg:text-[10px] tracking-[0.2em] font-bold uppercase pb-[2px]">
              Managing Director
            </span>
          </div>

          <div className="flex flex-col gap-6 mb-10">
            <p className="text-[#D1CFC7] text-[14px] lg:text-[15px] font-light leading-relaxed">
              With extensive experience across product management, category management, retail, wholesale and distribution, Amita has built her career around understanding one fundamental connection: the relationship between products and the people who use them.
            </p>
            <p className="text-[#D1CFC7] text-[14px] lg:text-[15px] font-light leading-relaxed">
              Her experience across the complete commercial chain — from product selection and consumer understanding to sourcing, development, distribution and retail — became the foundation for AMS FOODS.
            </p>
            <p className="text-[#D1CFC7] text-[14px] lg:text-[15px] font-light leading-relaxed">
              She believes that the best products are those that combine quality, convenience and relevance to everyday life.
            </p>
          </div>

          <blockquote className="border-l-[2px] border-[#A28251] pl-6 mb-12">
            <p className="text-[#F2EEE6] font-serif italic text-xl lg:text-[22px] leading-[1.4] tracking-wide">
              "For me, the journey of a product does not end when it leaves the factory. It ends when it creates value on the consumer's table."
            </p>
          </blockquote>

          <a href="#" className="inline-block text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-[#F2EEE6]">
            Read Amita's Story →
          </a>

        </div>

      </div>
    </section>
  );
}
