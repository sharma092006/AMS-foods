import React from 'react';

const cards = [
  { 
    id: '01', 
    title: 'IMPORTERS', 
    desc: 'Source products and ingredients for your market.', 
    icon: (
      <svg className="w-[22px] h-[22px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 15V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 15h20l-2 5H4l-2-5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5h8" />
      </svg>
    ) 
  },
  { 
    id: '02', 
    title: 'DISTRIBUTORS', 
    desc: 'Build a portfolio with reliable international supply.', 
    icon: (
      <svg className="w-[22px] h-[22px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ) 
  },
  { 
    id: '03', 
    title: 'RETAILERS', 
    desc: 'Discover market-ready consumer brands and products.', 
    icon: (
      <svg className="w-[22px] h-[22px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ) 
  },
  { 
    id: '04', 
    title: 'FOOD MANUFACTURERS', 
    desc: 'Source food ingredients and dehydrated products.', 
    icon: (
      <svg className="w-[22px] h-[22px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ) 
  },
  { 
    id: '05', 
    title: 'PRIVATE-LABEL BUYERS', 
    desc: 'Create products under your own brand.', 
    icon: (
      <svg className="w-[22px] h-[22px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ) 
  }
];

export default function WhoWeServe() {
  return (
    <section className="bg-[#F2EEE6] w-full py-10 lg:py-14 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1536px] w-full flex flex-col items-center lg:items-start">
        
        {/* Header */}
        <div className="w-full mb-8 lg:mb-10">
          <span className="text-[#A28251] font-bold text-[11px] tracking-[0.3em] uppercase mb-3 lg:mb-4 block text-center lg:text-left">
            06 <span className="mx-3 font-light">/</span> Who We Serve
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight text-center lg:text-left">
            <span className="block text-[#1C1B19] mb-1">Five roles.</span>
            <span className="block text-[#A28251] italic">One supply chain.</span>
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-[#EBE6D9] p-5 flex flex-col min-h-[180px] transition-all duration-300 ease-out border-[1.5px] border-[#DCD5C5] hover:border-[#A28251] hover:scale-[1.03] hover:shadow-lg cursor-default"
            >
              {/* Top Row: Icon and Number */}
              <div className="flex justify-between items-start mb-6 lg:mb-8">
                <div className="flex items-center justify-center">
                  {card.icon}
                </div>
                <span className="text-[#A28251] text-[10px] font-bold tracking-widest">{card.id}</span>
              </div>
              
              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-[#1C1B19] text-[14px] lg:text-[15px] font-serif font-['Times_New_Roman',serif] font-bold mb-2 tracking-wide leading-snug uppercase pr-2">
                  {card.title}
                </h3>
                <p className="text-[#646360] text-[12px] leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
