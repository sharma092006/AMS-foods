import React from 'react';

const principles = [
  { num: '01', title: 'The consumer comes first', text: 'Every product should solve a real need.' },
  { num: '02', title: 'Quality is non-negotiable', text: 'Convenience should never come at the expense of quality.' },
  { num: '03', title: 'Good products need good supply chains', text: 'From origin to market, every step matters.' },
  { num: '04', title: 'Brands should have purpose', text: 'A brand should stand for something beyond its packaging.' },
  { num: '05', title: 'Partnerships create long-term value', text: 'Strong businesses are built through trust and shared growth.' },
];

const WhatWeBelieve = () => (
  <section className="bg-[#0B0C0E] w-full py-16 lg:py-24 px-6 md:px-12 flex justify-center border-t border-[#1C1D20]">
    <div className="max-w-[1440px] w-full flex flex-col">
      
      {/* Header */}
      <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-8 lg:mb-10 block">
        06 <span className="mx-3 font-light">/</span> WHAT WE BELIEVE
      </span>
      
      <h2 className="text-[#F2EEE6] font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-12 lg:mb-16">
        The principles behind every decision.
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24">
        {principles.map((item, index) => (
          <div key={index} className="flex gap-6 lg:gap-8 py-8 lg:py-10 border-b border-[#1C1D20] group cursor-pointer">
            <div className="text-[#A28251] font-bold text-[12px] lg:text-[13px] tracking-widest pt-1.5">
              {item.num}
            </div>
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="text-[#F2EEE6] font-serif text-xl lg:text-[24px] group-hover:text-[#A28251] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#A0A0A0] font-light text-[14px] lg:text-[15px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default WhatWeBelieve;
