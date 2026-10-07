import React from 'react';

const CapabilitiesPrivateLabel = () => {
  return (
    <section className="w-full bg-[#0B0C0E] flex justify-center pb-12 lg:pb-24">
      <div className="max-w-[1440px] w-full px-6 md:px-12 flex justify-center">
        
        {/* Green Banner */}
        <div className="w-full bg-[#0B2519] relative flex flex-col lg:flex-row items-start lg:items-center justify-between p-10 lg:p-16 xl:p-20 overflow-hidden">
          
          {/* Faint Dot Pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)', 
              backgroundSize: '40px 40px' 
            }}
          />

          {/* Left Text */}
          <div className="relative z-10 max-w-[650px] mb-10 lg:mb-0">
            <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-5 block">
              04
            </span>
            <h2 className="text-[#F2EEE6] font-serif text-4xl lg:text-[48px] leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-6">
              Private Label
            </h2>
            <p className="text-[#9BB2A4] font-light text-[14px] lg:text-[15px] leading-[1.8]">
              Your brand, our supply chain. Product sourcing, manufacturer identification, development, packaging, quality coordination, export and distribution — under your own label.
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 lg:ml-8 flex-shrink-0">
            <button className="bg-[#C5A66D] hover:bg-[#F2EEE6] text-[#0B0C0E] text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-5 transition-colors flex items-center gap-2">
              START A PRIVATE LABEL PROJECT <span className="text-[14px] leading-none mb-0.5">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CapabilitiesPrivateLabel;
