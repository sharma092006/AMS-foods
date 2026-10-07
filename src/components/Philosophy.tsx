import React from 'react';

const Philosophy = () => (
  <section className="bg-[#0B1E13] w-full py-12 lg:py-16 px-6 md:px-12 flex justify-center border-t border-[#1A3824]">
    <div className="max-w-[1440px] w-full flex flex-col items-start">
      <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-8 lg:mb-10 block">
        03 <span className="mx-3 font-light">/</span> THE PHILOSOPHY
      </span>
      
      <div className="flex flex-col gap-4 lg:gap-6 max-w-[1000px] font-serif text-3xl md:text-4xl lg:text-[48px] leading-[1.1] font-['Times_New_Roman',serif] tracking-tight break-words text-[#F2EEE6]">
        <p>Understand the consumer first.</p>
        <p>Build the product around the need.</p>
        <p>Build the supply chain around the product.</p>
        <p className="text-[#A28251] italic">And build the business around trust.</p>
      </div>

      <div className="mt-10 lg:mt-12">
        <span className="text-[#A2B8AA] font-bold text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
          — AMITA MOTICHANDE CANTILAL, MANAGING DIRECTOR
        </span>
      </div>
    </div>
  </section>
);

export default Philosophy;
