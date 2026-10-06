import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/image/producet banner.png';

import heroFarmland from '../assets/image/hero-farmland.png';
import foodWebp from '../assets/image/food.webp';
import whoWeAre from '../assets/image/who-we-are.png';
import pexelsCity from '../assets/image/pexels-photo-30188147.avif';
import mapImg from '../assets/image/map.png';

// Premium High-Quality Images (Dark Moody Aesthetic)
const dehydratedVegetablesImg = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80';
const rawIngredientsImg = 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80';
const consumerPeanutButterImg = 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=800&q=80';

export const categories = [
    {
      title: 'Spices & Seasonings',
      desc: 'Premium dehydrated spices and seasonings milled to specification — powders and granules with full aroma and...',
      img: foodWebp,
      comingSoon: false,
    },
    {
      title: 'Dehydrated Vegetables',
      desc: 'Carefully dehydrated vegetable products — flakes and cuts preserving natural character for industrial and food service...',
      img: dehydratedVegetablesImg,
      comingSoon: false,
    },
    {
      title: 'Food Powders',
      desc: 'Cocoa powder and more in development.',
      img: whoWeAre,
      comingSoon: true,
    },
    {
      title: 'Fruit Products',
      desc: 'Vanilla in development.',
      img: bannerImage, // reuse the banner imported above
      comingSoon: true,
    },
    {
      title: 'Ingredients',
      desc: 'In development.',
      img: rawIngredientsImg,
      comingSoon: true,
    },
    {
      title: 'Consumer Products',
      desc: 'Peanut and nut butters in development.',
      img: consumerPeanutButterImg,
      comingSoon: true,
    }
  ];

export default function ProductsPage() {
  return (
    <div className="bg-[#0B0C0E] min-h-screen font-sans selection:bg-[#A28251] selection:text-[#F2EEE6]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[450px] flex flex-col justify-center px-6 md:px-12 pt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bannerImage} 
            alt="Products Banner" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient to blend into dark background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/40 via-[#0B0C0E]/70 to-[#0B0C0E]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto">
          <span className="text-[#A28251] font-bold text-[10px] tracking-[0.3em] uppercase mb-6 block">
            Product Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] text-[#F2EEE6] mb-6">
            A portfolio built for <br className="hidden md:block" />
            <span className="text-[#A28251] italic">evolving markets.</span>
          </h1>
          <p className="text-[#A0A0A0] text-[14px] lg:text-[15px] font-light max-w-2xl leading-relaxed">
            From food ingredients and dehydrated products to retail-ready consumer goods, our portfolio is designed to evolve with market opportunities.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-[#0B0C0E] py-12 lg:py-16 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="mb-8">
            <span className="text-[#A28251] font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">
              Categories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif text-[#F2EEE6]">
              Browse the portfolio.
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((cat, index) => (
              <div 
                key={index} 
                onClick={() => window.location.href = `/product-details?img=${encodeURIComponent(cat.img)}&title=${encodeURIComponent(cat.title)}`}
                className="relative group overflow-hidden border border-[#2B2D31] hover:border-[#A28251] transition-colors duration-500 h-[300px] lg:h-[340px] cursor-pointer"
              >
                {/* Card Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Card Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-[#0B0C0E]/50 to-transparent z-10" />

                {/* Coming Soon Badge */}
                {cat.comingSoon && (
                  <div className="absolute top-5 right-5 z-20 bg-[#0B0C0E]/90 backdrop-blur-md border border-[#2B2D31] px-4 py-2 shadow-lg">
                    <span className="text-[#A28251] text-[8px] tracking-[0.25em] font-bold uppercase">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end">
                  <h3 className="text-[22px] lg:text-[26px] text-[#F2EEE6] font-serif mb-3 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-[13px] font-light leading-relaxed mb-6 line-clamp-2">
                    {cat.desc}
                  </p>
                  <span className="text-[#A28251] text-[9px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 group-hover:text-[#F2EEE6] transition-colors duration-300">
                    Explore Category <span className="text-[12px] opacity-80 leading-none">↗</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Request Block */}
          <div className="border border-[#2B2D31] bg-[#0B0C0E]/50 flex flex-col md:flex-row items-center justify-between p-6 lg:p-8 gap-6">
            <p className="text-[13px] lg:text-[14px] text-[#A0A0A0] font-light leading-relaxed max-w-2xl">
              <strong className="text-[#F2EEE6] font-medium block sm:inline sm:mr-1">Looking for something specific?</strong>
              Our portfolio extends beyond the website — tell us what you need and our sourcing team will find it at origin.
            </p>
            <button className="border border-[#2B2D31] hover:border-[#A28251] hover:bg-[#A28251]/10 transition-colors duration-300 px-8 py-4 flex-shrink-0">
              <span className="text-[#A28251] text-[10px] font-bold tracking-[0.25em] uppercase">
                Request a Product
              </span>
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
