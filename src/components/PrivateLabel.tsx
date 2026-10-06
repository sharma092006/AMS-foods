import React, { useState } from 'react';

const steps = [
  { id: '01', title: 'Product Sourcing', desc: 'We identify and secure the highest quality raw materials and ingredients from our trusted global network of suppliers to perfectly match your brand standards.' },
  { id: '02', title: 'Manufacturer Selection', desc: 'Our team evaluates and partners with top-tier, certified manufacturers capable of meeting your exact production requirements and scaling needs.' },
  { id: '03', title: 'Product Development', desc: 'We collaborate closely to develop bespoke formulas, distinct flavor profiles, and innovative product concepts tailored specifically for your target demographic.' },
  { id: '04', title: 'Packaging', desc: 'We provide end-to-end packaging solutions, from structural design to premium labeling, ensuring your product stands out on retail shelves.' },
  { id: '05', title: 'Quality Coordination', desc: 'Rigorous quality control and continuous oversight throughout the entire production cycle guarantee that every unit meets strict international safety and quality standards.' },
  { id: '06', title: 'Export & Logistics', desc: 'We manage all complex export documentation, regulatory compliance, and international freight to ensure smooth, timely delivery to your destination.' },
  { id: '07', title: 'Market Distribution', desc: 'Leverage our extensive distribution network to strategically place your private label products in optimal retail and wholesale channels.' }
];

export default function PrivateLabel() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section 
      className="w-full py-12 lg:py-20 px-6 md:px-12 flex justify-center relative bg-[#0D2419]"
      style={{
        backgroundImage: 'radial-gradient(#1A382A 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column */}
        <div className="lg:w-5/12 flex flex-col">
          <span className="text-[#A28251] font-bold text-[11px] lg:text-[12px] tracking-[0.3em] uppercase mb-5 lg:mb-6 block">
            10 <span className="mx-3 font-light">/</span> Private Label
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-serif leading-[1.05] font-['Times_New_Roman',serif] tracking-tight mb-8 lg:mb-10">
            <span className="block text-[#F2EEE6] mb-2">Your brand.</span>
            <span className="block text-[#A28251] italic">Built with us.</span>
          </h2>
          <p className="text-[#A3B0A8] text-[15px] lg:text-[16px] font-light max-w-md leading-relaxed mb-10 lg:mb-12 pr-4">
            From product selection and sourcing to packaging, quality coordination and export, we help businesses develop products for their markets.
          </p>
          <div>
            <button className="w-full sm:w-auto bg-[#D2A554] hover:bg-[#B88F44] text-[#0D2419] text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-5 transition-colors flex items-center justify-center gap-3">
              Start a private label project <span className="text-[15px] leading-none">→</span>
            </button>
          </div>
        </div>
        
        {/* Right Column (FAQ Accordion) */}
        <div className="lg:w-7/12 w-full flex flex-col pt-2 lg:pt-0">
          <div className="border-t border-[#1C3628]">
            {steps.map((step) => {
              const isOpen = openIndex === step.id;
              
              return (
                <div 
                  key={step.id} 
                  className={`flex flex-col border-b border-[#1C3628] cursor-pointer transition-colors duration-300 ${hoveredIndex === step.id && !isOpen ? 'bg-[#122E21]' : 'bg-transparent'}`}
                  onMouseEnter={() => setHoveredIndex(step.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => toggleAccordion(step.id)}
                >
                  {/* Accordion Header */}
                  <div className="flex items-center justify-between py-5 lg:py-6">
                    <div className="flex items-center gap-6 lg:gap-10 pl-2 lg:pl-4">
                      <span className="text-[#A28251] text-[11px] font-bold tracking-[0.2em]">
                        {step.id}
                      </span>
                      <span className={`text-[17px] lg:text-[20px] font-medium transition-colors duration-300 ${hoveredIndex === step.id || isOpen ? 'text-[#D2A554]' : 'text-[#F2EEE6]'}`}>
                        {step.title}
                      </span>
                    </div>
                    <div className="pr-2 lg:pr-4 flex items-center justify-center w-8 h-8">
                      <span className={`text-[#A28251] text-[20px] font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                        +
                      </span>
                    </div>
                  </div>
                  
                  {/* Accordion Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}
                  >
                    <p className="text-[#A3B0A8] text-[14px] lg:text-[15px] font-light leading-relaxed pl-16 lg:pl-[72px] pr-4 lg:pr-10">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
