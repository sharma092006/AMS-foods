import React from 'react';
import supplierImage from '../assets/image/hero-farmland.png';
import distributorImage from '../assets/image/who-we-are.png';
import retailerImage from '../assets/image/food.webp';

export default function Partnerships() {
  const cards = [
    {
      id: '01',
      title: 'SUPPLIERS',
      description: 'Introduce your products to growing African markets.',
      linkText: 'BECOME A SUPPLIER →',
      image: supplierImage,
      cardStyle: 'border-transparent',
      linkColor: 'text-[#A28251]'
    },
    {
      id: '02',
      title: 'DISTRIBUTORS',
      description: 'Partner with us to bring market-ready products to your territory.',
      linkText: 'BECOME A DISTRIBUTOR →',
      image: distributorImage,
      cardStyle: 'border-t-[3px] border-t-[#5C9471] border-x-transparent border-b-transparent',
      linkColor: 'text-[#5C9471]'
    },
    {
      id: '03',
      title: 'RETAILERS',
      description: 'Bring differentiated products to your shelves.',
      linkText: 'BECOME A RETAIL PARTNER →',
      image: retailerImage,
      cardStyle: 'border border-[#A28251]',
      linkColor: 'text-[#F2EEE6]'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 px-6 md:px-12 flex justify-center bg-[#F4F1EB] relative">
      <div className="max-w-[1440px] w-full flex flex-col">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="text-[#A28251] font-bold text-[10px] lg:text-[11px] tracking-[0.3em] uppercase mb-4 block">
            13 <span className="mx-3 font-light">/</span> Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.05] font-['Times_New_Roman',serif] tracking-tight">
            <span className="text-[#1A1D1A]">Grow with the</span>
            <br />
            <span className="text-[#A28251] italic">right partners.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`relative flex flex-col h-[400px] lg:h-[480px] w-full overflow-hidden group cursor-pointer bg-[#1A1C1A] ${card.cardStyle}`}
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1A] via-[#1A1C1A]/80 to-transparent z-10" />
              
              {/* Card Number */}
              <div className="absolute top-4 right-5 z-20">
                <span className="text-white text-[10px] font-bold tracking-widest">{card.id}</span>
              </div>

              {/* Content */}
              <div className="relative z-20 flex flex-col justify-end h-full p-6 lg:p-8">
                <h3 className="text-[#F2EEE6] font-serif text-2xl lg:text-[28px] tracking-wide mb-3">
                  {card.title}
                </h3>
                <p className="text-[#D1CFC7] text-[13px] lg:text-[14px] font-light leading-relaxed mb-6 max-w-[90%]">
                  {card.description}
                </p>
                
                <div>
                  <span className={`${card.linkColor} text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors`}>
                    {card.linkText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
