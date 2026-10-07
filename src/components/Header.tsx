import React, { useState } from 'react';
import logoImage from '../assets/image/website logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(() => {
    const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
    return match ? match[1] : 'en';
  });

  const changeLanguage = (langCode: string) => {
    if (activeLang === langCode) return;
    setActiveLang(langCode);
    
    // Set the cookie directly for immediate persistence
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
    
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      // Google Translate requires bubbles: true to detect the change event properly
      select.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    } else {
      // Fallback if the Google widget hasn't loaded yet
      window.location.reload();
    }
  };

  const navLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'CAPABILITIES', href: '/capabilities' },
    { name: 'BRANDS', href: '/brands' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'PRIVATE LABEL', href: '#' },
    { name: 'GLOBAL REACH', href: '#' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent w-full">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            <img 
              src={logoImage} 
              alt="AMS Foods Logo" 
              className="h-16 md:h-20 w-auto object-contain shrink-0" 
            />
            {/* Logo Text */}
            <div className="flex flex-col justify-center mt-1">
              <span className="font-serif text-3xl md:text-[34px] tracking-wide text-[#fdfbf7] leading-none mb-1" style={{ fontFamily: 'Times New Roman, serif' }}>
                AMS FOODS
              </span>
              <span className="text-[#ce9e4b] text-[11px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.6em] ml-1 uppercase">
                SU LDA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[#f3ecdb] text-[13px] font-bold tracking-wider hover:text-[#ce9e4b] transition-colors duration-300 py-1 whitespace-nowrap"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#ce9e4b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden xl:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center border border-white/20">
              <button 
                onClick={() => changeLanguage('en')}
                className={`${activeLang === 'en' ? 'bg-[#ce9e4b] text-black' : 'text-[#f3ecdb] hover:bg-white/10'} text-[13px] font-bold px-3 py-1.5 transition-colors`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('pt')}
                className={`${activeLang === 'pt' ? 'bg-[#ce9e4b] text-black' : 'text-[#f3ecdb] hover:bg-white/10'} text-[13px] font-bold px-3 py-1.5 transition-colors`}
              >
                PT
              </button>
            </div>

            {/* CTA Button */}
            <button className="bg-[#ce9e4b] hover:bg-[#dcb05f] text-black text-[13px] font-bold tracking-wider px-6 py-3.5 transition-all duration-300 shadow-[0_0_15px_rgba(206,158,75,0.2)] hover:shadow-[0_0_20px_rgba(206,158,75,0.4)] whitespace-nowrap">
              BUSINESS ENQUIRY
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-[#f3ecdb] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`xl:hidden absolute top-[90px] left-0 w-full bg-[#1a1a1a] border-t border-white/10 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 max-h-screen visible' : 'opacity-0 max-h-0 invisible'
        } overflow-hidden shadow-2xl`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#f3ecdb] text-sm font-bold tracking-wider py-4 border-b border-white/5 hover:text-[#ce9e4b] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 pb-4">
            <div className="flex items-center border border-white/20 w-full sm:w-auto">
              <button 
                onClick={() => changeLanguage('en')}
                className={`${activeLang === 'en' ? 'bg-[#ce9e4b] text-black' : 'text-[#f3ecdb] hover:bg-white/10'} text-sm font-bold px-6 py-3 w-1/2 sm:w-auto transition-colors`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('pt')}
                className={`${activeLang === 'pt' ? 'bg-[#ce9e4b] text-black' : 'text-[#f3ecdb] hover:bg-white/10'} text-sm font-bold px-6 py-3 w-1/2 sm:w-auto transition-colors`}
              >
                PT
              </button>
            </div>
            
            <button className="bg-[#ce9e4b] hover:bg-[#dcb05f] text-black text-sm font-bold tracking-wider px-6 py-4 w-full sm:w-auto text-center">
              BUSINESS ENQUIRY
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
