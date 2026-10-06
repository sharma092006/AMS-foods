import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { categories } from './ProductsPage';

export default function ProductDetailsPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const pageTitle = searchParams.get('title') || 'Vanilla Beans';
  
  // Find the exact matched category from our central data array
  const matchedCategory = categories.find(cat => cat.title === pageTitle);
  
  // Use matched category properties, with fallbacks
  const imgUrl = matchedCategory?.img || searchParams.get('img') || 'https://images.unsplash.com/photo-1611077544837-1e52dbb065a6?auto=format&fit=crop&w=1920&q=80';
  const desc = matchedCategory?.desc || searchParams.get('desc') || 'Premium vanilla — sourced at origin. In development.';
  const pillValue = searchParams.get('pill') || 'WHOLE';
  const isComingSoon = matchedCategory?.comingSoon !== false;

  const isSpices = pageTitle === 'Spices & Seasonings';

  const spicesProducts = [
    {
      title: 'Garlic Powder',
      desc: 'Pure dehydrated garlic milled into a fine, free-flowing powder. Full aroma, controlled moisture, typical flavour profile.',
      pill: 'POWDER',
      img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Garlic Granules',
      desc: 'Coarsely milled dehydrated garlic granules — maintain texture and flavour in seasonings and industrial mixes.',
      pill: 'GRANULES',
      img: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Ginger Powder',
      desc: 'Warm, pungent dehydrated ginger powder milled for specifications. For seasonings, bakery and beverages.',
      pill: 'POWDER',
      img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'White Onion Powder',
      desc: 'Fine dehydrated white onion powder with a clean, sweet, pungent profile for seasonings, snacks and culinary blends.',
      pill: 'POWDER',
      img: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Pink Onion Powder',
      desc: 'Dehydrated pink onion milled into a fine powder — mild, sweet, sharp profile and natural pink colour for seasonings, snacks and blends.',
      pill: 'POWDER',
      img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Red Onion Powder',
      desc: 'Dehydrated red onion in a fine powder — deep reddish purple hue, sweet profile for seasonings and culinary use.',
      pill: 'POWDER',
      img: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const displayProducts = isSpices ? spicesProducts : [
    {
      title: pageTitle,
      desc: desc,
      pill: pillValue,
      img: imgUrl
    }
  ];

  return (
    <div className="bg-[#0B0C0E] min-h-screen font-sans selection:bg-[#A28251] selection:text-[#F2EEE6] overflow-x-hidden w-full relative">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex flex-col justify-center px-6 md:px-12 pt-[100px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={imgUrl} 
            alt={pageTitle} 
            className="w-full h-full object-cover opacity-50"
          />
          {/* Overlay gradient to blend into dark background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/40 via-[#0B0C0E]/70 to-[#0B0C0E]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto">
          <span className="text-[#A28251] font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">
            PRODUCTS &mdash; {pageTitle.toUpperCase()}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] text-[#F2EEE6] mb-4">
            {pageTitle}.
          </h1>
          <p className="text-[#A0A0A0] text-[14px] lg:text-[15px] font-light max-w-2xl leading-relaxed">
            {desc}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-[#0B0C0E] px-6 md:px-12 pb-20">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Development Notice Block */}
          {isComingSoon && (
            <div className="border border-[#102C1E] bg-[#0A110D] p-6 lg:p-8 mb-20 max-w-4xl">
              <span className="text-[#A28251] font-bold text-[10px] tracking-[0.3em] uppercase mb-3 block">
                IN DEVELOPMENT
              </span>
              <p className="text-[#A0A0A0] text-[13px] lg:text-[14px] font-light leading-relaxed">
                {pageTitle} in development. Partners interested in early supply or private-label programmes in this category can contact us.
              </p>
            </div>
          )}

          {/* Products Section */}
          <div className="mb-20">
            <span className="text-[#A28251] font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block">
              {pageTitle.toUpperCase()}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-serif text-[#F2EEE6] mb-12">
              The products.
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {displayProducts.map((product, idx) => (
                <div 
                  key={idx} 
                  onClick={() => window.location.href = `/product-details?title=${encodeURIComponent(product.title)}&img=${encodeURIComponent(product.img)}&desc=${encodeURIComponent(product.desc)}&pill=${encodeURIComponent(product.pill)}`}
                  className="border border-[#2B2D31] bg-[#0B0C0E] overflow-hidden group flex flex-col h-full cursor-pointer hover:border-[#A28251] transition-colors duration-500"
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {isComingSoon && !isSpices && (
                      <div className="absolute top-4 right-4 z-10 bg-[#0B0C0E]/90 backdrop-blur-md border border-[#2B2D31] px-3 py-1">
                        <span className="text-[#A28251] text-[8px] tracking-[0.25em] font-bold uppercase">
                          COMING SOON
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[#A28251] font-bold text-[8px] tracking-[0.3em] uppercase mb-2 block">
                      DELÍCIAS DA TERRA
                    </span>
                    <h3 className="text-[18px] text-[#F2EEE6] font-bold mb-3">
                      {product.title}
                    </h3>
                    <p className="text-[#A0A0A0] text-[11px] font-light leading-[1.8] mb-6 flex-grow">
                      {product.desc}
                    </p>
                    
                    <div className="inline-block border border-[#2B2D31] px-4 py-1.5 w-max mb-6">
                      <span className="text-[#A0A0A0] text-[8px] font-bold tracking-[0.2em] uppercase">
                        {product.pill}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-[#A28251] text-[12px] leading-none">✦</span>
                      <span className="text-[#A28251] text-[8px] font-bold tracking-[0.2em] uppercase">
                        20G SACHETS AVAILABLE — MORE PACK SIZES COMING SOON
                      </span>
                    </div>

                    <button className="bg-[#A28251] hover:bg-[#B39362] text-[#0B0C0E] transition-colors duration-300 w-full py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
                      REQUEST A QUOTE
                    </button>

                    <button className="text-[#A28251] hover:text-[#B39362] transition-colors duration-300 text-left font-bold text-[8px] tracking-[0.2em] uppercase flex items-center gap-1">
                      ENQUIRE ABOUT SUPPLY <span className="text-[10px]">&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Bottom CTA Area */}
          <div className="flex flex-col items-center text-center py-20 border-t border-[#2B2D31] mt-10">
            <h3 className="text-2xl md:text-3xl font-serif text-[#F2EEE6] max-w-2xl mb-8 leading-snug">
              Specifications, COA and documentation available to partners on request.
            </h3>
            <button className="bg-[#A28251] hover:bg-[#B39362] text-[#0B0C0E] transition-colors duration-300 px-8 py-3.5 flex items-center gap-3 font-bold text-[11px] tracking-[0.2em] uppercase">
              BUSINESS ENQUIRY 
              <span className="text-[14px]">→</span>
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
