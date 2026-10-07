import React from 'react';
import amitaPortrait from '../assets/image/amita-portrait.jpg';

export default function Experience() {
  return (
    <section className="bg-[#0B0C0E] w-full py-12 lg:py-16 px-6 md:px-12 flex justify-center border-t border-[#1C1D20]">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
        
        {/* Left Column - Image */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <img 
            src={amitaPortrait} 
            alt="Amita Motichande Cantilal" 
            className="w-full h-[400px] lg:h-[560px] object-cover object-top shadow-2xl" 
          />
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-[#F2EEE6] font-serif text-[18px] lg:text-[20px] font-bold">
              Amita Motichande Cantilal
            </span>
            <span className="text-[#A28251] font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
              MANAGING DIRECTOR
            </span>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="w-full lg:w-[55%] h-[450px] lg:h-[600px] overflow-y-auto custom-scrollbar pr-4 md:pr-8">
          
          <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-4 block">
            02 <span className="mx-3 font-light">/</span> THE EXPERIENCE BEHIND THE BUSINESS
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] mb-6 lg:mb-8 font-['Times_New_Roman',serif] tracking-tight pr-4">
            <span className="text-[#F2EEE6]">A career built around </span>
            <span className="text-[#A28251] italic">the complete product journey.</span>
          </h2>

          <div className="flex flex-col gap-4 text-[#D1CFC7] font-light text-[14px] lg:text-[15px] leading-[1.8]">
            <p>
              Before AMS FOODS, Amita's experience was shaped by the commercial realities behind successful consumer products — product management, category strategy, retail, wholesale and distribution.
            </p>
            <p>
              This gave her a rare perspective of the market from multiple sides: how products are developed, how categories behave, how retailers make decisions, how distribution creates reach, and how consumers ultimately decide what earns a place in their daily lives.
            </p>
            <p>
              Over time, her focus became increasingly clear. The strongest businesses are not built by looking at one part of the supply chain in isolation. They are built by understanding how every part connects.
            </p>
          </div>

          {/* Golden Steps */}
          <hr className="border-[#1C1D20] my-6 lg:my-8" />
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[#F2EEE6] font-serif text-[17px] lg:text-[19px] tracking-wide">
            <span>From farm.</span> <span className="text-[#A28251] text-xs">■</span>
            <span>To processing.</span> <span className="text-[#A28251] text-xs">■</span>
            <span>To product development.</span> <span className="text-[#A28251] text-xs">■</span>
            <span>To packaging.</span> <span className="text-[#A28251] text-xs">■</span>
            <span>To trade.</span> <span className="text-[#A28251] text-xs">■</span>
            <span>To distribution.</span> <span className="text-[#A28251] text-xs">■</span>
            <span>To retail.</span> <span className="text-[#A28251] text-xs">■</span>
            <span>To the consumer's table.</span>
          </div>
          <hr className="border-[#1C1D20] my-6 lg:my-8" />

          <div className="flex flex-col gap-4 text-[#D1CFC7] font-light text-[14px] lg:text-[15px] leading-[1.8]">
            <p>
              AMS FOODS was created from that philosophy. The company brings together sourcing, product development, international trade, distribution and brand building to create a more connected path from origin to market.
            </p>
            <p>
              At the heart of this approach is a belief that quality should never be separated from convenience. Consumers are living increasingly busy lives. They need products that save time, simplify everyday cooking and fit naturally into modern lifestyles — while still respecting the importance of quality, authenticity and responsible food choices.
            </p>
          </div>

          {/* Green Box */}
          <div className="bg-[#0B1E13] border border-[#1A3824] p-6 lg:p-8 mt-8 mb-6">
            <p className="text-[#A2B8AA] text-[13px] lg:text-[14px] mb-6 font-light">
              That is the standard Amita wants AMS FOODS to pursue:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6">
              <div className="flex items-start gap-4">
                <span className="text-[#A28251] text-[8px] mt-1.5">■</span>
                <span className="text-[#F2EEE6] font-serif text-[18px] lg:text-[20px] leading-tight">Better products.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#A28251] text-[8px] mt-1.5">■</span>
                <span className="text-[#F2EEE6] font-serif text-[18px] lg:text-[20px] leading-tight">Smarter sourcing.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#A28251] text-[8px] mt-1.5">■</span>
                <span className="text-[#F2EEE6] font-serif text-[18px] lg:text-[20px] leading-tight">Stronger connections.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#A28251] text-[8px] mt-1.5">■</span>
                <span className="text-[#F2EEE6] font-serif text-[18px] lg:text-[20px] leading-tight">Greater value for the consumer.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
