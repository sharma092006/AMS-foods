import React, { useState } from 'react';

const items = [
  { id: '01', title: 'Source', desc: 'Finding trusted products and manufacturing partners.', img: 'https://picsum.photos/id/119/1000/800' },
  { id: '02', title: 'Develop', desc: 'Creating products, packaging and brands for target markets.', img: 'https://picsum.photos/id/292/1000/800' },
  { id: '03', title: 'Trade', desc: 'Managing commercial, export and supply-chain requirements.', img: 'https://picsum.photos/id/175/1000/800' },
  { id: '04', title: 'Distribute', desc: 'Connecting products with distributors, retailers and consumers.', img: 'https://picsum.photos/id/312/1000/800' }
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0B0C0E] w-full py-10 lg:py-12 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1536px] w-full">
        
        <div className="mb-6 lg:mb-10 pl-8 lg:pl-12">
          <span className="text-[#B89C63] font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
            03 <span className="mx-2 font-light">/</span> What we do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-serif leading-[1.1] text-white font-['Times_New_Roman',serif]">
            <span className="block mb-1">One partner.</span>
            <span className="block">From source to shelf.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 pl-8 lg:pl-12 pr-0 lg:pr-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute left-[5px] top-3 bottom-3 w-[1px] bg-[#2A2B2E]" />
            <div className="flex flex-col">
              {items.map((item, i) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setActive(i)}
                  className="relative group cursor-pointer border-b border-[#2A2B2E] last:border-b-0 py-4 lg:py-5 pr-6"
                >
                  <div className={`absolute left-[5px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[9px] h-[9px] rotate-45 transition-all duration-300 z-10 ${i === active ? 'bg-[#B89C63] shadow-[0_0_12px_rgba(184,156,99,0.8)] border-none' : 'bg-[#0B0C0E] border border-[#B89C63]'}`} />
                  <div className="flex items-start pl-12 lg:pl-16">
                    <span className="text-[#B89C63] font-bold text-sm tracking-wider w-12 pt-1">{item.id}</span>
                    <div className="flex-1">
                      <h3 className={`text-2xl lg:text-[30px] font-serif mb-1 transition-colors duration-300 font-['Times_New_Roman',serif] ${i === active ? 'text-[#B89C63]' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      <p className="text-[#888] text-sm lg:text-[14px] font-light leading-relaxed max-w-[85%]">{item.desc}</p>
                    </div>
                    <svg className="mt-1.5 text-[#B89C63] opacity-60 w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[320px] lg:h-[420px] overflow-hidden">
            {items.map((item, i) => (
              <img 
                key={item.id} src={item.img} alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === active ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
