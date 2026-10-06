import React from 'react';
import foodImg from '../assets/image/food.webp';

const brands = [
  { id: '01', title: 'ALHO EM PÓ', img: foodImg },
  { id: '02', title: 'GENGIBRE EM PÓ', img: foodImg },
  { id: '03', title: 'CEBOLA ROSA EM PÓ', img: foodImg }
];

export default function OurBrands() {
  return (
    <section className="bg-[#EBE6D9] w-full py-16 lg:py-24 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col">
        
        {/* Top Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start mb-16 lg:mb-20">
          
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col mb-12 lg:mb-0">
            <span className="text-[#A28251] font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
              08 <span className="mx-3 font-light">/</span> Our Brands
            </span>
            <p className="text-[#646360] text-[13px] font-light max-w-sm leading-relaxed mb-16 lg:mb-24">
              Brands developed by AMS FOODS — Essence of the Earth for growing consumer markets.
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-4">
              <span className="text-[#1C1B19]">Delícias </span>
              <span className="text-[#A28251] italic">da Terra</span>
            </h2>
            <span className="text-[#A28251] font-bold text-[10px] tracking-[0.4em] uppercase">
              Essence of the Earth
            </span>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-5/12 flex flex-col justify-end lg:pt-32">
            <h4 className="text-[#1C1B19] text-[15px] lg:text-[16px] font-medium leading-relaxed mb-5">
              Premium dehydrated ingredients and convenient cooking products.
            </h4>
            <p className="text-[#1C1B19] text-xl lg:text-2xl font-serif font-['Times_New_Roman',serif] italic mb-5">
              Authentic ingredients. Modern convenience.
            </p>
            <p className="text-[#646360] text-[13px] font-light leading-relaxed">
              Premium dehydrated garlic, ginger and onion — milled and cut with care, packed for modern retail and a growing family of products.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {brands.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full bg-[#0B0C0E] p-6 lg:p-8 mb-6 overflow-hidden flex items-center justify-center">
                <div className="w-full overflow-hidden">
                  <img 
                    src={brand.img} 
                    alt={brand.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />
                </div>
              </div>
              <h3 className="text-[#1C1B19] text-[17px] lg:text-[19px] font-serif font-['Times_New_Roman',serif] uppercase tracking-wider">
                {brand.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-[#CCAA55] hover:bg-[#B8994C] text-[#1C1B19] text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-colors flex items-center justify-center gap-2">
            Explore the range <span className="text-sm leading-none">↗</span>
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-[#DCD5C5] hover:border-[#A28251] text-[#1C1B19] text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 transition-colors">
            Retail & Distribution Enquiries
          </button>
        </div>
        
      </div>
    </section>
  );
}
