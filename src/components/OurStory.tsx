import React from 'react';

const OurStory = () => (
  <section className="bg-[#F2EEE6] w-full py-12 lg:py-20 px-6 md:px-12 flex justify-center">
    <div className="max-w-[1440px] w-full flex flex-col items-start">
      <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-4 lg:mb-8 block">
        01 <span className="mx-3 font-light">/</span> OUR STORY
      </span>
      
      <h2 className="text-4xl md:text-5xl lg:text-[76px] font-serif leading-[1.05] mb-8 lg:mb-12 font-['Times_New_Roman',serif] tracking-tight max-w-[1100px] break-words">
        <span className="text-[#1C1B19]">Building a company </span>
        <span className="text-[#A28251] italic">from the consumer backwards.</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 w-full">
        <p className="text-[#4A4947] text-[15px] lg:text-[16px] leading-[1.8] font-light">
          AMS FOODS is a Mozambique-based international sourcing, trading and distribution company, created to connect trusted manufacturers, quality products and growing markets across Africa and beyond.
        </p>
        <p className="text-[#4A4947] text-[15px] lg:text-[16px] leading-[1.8] font-light">
          The company was founded on a simple observation: the strongest products are born from understanding the consumer first — and the strongest supply chains are built to serve that understanding, from origin to market.
        </p>
      </div>
    </div>
  </section>
);

export default OurStory;
