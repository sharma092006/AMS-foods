import React from 'react';
import logo from '../assets/image/website logo.png';

const MailIcon = ({ className, size }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = ({ className, size }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = ({ className, size }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const WhatsappIcon = ({ className, size }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0C0E] relative overflow-hidden text-[#A2B8AA]">
      
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 pt-20 lg:pt-28 pb-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand Info (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="AMS Foods" className="h-14 w-auto object-contain brightness-110" />
              <div className="flex flex-col">
                <span className="text-[#F2EEE6] font-serif text-[24px] tracking-widest uppercase leading-none mb-2">AMS FOODS</span>
                <span className="text-[#A28251] text-[10px] tracking-[0.4em] uppercase font-bold">SU LDA</span>
              </div>
            </div>
            
            <h3 className="text-3xl lg:text-[34px] font-serif leading-[1.2] tracking-tight mb-5">
              <span className="text-[#F2EEE6]">From origin. </span>
              <span className="text-[#A28251] italic">To market.</span>
            </h3>
            
            <p className="text-[#8B9E90] text-[14px] font-light leading-relaxed max-w-[340px]">
              International sourcing, trading and distribution — connecting supply with growing markets.
            </p>
          </div>

          {/* Column 2: Company Links (Spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[#A28251] text-[10px] font-bold tracking-[0.25em] uppercase mb-8">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About', 'Capabilities', 'Brands', 'Products', 'Quality & Compliance', 'News & Insights'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#C1C1C1] hover:text-[#D2A554] text-[13px] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Partners Links (Spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[#A28251] text-[10px] font-bold tracking-[0.25em] uppercase mb-8">Partners</h4>
            <ul className="flex flex-col gap-4">
              {['Become a Supplier', 'Become a Distributor', 'Private Label', 'Retail Partners'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#C1C1C1] hover:text-[#D2A554] text-[13px] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (Spans 3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[#A28251] text-[10px] font-bold tracking-[0.25em] uppercase mb-8">Contact</h4>
            
            {/* General */}
            <div className="mb-6">
              <span className="text-[#5B635E] text-[9px] font-bold tracking-[0.2em] uppercase mb-3 block">General</span>
              <div className="flex items-center gap-3 text-[#C1C1C1] hover:text-[#D2A554] transition-colors duration-300 cursor-pointer">
                <MailIcon size={14} className="text-[#A28251]" />
                <span className="text-[13px]">info@amsfoodsslda.com</span>
              </div>
            </div>

            {/* Sales & Quotes */}
            <div>
              <span className="text-[#5B635E] text-[9px] font-bold tracking-[0.2em] uppercase mb-3 block">Sales & Quotes</span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[#C1C1C1] hover:text-[#D2A554] transition-colors duration-300 cursor-pointer">
                  <MailIcon size={14} className="text-[#A28251]" />
                  <span className="text-[13px]">sales@amsfoodsslda.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#C1C1C1] hover:text-[#D2A554] transition-colors duration-300 cursor-pointer">
                  <PhoneIcon size={14} className="text-[#A28251]" />
                  <span className="text-[13px]">+258 84 443 1043</span>
                </div>
                <div className="flex items-center gap-3 text-[#C1C1C1] hover:text-[#D2A554] transition-colors duration-300 cursor-pointer">
                  <WhatsappIcon size={14} className="text-[#A28251]" />
                  <span className="text-[13px]">+258 86 423 5555 <span className="text-[9px] ml-1 opacity-70">↗</span></span>
                </div>
                <div className="flex items-center gap-3 text-[#C1C1C1] mt-1">
                  <MapPinIcon size={14} className="text-[#A28251]" />
                  <span className="text-[13px]">Maputo, Mozambique</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#232529] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#7A807C] text-[10px] font-bold tracking-[0.2em] uppercase">
            © 2026 AMS FOODS SU LDA
          </span>
          <span className="text-[#7A807C] text-[10px] font-bold tracking-[0.2em] uppercase text-center md:text-right">
            DELÍCIAS DA TERRA — A BRAND OF AMS FOODS
          </span>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 rounded-full bg-[#1A3824] border border-[#234230] hover:bg-[#20442D] hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 shadow-lg group"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsappIcon size={22} className="text-[#D2A554] group-hover:text-white transition-colors" />
      </a>

    </footer>
  );
}
