import React from 'react';
import transportImage from '../assets/image/transport.png';

const CapabilitiesDistribution = () => {
  return (
    <section className="w-full bg-[#0B0C0E] flex justify-center pb-12 lg:pb-24">
      <div className="max-w-[1440px] w-full px-6 md:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* Image Column */}
        <div className="w-full lg:w-1/2">
          <img 
            src={transportImage} 
            alt="Distribution and Logistics" 
            className="w-full h-[300px] lg:h-full object-cover min-h-[400px]"
          />
        </div>
        
        {/* Text Column */}
        <div className="w-full lg:w-1/2 flex items-center justify-start bg-[#0B0C0E]">
          <div className="w-full py-8 lg:py-12">
            
            <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-4 block">
              03
            </span>
            
            <h2 className="text-[#F2EEE6] font-serif text-4xl lg:text-[48px] leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-6">
              Distribution
            </h2>
            
            <p className="text-[#D1CFC7] font-light text-[14px] lg:text-[15px] leading-[1.8] mb-8">
              Structured distribution that moves products from ports and factories to shelves. We develop route-to-market strategies and serve wholesale, retail and food-service channels.
            </p>

            {/* Table/List Rows */}
            <div className="flex flex-col mb-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-[#1C1D20]">
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">Wholesale & retail supply</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">Food-service channels</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-b border-[#1C1D20]">
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">Route-to-market development</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">Inventory & fulfilment</span>
                </div>
              </div>

            </div>

            {/* CTA Link */}
            <div>
              <a href="#" className="text-[#C5A66D] hover:text-[#F2EEE6] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
                BECOME A DISTRIBUTOR <span className="text-[14px] leading-none mb-0.5">→</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesDistribution;
