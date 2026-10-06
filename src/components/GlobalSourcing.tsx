import React from 'react';
import mapImage from '../assets/image/map.png';

export default function GlobalSourcing() {
  return (
    <section className="w-full py-16 lg:py-24 px-6 md:px-12 flex justify-center bg-[#0B0C0E] relative overflow-hidden">
      <div className="max-w-[1440px] w-full flex flex-col relative z-10">
        
        {/* Header Area */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-12">
          
          <div className="flex flex-col mb-8 lg:mb-0">
            <span className="text-[#A28251] font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">
              11 <span className="mx-3 font-light">/</span> Global Sourcing & Markets
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight mb-4 lg:mb-5">
              <span className="block text-[#F2EEE6] mb-1">Sourcing at origin.</span>
              <span className="block text-[#A28251] italic">Building for markets.</span>
            </h2>
            <p className="text-[#A0A0A0] text-[13px] font-light max-w-sm">
              Our sourcing relationships and market focus, as they stand today.
            </p>
          </div>
          
          <div className="flex items-center">
            <a href="#" className="text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase border-b border-[#A28251]/40 pb-1 hover:border-[#A28251] transition-colors flex items-center gap-2">
              Explore Global Reach <span className="text-[12px] leading-none">↗</span>
            </a>
          </div>
          
        </div>
        
        {/* Map Box */}
        <div className="w-full border border-[#2B2D31] bg-[#12161E] rounded-sm flex flex-col relative overflow-hidden shadow-2xl">
          
          {/* Map Area */}
          <div className="w-full relative bg-[#12161E] flex items-center justify-center overflow-hidden">
            
            {/* World Map Background Image */}
            <img 
              src={mapImage}
              alt="World Map"
              className="w-full h-auto object-cover opacity-60 mix-blend-screen"
            />

            {/* SVG Layer */}
            <svg 
              className="absolute inset-0 w-full h-full drop-shadow-lg z-10" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="none"
            >
              {/* Definition for animated dashed line */}
              <style>
                {`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: -20;
                    }
                  }
                  .anim-line {
                    stroke-dasharray: 4 6;
                    animation: dash 1.5s linear infinite;
                  }
                  .pulse {
                    animation: pulse 2s infinite;
                  }
                  @keyframes pulse {
                    0% { transform: scale(0.95); opacity: 0.8; }
                    50% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(0.95); opacity: 0.8; }
                  }
                `}
              </style>

              {/* Path from Ghana to Mozambique */}
              <path 
                d="M 475 560 Q 520 740 560 740" 
                fill="none" 
                stroke="#A28251" 
                strokeWidth="2" 
                className="anim-line opacity-60"
              />

              {/* Path from India to Mozambique */}
              <path 
                d="M 715 480 Q 600 740 560 740" 
                fill="none" 
                stroke="#A28251" 
                strokeWidth="2" 
                className="anim-line opacity-60"
              />
              
              {/* Path from Madagascar to Mozambique */}
              <path 
                d="M 595 745 Q 580 755 560 740" 
                fill="none" 
                stroke="#A28251" 
                strokeWidth="2" 
                className="anim-line opacity-60"
              />

              {/* Nodes and Glows */}
              
              {/* Mozambique (Center/Headquarters) */}
              <circle cx="560" cy="740" r="16" fill="#5C9471" opacity="0.2" className="pulse" style={{ transformOrigin: '560px 740px' }} />
              <circle cx="560" cy="740" r="5" fill="#5C9471" />
              <text x="560" y="785" fill="#F2EEE6" fontSize="14" fontWeight="600" letterSpacing="0.1em" textAnchor="middle" className="uppercase font-sans">
                Mozambique
              </text>

              {/* India */}
              <circle cx="715" cy="480" r="12" fill="#D2A554" opacity="0.2" className="pulse" style={{ transformOrigin: '715px 480px', animationDelay: '0.3s' }} />
              <circle cx="715" cy="480" r="4" fill="#D2A554" />
              <text x="715" y="455" fill="#F2EEE6" fontSize="14" fontWeight="600" letterSpacing="0.1em" textAnchor="middle" className="uppercase font-sans">
                India
              </text>

              {/* Ghana */}
              <circle cx="475" cy="560" r="12" fill="#D2A554" opacity="0.2" className="pulse" style={{ transformOrigin: '475px 560px', animationDelay: '0.6s' }} />
              <circle cx="475" cy="560" r="4" fill="#D2A554" />
              <text x="475" y="535" fill="#F2EEE6" fontSize="14" fontWeight="600" letterSpacing="0.1em" textAnchor="middle" className="uppercase font-sans">
                Ghana
              </text>

              {/* Madagascar */}
              <circle cx="595" cy="745" r="12" fill="#D2A554" opacity="0.2" className="pulse" style={{ transformOrigin: '595px 745px', animationDelay: '0.9s' }} />
              <circle cx="595" cy="745" r="4" fill="#D2A554" />
              <text x="595" y="720" fill="#F2EEE6" fontSize="14" fontWeight="600" letterSpacing="0.1em" textAnchor="middle" className="uppercase font-sans">
                Madagascar
              </text>
              
            </svg>
          </div>

          {/* Bottom Footer inside Map Box */}
          <div className="w-full border-t border-[#2B2D31] bg-[#0F1218] flex flex-col md:flex-row">
            
            {/* Col 1 */}
            <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#2B2D31] flex flex-col justify-center">
              <div className="border-l-2 border-[#D2A554] pl-4">
                <span className="text-[#A28251] font-bold text-[9px] tracking-[0.2em] uppercase mb-2 block">
                  Sourcing Origins
                </span>
                <span className="text-[#F2EEE6] text-[13px] font-medium tracking-wide">
                  India • Ghana • Madagascar
                </span>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#2B2D31] flex flex-col justify-center">
              <div className="border-l-2 border-[#5C9471] pl-4">
                <span className="text-[#5C9471] font-bold text-[9px] tracking-[0.2em] uppercase mb-2 block">
                  Headquarters
                </span>
                <span className="text-[#F2EEE6] text-[13px] font-medium tracking-wide">
                  Mozambique
                </span>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="border-l-2 border-[#5C9471] pl-4">
                <span className="text-[#5C9471] font-bold text-[9px] tracking-[0.2em] uppercase mb-2 block">
                  Developing Markets
                </span>
                <span className="text-[#F2EEE6] text-[13px] font-medium tracking-wide">
                  Selected African markets
                </span>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
