import React from 'react';

const OriginToMarket = () => (
  <section className="bg-[#0B0C0E] w-full py-24 lg:py-32 px-6 md:px-12 flex justify-center items-center border-t border-b border-[#1C1D20]">
    <div className="flex flex-col items-center text-center">
      
      <h2 className="font-serif text-5xl md:text-6xl lg:text-[76px] leading-[1.05] font-['Times_New_Roman',serif] tracking-tight mb-12 lg:mb-16">
        <span className="block text-[#F2EEE6]">From origin.</span>
        <span className="block text-[#A28251] italic">To market.</span>
      </h2>

      <button className="bg-[#C5A66D] hover:bg-[#F2EEE6] hover:text-[#1C1B19] text-[#1C1B19] font-bold text-[11px] md:text-[12px] tracking-[0.2em] uppercase px-10 py-5 transition-colors duration-300 flex items-center gap-3">
        START A CONVERSATION
        <span className="text-lg leading-none mb-0.5">→</span>
      </button>

    </div>
  </section>
);

export default OriginToMarket;
