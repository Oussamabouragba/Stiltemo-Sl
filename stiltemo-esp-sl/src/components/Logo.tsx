import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal' | 'large';
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  dark?: boolean; // if true, rendered on dark background
}

export default function Logo({
  variant = 'horizontal',
  className = '',
  iconClassName = '',
  textClassName = '',
  dark = true,
}: LogoProps) {
  // Brand colors
  const primaryColor = dark ? '#ffffff' : '#0b132b';
  const subtextColor = dark ? '#a5b4fc' : '#3b82f6';

  // SVG Mark component
  const SymbolMark = (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={iconClassName || 'w-full h-full'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left solid angled perspective panel */}
      <polygon points="22,17 47,11 47,89 22,83" fill="currentColor" />

      {/* Right perspective receding vertical bars / slats */}
      {/* Bar 1 */}
      <polygon points="49,16 51.5,16.5 51.5,83.5 49,84" fill="currentColor" />
      {/* Bar 2 */}
      <polygon points="53,17.5 55.5,18 55.5,82 53,82.5" fill="currentColor" />
      {/* Bar 3 */}
      <polygon points="57,19 59.5,19.5 59.5,80.5 57,81" fill="currentColor" />
      {/* Bar 4 */}
      <polygon points="61,20.5 63.5,21 63.5,79 61,79.5" fill="currentColor" />
      {/* Bar 5 */}
      <polygon points="65,22 67.5,22.5 67.5,77.5 65,78" fill="currentColor" />
      {/* Bar 6 */}
      <polygon points="69,23.5 71.5,24 71.5,76 69,76.5" fill="currentColor" />
      {/* Bar 7 */}
      <polygon points="73,25 75.5,25.5 75.5,74.5 73,75" fill="currentColor" />
      {/* Bar 8 */}
      <polygon points="77,26.5 79.5,27 79.5,73 77,73.5" fill="currentColor" />
      {/* Bar 9 */}
      <polygon points="81,28 83.5,28.5 83.5,71.5 81,72" fill="currentColor" />
      {/* Bar 10 */}
      <polygon points="85,29.5 87.5,30 87.5,70 85,70.5" fill="currentColor" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {SymbolMark}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-16 h-16 mb-3 text-current">{SymbolMark}</div>
        <span
          className={`font-serif font-black tracking-widest text-2xl uppercase ${
            dark ? 'text-white' : 'text-[#0b132b]'
          } ${textClassName}`}
          style={{ fontFamily: 'Georgia, "Times New Roman", serif, sans-serif' }}
        >
          STILTEMO
        </span>
        <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-blue-400 mt-1">
          ESP SL • INTRALOGISTICS
        </span>
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-2 bg-white rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105 shrink-0">
          <div className="w-full h-full text-[#0b132b]">{SymbolMark}</div>
        </div>
        <div className="flex flex-col text-left">
          <span
            className={`font-serif font-black text-2xl md:text-3xl tracking-widest leading-none ${
              dark ? 'text-white' : 'text-[#0b132b]'
            } ${textClassName}`}
            style={{ fontFamily: 'Georgia, "Times New Roman", serif, sans-serif' }}
          >
            STILTEMO
          </span>
          <span
            className={`text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] leading-none uppercase mt-2 ${subtextColor}`}
          >
            ESP SL • INTRALOGISTICS
          </span>
        </div>
      </div>
    );
  }

  // Horizontal layout for Header / Footer
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="w-9 h-9 flex items-center justify-center p-1 bg-white rounded-md shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
        <div className="w-full h-full text-[#0b132b]">{SymbolMark}</div>
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-black text-xl tracking-wider leading-none ${
            dark ? 'text-white' : 'text-[#0b132b]'
          } ${textClassName}`}
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          STILTEMO
        </span>
        <span
          className={`text-[9px] font-mono font-bold tracking-[0.25em] leading-none uppercase mt-1 ${subtextColor}`}
        >
          ESP SL • INTRALOGISTICS
        </span>
      </div>
    </div>
  );
}
