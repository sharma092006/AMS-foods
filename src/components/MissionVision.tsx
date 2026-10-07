import React from 'react';

const MissionVision = () => (
  <section className="bg-[#F2EEE6] w-full py-12 lg:py-16 px-6 md:px-12 flex justify-center">
    <div className="max-w-[1440px] w-full flex flex-col">
      
      {/* Mission */}
      <div className="flex flex-col items-start max-w-[1000px] mb-10 lg:mb-16">
        <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6 lg:mb-8 block">
          04 <span className="mx-3 font-light">/</span> OUR MISSION
        </span>
        
        <h2 className="text-[#1C1B19] font-serif text-3xl md:text-4xl lg:text-[42px] leading-[1.15] font-['Times_New_Roman',serif] tracking-tight mb-4 lg:mb-6">
          To connect quality products with the people and markets that need them — through responsible sourcing, thoughtful product development, reliable trade and effective distribution.
        </h2>
        
        <p className="text-[#4A4947] text-[15px] lg:text-[16px] leading-[1.8] font-light max-w-[850px]">
          We aim to make everyday life better by bringing consumers quality food products that combine convenience, authenticity and value, while creating sustainable opportunities for suppliers, manufacturers, retailers and distribution partners.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-[#1C1B19]/10 w-full mb-10 lg:mb-16" />

      {/* Vision */}
      <div className="flex flex-col items-start max-w-[1000px]">
        <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6 lg:mb-8 block">
          05 <span className="mx-3 font-light">/</span> OUR VISION
        </span>
        
        <h2 className="text-[#1C1B19] font-serif text-3xl md:text-4xl lg:text-[42px] leading-[1.15] font-['Times_New_Roman',serif] tracking-tight">
          To become a trusted bridge between global supply and growing markets — discovering products at origin, developing brands with purpose and bringing quality closer to consumers.
        </h2>
      </div>

    </div>
  </section>
);

export default MissionVision;
