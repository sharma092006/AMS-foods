import React from 'react';

export default function CallToAction() {
  return (
    <section className="w-full py-20 lg:py-28 px-6 md:px-12 flex justify-center bg-[#102C1E] relative overflow-hidden">
      
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="max-w-[1000px] w-full flex flex-col items-center text-center relative z-10">
        
        {/* Header Section */}
        <h2 className="text-5xl md:text-6xl lg:text-[72px] font-serif leading-[1.05] font-['Times_New_Roman',serif] tracking-tight mb-8">
          <span className="block text-[#F2EEE6] mb-1">Let's build</span>
          <span className="block text-[#D2A554] italic">what's next.</span>
        </h2>

        <p className="text-[#A2B8AA] text-[15px] lg:text-[16px] font-light leading-relaxed max-w-2xl mb-12">
          Whether you're looking for a product, sourcing partner, distributor or private-label
          <br className="hidden md:block" />
          solution, let's explore the opportunity.
        </p>

        {/* Main CTA Button */}
        <button className="bg-[#D2A554] hover:bg-[#E5B560] transition-colors duration-300 px-8 py-4 mb-20 lg:mb-24 flex items-center gap-3">
          <span className="text-[#102C1E] text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase">
            Start a Business Enquiry <span className="text-[14px] leading-none ml-1">→</span>
          </span>
        </button>

        {/* Bottom 3 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Box 1 */}
          <div className="border border-[#234230] hover:border-[#D2A554]/50 hover:bg-[#153423] transition-all duration-300 p-8 lg:p-10 flex flex-col items-center justify-center cursor-pointer group">
            <span className="text-[#8B9E90] text-[9px] lg:text-[10px] font-bold tracking-[0.25em] uppercase mb-4 group-hover:text-[#A2B8AA] transition-colors">
              For Suppliers
            </span>
            <span className="text-[#F2EEE6] group-hover:text-[#D2A554] transition-colors text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 text-center">
              Become a Supplier <span className="text-[14px]">→</span>
            </span>
          </div>

          {/* Box 2 */}
          <div className="border border-[#234230] hover:border-[#D2A554]/50 hover:bg-[#153423] transition-all duration-300 p-8 lg:p-10 flex flex-col items-center justify-center cursor-pointer group">
            <span className="text-[#8B9E90] text-[9px] lg:text-[10px] font-bold tracking-[0.25em] uppercase mb-4 group-hover:text-[#A2B8AA] transition-colors">
              For Buyers
            </span>
            <span className="text-[#F2EEE6] group-hover:text-[#D2A554] transition-colors text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 text-center">
              Source with AMS Foods <span className="text-[14px]">→</span>
            </span>
          </div>

          {/* Box 3 */}
          <div className="border border-[#234230] hover:border-[#D2A554]/50 hover:bg-[#153423] transition-all duration-300 p-8 lg:p-10 flex flex-col items-center justify-center cursor-pointer group">
            <span className="text-[#8B9E90] text-[9px] lg:text-[10px] font-bold tracking-[0.25em] uppercase mb-4 group-hover:text-[#A2B8AA] transition-colors">
              For Private Label
            </span>
            <span className="text-[#F2EEE6] group-hover:text-[#D2A554] transition-colors text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 text-center">
              Start a Private Label Project <span className="text-[14px]">→</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
