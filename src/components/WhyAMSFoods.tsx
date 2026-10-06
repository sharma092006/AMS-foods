import React from 'react';

const cards = [
  { id: '01', title: 'Origin-led sourcing', desc: 'We identify suitable products and suppliers at origin.', icon: <svg className="w-[18px] h-[18px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> },
  { id: '02', title: 'Market-ready development', desc: 'We adapt product, packaging and positioning to market requirements.', icon: <svg className="w-[18px] h-[18px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 22.08V12" /></svg> },
  { id: '03', title: 'One commercial partner', desc: 'Source, develop, trade and distribute through one relationship.', icon: <svg className="w-[18px] h-[18px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21.5c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg> },
  { id: '04', title: 'Documentation discipline', desc: 'Specifications and required trade documentation are managed as part of the process.', icon: <svg className="w-[18px] h-[18px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
  { id: '05', title: 'Flexible commercial models', desc: 'Bulk ingredients, consumer brands and private-label solutions.', icon: <svg className="w-[18px] h-[18px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" /></svg> },
  { id: '06', title: 'African market focus', desc: 'Built from Mozambique with regional growth in mind.', icon: <svg className="w-[18px] h-[18px] text-[#A28251]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg> }
];

export default function WhyAMSFoods() {
  return (
    <section className="bg-[#F2EEE6] w-full py-16 lg:py-20 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1440px] w-full">
        
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <span className="text-[#A28251] font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
            05 <span className="mx-3 font-light">/</span> Why AMS Foods
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight">
            <span className="block text-[#1C1B19] mb-1">Why partner</span>
            <span className="block text-[#A28251] italic">with AMS FOODS?</span>
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-[#EAE5DA] p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 ease-out border border-transparent hover:border-[#A28251] hover:scale-[1.03] hover:shadow-lg cursor-default"
            >
              <div className="flex justify-between items-start mb-5 lg:mb-6">
                <div className="flex items-center justify-center">
                  {card.icon}
                </div>
                <span className="text-[#A28251] text-[10px] font-bold tracking-widest">{card.id}</span>
              </div>
              
              <div>
                <h3 className="text-[#1C1B19] text-base lg:text-[17px] font-bold mb-1.5 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[#646360] text-[13px] leading-relaxed font-light">
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
