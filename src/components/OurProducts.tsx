import React from 'react';
import foodImg from '../assets/image/food.webp';

const products = [
  {
    id: '01',
    title: 'Food Ingredients',
    desc: 'Dehydrated vegetables, powders, seasonings and related ingredients.',
    link: 'EXPLORE ↗',
    img: 'https://picsum.photos/id/292/800/800'
  },
  {
    id: '02',
    title: 'Consumer Brands',
    desc: 'Retail-ready products developed for growing markets.',
    link: 'EXPLORE ↗',
    img: foodImg
  },
  {
    id: '03',
    title: 'Private Label',
    desc: 'Products sourced and developed for partner brands.',
    link: 'EXPLORE ↗',
    img: 'https://picsum.photos/id/119/800/800'
  }
];

export default function OurProducts() {
  return (
    <section className="bg-[#0B0C0E] w-full py-16 lg:py-20 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col">
        
        {/* Header */}
        <div className="w-full flex flex-col items-start mb-10 lg:mb-14">
          <span className="text-[#A28251] font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
            09 <span className="mx-3 font-light">/</span> Our Products
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-6">
            <span className="block text-[#F2EEE6] mb-1">A portfolio built for</span>
            <span className="block text-[#A28251] italic">evolving markets.</span>
          </h2>
          <p className="text-[#A0A0A0] text-[14px] font-light max-w-2xl leading-relaxed">
            From food ingredients and dehydrated products to retail-ready consumer goods, our portfolio is designed to evolve with market opportunities.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative flex flex-col justify-end overflow-hidden border border-[#F2EEE6] min-h-[400px] lg:min-h-[450px] p-6 lg:p-8 cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={product.img} 
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] z-0"
              />
              
              {/* Gradient Overlay (Dark at bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/40 to-transparent z-10"></div>

              {/* Content Bottom */}
              <div className="relative z-20 mt-auto">
                <h3 className="text-[#F2EEE6] text-2xl lg:text-3xl font-serif font-['Times_New_Roman',serif] mb-2 tracking-wide">
                  {product.title}
                </h3>
                <p className="text-[#A0A0A0] text-[13px] font-light mb-5 max-w-xs">
                  {product.desc}
                </p>
                <span className="text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group-hover:text-[#F2EEE6]">
                  {product.link}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom Button */}
        <div className="w-full flex justify-center">
          <button className="w-full sm:w-auto bg-transparent border border-[#444548] hover:border-[#F2EEE6] text-[#F2EEE6] text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-colors flex items-center justify-center gap-2">
            Explore our product portfolio <span className="text-sm leading-none">↗</span>
          </button>
        </div>
        
      </div>
    </section>
  );
}
