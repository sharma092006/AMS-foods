import React from 'react';

const cards = [
  {
    id: '01',
    title: 'SOURCE',
    desc: 'Buy food ingredients and products.',
    link: 'EXPLORE PRODUCTS ↗',
    img: 'https://picsum.photos/id/292/800/1200'
  },
  {
    id: '02',
    title: 'BUILD',
    desc: 'Create your own private-label brand.',
    link: 'START A PRIVATE LABEL ↗',
    img: 'https://picsum.photos/id/119/800/1200'
  },
  {
    id: '03',
    title: 'DISTRIBUTE',
    desc: 'Become a distribution partner.',
    link: 'BECOME A PARTNER ↗',
    img: 'https://picsum.photos/id/175/800/1200'
  }
];

export default function WaysToWork() {
  return (
    <section className="bg-[#0B0C0E] w-full py-10 lg:py-14 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col">
        
        {/* Header */}
        <div className="w-full mb-8 lg:mb-10">
          <span className="text-[#A28251] font-bold text-[11px] tracking-[0.3em] uppercase mb-3 lg:mb-4 block">
            07 <span className="mx-3 font-light">/</span> Ways to work with us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight">
            <span className="block text-[#F2EEE6] mb-1">One company.</span>
            <span className="block text-[#A28251] italic">Multiple ways to work with us.</span>
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="group relative flex flex-col justify-between overflow-hidden border border-[#F2EEE6] min-h-[450px] lg:min-h-[600px] p-6 lg:p-8 cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={card.img} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 z-0"
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/70 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/90 via-[#0B0C0E]/30 to-transparent z-10"></div>

              {/* Content Top */}
              <div className="relative z-20">
                <span className="text-[#A28251] text-[12px] font-bold tracking-widest">{card.id}</span>
              </div>
              
              {/* Content Bottom */}
              <div className="relative z-20 mt-auto">
                <h3 className="text-[#F2EEE6] text-3xl lg:text-4xl font-serif font-['Times_New_Roman',serif] mb-2 tracking-wide">
                  {card.title}
                </h3>
                <p className="text-[#A0A0A0] text-[13px] font-light mb-5">
                  {card.desc}
                </p>
                <span className="text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group-hover:text-[#F2EEE6]">
                  {card.link}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
