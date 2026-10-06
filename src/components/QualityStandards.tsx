import React from 'react';

const ShieldCheckIcon = ({ className, size, strokeWidth }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const FileTextIcon = ({ className, size, strokeWidth }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" x2="8" y1="13" y2="13"/>
    <line x1="16" x2="8" y1="17" y2="17"/>
    <line x1="10" x2="8" y1="9" y2="9"/>
  </svg>
);

const LeafIcon = ({ className, size, strokeWidth }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 22 12 12"/>
  </svg>
);

const ScaleIcon = ({ className, size, strokeWidth }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="M7 21h10"/>
    <path d="M12 3v18"/>
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
);

export default function QualityStandards() {
  const columns = [
    {
      icon: ShieldCheckIcon,
      title: 'Supplier Verification',
      description: 'Every partner vetted before onboarding.'
    },
    {
      icon: FileTextIcon,
      title: 'Specifications &\nDocumentation',
      description: 'Written specs and correct paperwork, every time.'
    },
    {
      icon: LeafIcon,
      title: 'Food Safety & Traceability\nCoordination',
      description: 'Standards applied and traced across the chain.'
    },
    {
      icon: ScaleIcon,
      title: 'Regulatory Compliance Support',
      description: 'Requirements met in every destination market.'
    }
  ];

  const workflowSteps = [
    'Supplier Qualification',
    'Product Specification',
    'Sample Approval',
    'Testing / Verification',
    'Batch Documentation',
    'Pre-Shipment Review',
    'Traceability'
  ];

  return (
    <section className="w-full py-20 lg:py-28 px-6 md:px-12 flex justify-center bg-[#F4F1EB]">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        
        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col items-center">
          <span className="text-[#A28251] font-bold text-[9px] lg:text-[10px] tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
            14 <span className="font-light">/</span> QUALITY <span className="opacity-50">•</span> TRACEABILITY <span className="opacity-50">•</span> DOCUMENTATION <span className="opacity-50">•</span> COMPLIANCE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-serif leading-[1.1] font-['Times_New_Roman',serif] tracking-tight">
            <span className="text-[#1A1D1A]">Standards </span>
            <span className="text-[#A28251] italic">before scale.</span>
          </h2>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full mb-20 lg:mb-28">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-14 h-14 lg:w-16 lg:h-16 border-[1px] border-[#A28251]/40 group-hover:border-[#A28251] group-hover:bg-[#A28251] transition-all duration-500 ease-out rotate-45 flex items-center justify-center mb-8 lg:mb-10 relative group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(162,130,81,0.2)]">
                <div className="absolute inset-0 bg-[#A28251]/5 group-hover:opacity-0 transition-opacity duration-500" />
                <col.icon className="-rotate-45 text-[#A28251] group-hover:text-[#F4F1EB] transition-colors duration-500 ease-out relative z-10" size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-[#1A1D1A] font-semibold text-[15px] lg:text-[16px] mb-3 whitespace-pre-line leading-snug transition-colors duration-500 group-hover:text-[#A28251]">
                {col.title}
              </h3>
              <p className="text-[#6B6B6B] text-[13px] font-light leading-relaxed max-w-[220px]">
                {col.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dark Box Workflow */}
        <div className="w-full max-w-[500px] bg-[#111312] rounded-sm p-10 lg:p-14 flex flex-col items-center shadow-2xl relative mb-12">
          {/* Subtle dotted grid background for the dark box */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15]" />
          
          <h4 className="text-[#A28251] text-[10px] font-bold tracking-[0.3em] uppercase mb-10 relative z-10">
            QUALITY WORKFLOW
          </h4>

          <div className="flex flex-col items-center w-full relative z-10">
            {workflowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center w-full pl-8 lg:pl-12">
                  <span className="text-[#A28251] text-[11px] font-mono mr-6 opacity-80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#F2EEE6] font-serif text-[17px] tracking-wide">
                    {step}
                  </span>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="py-3 flex justify-center w-full">
                    <span className="text-[#A28251]/60 text-[10px]">↓</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <a href="#" className="text-[#A28251] text-[10px] font-bold tracking-[0.2em] uppercase border-b border-[#A28251]/30 pb-2 hover:border-[#A28251] transition-colors mt-6">
          QUALITY & COMPLIANCE <span className="ml-1">↗</span>
        </a>

      </div>
    </section>
  );
}
