import React from 'react';
import whoWeAreImg from '../assets/image/who-we-are.png';

const WhoWeAre: React.FC = () => (
  <section className="bg-[#F2EEE6] w-full py-20 lg:py-28 px-6 md:px-12 lg:px-20 flex justify-center overflow-hidden">
    <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
      <div className="w-full lg:w-[45%] flex flex-col z-10 pt-4">
        <span className="text-[#A28251] font-bold text-[11px] tracking-[0.35em] uppercase mb-8">
          02 <span className="mx-3 font-light">/</span> Who we are
        </span>

        <h2 className="text-5xl md:text-6xl lg:text-[76px] font-serif leading-[1.05] mb-10 font-['Times_New_Roman',serif] tracking-tight break-words">
          <span className="block text-[#1C1B19] mb-1">Building brands.</span>
          <span className="block text-[#A28251] italic">Connecting markets.</span>
        </h2>

        <p className="text-[#4A4947] text-base lg:text-[16px] leading-[1.8] font-medium mb-6 pr-4 lg:pr-10">
          AMS FOODS is a Mozambique-based international sourcing, trading and
          distribution company connecting trusted manufacturers, quality products
          and growing markets across Africa and beyond.
        </p>

        <p className="text-[#646360] text-sm lg:text-[15px] leading-[1.8] mb-6 pr-4 lg:pr-10 font-light">
          From sourcing and product development to private label, export coordination and
          market distribution, we help businesses move from origin to market.
        </p>

        <a
          href="#discover"
          className="group inline-flex items-center text-[#9A7D4C] text-[11px] font-bold tracking-[0.25em] uppercase border-b-[1px] border-[#9A7D4C]/40 pb-1.5 w-max hover:text-[#7A633C] hover:border-[#7A633C] transition-all"
        >
          Discover AMS Foods
          <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
      </div>

      <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[700px]">
          <img
            src={whoWeAreImg}
            alt="AMS Foods Products"
            className="w-full h-[500px] object-cover relative z-0 shadow-2xl"
          />
          <div className="absolute top-[28%] left-[20%] w-[85%] h-[82%] border border-[#A28251]/50 z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
