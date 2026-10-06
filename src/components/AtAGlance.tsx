import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 2000;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={ref}>
      {count < 10 ? `0${count}` : count}{suffix}
    </span>
  );
};

export default function AtAGlance() {
  return (
    <section className="bg-[#0B0C0E] w-full py-10 lg:py-14 px-6 md:px-12 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center">
        
        {/* Header */}
        <span className="text-[#A28251] font-bold text-[11px] tracking-[0.3em] uppercase mb-8 lg:mb-10 block text-center">
          AMS Foods At A Glance
        </span>

        {/* Top Stats Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-8 lg:gap-y-0 text-center mb-8 lg:mb-10">
          <div className="flex flex-col items-center">
            <h3 className="text-[#F2EEE6] text-4xl lg:text-[52px] font-serif font-['Times_New_Roman',serif] mb-2 lg:mb-2">
              <CountUp end={1} />
            </h3>
            <p className="text-[#A28251] text-[9px] font-bold tracking-[0.25em] uppercase">
              International Sourcing
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-[#F2EEE6] text-4xl lg:text-[52px] font-serif font-['Times_New_Roman',serif] mb-2 lg:mb-2">
              <CountUp end={4} suffix="+" />
            </h3>
            <p className="text-[#A28251] text-[9px] font-bold tracking-[0.25em] uppercase">
              Market Capabilities
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-[#F2EEE6] text-4xl lg:text-[52px] font-serif font-['Times_New_Roman',serif] mb-2 lg:mb-2">
              <CountUp end={9} suffix="+" />
            </h3>
            <p className="text-[#A28251] text-[9px] font-bold tracking-[0.25em] uppercase">
              Core Food Products
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-[#F2EEE6] text-4xl lg:text-[52px] font-serif font-['Times_New_Roman',serif] mb-2 lg:mb-2">
              <CountUp end={3} />
            </h3>
            <p className="text-[#A28251] text-[9px] font-bold tracking-[0.25em] uppercase">
              Business Models
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-[#2A2B2E] mb-6 lg:mb-8"></div>

        {/* Bottom Details Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-6 lg:gap-y-0 text-center md:text-left px-4 lg:px-12">
          <div>
            <h4 className="text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 lg:mb-1.5">
              Source
            </h4>
            <p className="text-[#888888] text-[12px] font-light">
              India • Africa • Global
            </p>
          </div>
          
          <div className="md:flex md:justify-center">
            <div className="text-center md:text-left">
              <h4 className="text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 lg:mb-1.5">
                Market
              </h4>
              <p className="text-[#888888] text-[12px] font-light">
                Mozambique • Southern Africa
              </p>
            </div>
          </div>
          
          <div className="md:flex md:justify-end">
            <div className="text-center md:text-left">
              <h4 className="text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 lg:mb-1.5">
                Products
              </h4>
              <p className="text-[#888888] text-[12px] font-light">
                Ingredients • Consumer Goods • Private Label
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
