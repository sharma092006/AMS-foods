import React from 'react';

const steps = [
  { id: '01', title: 'Your requirement', desc: 'Tell us what you need.' },
  { id: '02', title: 'Sourcing', desc: 'We identify suitable origins and suppliers.' },
  { id: '03', title: 'Sample & specification', desc: 'Product samples and specifications are aligned.' },
  { id: '04', title: 'Commercial offer', desc: 'Pricing, packaging, MOQ and trade terms are agreed.' },
  { id: '05', title: 'Quality & documentation', desc: 'Required testing and documentation are coordinated.' },
  { id: '06', title: 'Production', desc: 'The approved product is produced and prepared.' },
  { id: '07', title: 'Export', desc: 'Shipping and export requirements are coordinated.' },
  { id: '08', title: 'Delivery', desc: 'Product reaches the destination market.' }
];

export default function HowWeWork() {
  return (
    <section className="bg-[#0B0C0E] w-full py-20 lg:py-32 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1440px] w-full">

        {/* Header */}
        <div className="mb-10 lg:mb-15">
          <span className="text-[#B89C63] font-bold text-[11px] tracking-[0.3em] uppercase mb-5 block">
            04 <span className="mx-3 font-light">/</span> How we work
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight">
            <span className="block text-white mb-1">From requirement.</span>
            <span className="block text-[#B89C63] italic">To delivery.</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 lg:gap-x-32">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group flex items-start border-b border-[#2A2B2E] py-4 lg:py-10 cursor-pointer"
            >
              <span className="text-[#B89C63] font-bold text-[13px] tracking-widest w-16 lg:w-24 pt-1.5 shrink-0">
                {step.id}
              </span>
              <div className="flex-1 pr-4 lg:pr-10">
                <h3 className="text-white text-2xl lg:text-[28px] font-serif mb-3 transition-colors duration-300 font-['Times_New_Roman',serif] group-hover:text-[#B89C63]">
                  {step.title}
                </h3>
                <p className="text-[#888888] text-sm lg:text-[15px] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
