import React from 'react';

const items = ['SOURCING', 'DEVELOPMENT', 'TRADE', 'DISTRIBUTION', 'BRANDS', 'PRIVATE LABEL'];

const Today = () => (
  <section className="bg-[#F2EEE6] w-full py-12 lg:py-16 px-6 md:px-12 flex justify-center">
    <div className="max-w-[1440px] w-full flex flex-col items-start">
      
      {/* Label */}
      <span className="text-[#A28251] font-bold text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6 lg:mb-8 block">
        07 <span className="mx-3 font-light">/</span> AMS FOODS TODAY
      </span>
      
      {/* Words */}
      <div className="flex flex-wrap items-center gap-x-4 lg:gap-x-6 gap-y-2 lg:gap-y-4 max-w-[1300px]">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="text-[#1C1B19] font-serif text-3xl md:text-4xl lg:text-[44px] leading-tight font-['Times_New_Roman',serif] tracking-wide">
              {item}
            </span>
            {idx < items.length - 1 && (
              <span className="text-[#A28251] text-lg lg:text-2xl mx-1 lg:mx-2">
                ♦
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 lg:mt-10">
        <button className="bg-[#C5A66D] hover:bg-[#1C1B19] hover:text-[#F2EEE6] text-[#1C1B19] font-bold text-[11px] md:text-[12px] tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-300 flex items-center gap-3">
          START A BUSINESS ENQUIRY
          <span className="text-lg leading-none mb-0.5">→</span>
        </button>
      </div>

    </div>
  </section>
);

export default Today;
