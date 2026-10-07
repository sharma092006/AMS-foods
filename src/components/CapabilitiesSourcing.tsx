import React from 'react';
import factoryImage from '../assets/image/facility.png';

const CapabilitiesSourcing = () => {
  return (
    <section className="w-full bg-[#0B0C0E] flex flex-col lg:flex-row border-t border-[#1C1D20] py-12 lg:py-24">
      
      {/* Image Column */}
      <div className="w-full lg:w-1/2 relative">
        <img 
          src={factoryImage} 
          alt="Global Sourcing Factory" 
          className="w-full h-[300px] lg:h-full object-cover lg:absolute inset-0"
        />
      </div>
      
      {/* Text Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start bg-[#0B0C0E]">
        <div className="max-w-[650px] w-full px-8 py-10 lg:px-16 xl:px-24 lg:py-16">
          
          <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-4 block">
            01
          </span>
          
          <h2 className="text-[#F2EEE6] font-serif text-4xl lg:text-[48px] leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-6">
            Global Sourcing
          </h2>
          
          <p className="text-[#D1CFC7] font-light text-[14px] lg:text-[15px] leading-[1.8] mb-8">
            We identify, audit and manage manufacturers and producers at origin. Each sourcing relationship is matched to demand on quality, capacity, certification and cost — with specifications, samples and documentation handled by our team.
          </p>

          {/* Table/List Rows */}
          <div className="flex flex-col mb-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-[#1C1D20]">
              <div className="flex items-center gap-4">
                <span className="text-[#A28251] text-[10px]">♦</span>
                <span className="text-[#F2EEE6] text-[13px] tracking-wide">Origin identification</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#A28251] text-[10px]">♦</span>
                <span className="text-[#F2EEE6] text-[13px] tracking-wide">Supplier audit & verification</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-b border-[#1C1D20]">
              <div className="flex items-center gap-4">
                <span className="text-[#A28251] text-[10px]">♦</span>
                <span className="text-[#F2EEE6] text-[13px] tracking-wide">Specification & sampling</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#A28251] text-[10px]">♦</span>
                <span className="text-[#F2EEE6] text-[13px] tracking-wide">Capacity matching</span>
              </div>
            </div>

          </div>

          {/* CTA Link */}
          <div>
            <a href="#" className="text-[#C5A66D] hover:text-[#F2EEE6] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
              BECOME A SUPPLIER <span className="text-[14px] leading-none mb-0.5">→</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CapabilitiesSourcing;
