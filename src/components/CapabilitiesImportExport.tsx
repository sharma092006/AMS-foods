import React from 'react';
import shipImage2 from '../assets/image/ship-2.avif';

const CapabilitiesImportExport = () => {
  return (
    <section className="w-full bg-[#0B0C0E] flex justify-center pb-12 lg:pb-24">
      <div className="max-w-[1440px] w-full px-6 md:px-12 flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
        
        {/* Text Column */}
        <div className="w-full lg:w-1/2 flex items-center justify-start bg-[#0B0C0E]">
          <div className="w-full py-8 lg:py-12">
            
            <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-4 block">
              02
            </span>
            
            <h2 className="text-[#F2EEE6] font-serif text-4xl lg:text-[48px] leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-6">
              Import & Export
            </h2>
            
            <p className="text-[#D1CFC7] font-light text-[14px] lg:text-[15px] leading-[1.8] mb-8">
              Full-cycle international trade operations. From proforma to port: international documentation, freight coordination, customs and delivery — managed end to end across markets.
            </p>

            {/* Table/List Rows */}
            <div className="flex flex-col mb-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-[#1C1D20]">
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">International documentation</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">Freight & customs coordination</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-b border-[#1C1D20]">
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">Incoterms expertise</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#A28251] text-[10px]">♦</span>
                  <span className="text-[#F2EEE6] text-[13px] tracking-wide">Cross-border compliance</span>
                </div>
              </div>

            </div>

            {/* CTA Link */}
            <div>
              <a href="#" className="text-[#C5A66D] hover:text-[#F2EEE6] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors flex items-center gap-2">
                IMPORT / EXPORT ENQUIRY <span className="text-[14px] leading-none mb-0.5">→</span>
              </a>
            </div>

          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2">
          <img 
            src={shipImage2} 
            alt="Import & Export Ship" 
            className="w-full h-[300px] lg:h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesImportExport;
