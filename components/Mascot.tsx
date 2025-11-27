import React from 'react';

type MascotMood = 'happy' | 'thinking' | 'love' | 'excited' | 'sleepy' | 'cheer';

interface MascotProps {
  mood?: MascotMood;
  size?: number;
  className?: string;
}

export const Mascot: React.FC<MascotProps> = ({ mood = 'happy', size = 120, className = '' }) => {
  // Kawaii Teddy Bear Design - "Nong Mee Oonjai"
  
  const getFace = () => {
    switch(mood) {
      case 'love':
        return (
          <g>
            {/* Heart Eyes */}
             <path d="M60 90 C60 90 55 85 50 90 C45 95 50 100 60 105 C70 100 75 95 70 90 C65 85 60 90 60 90 Z" fill="#FF5252" className="animate-pulse" />
             <path d="M160 90 C160 90 155 85 150 90 C145 95 150 100 160 105 C170 100 175 95 170 90 C165 85 160 90 160 90 Z" fill="#FF5252" className="animate-pulse" />
             
             {/* Cheeks */}
             <ellipse cx="45" cy="115" rx="12" ry="8" fill="#FFAB91" opacity="0.5" />
             <ellipse cx="175" cy="115" rx="12" ry="8" fill="#FFAB91" opacity="0.5" />

             {/* Mouth */}
             <path d="M95 135 Q110 145 125 135" stroke="#4E342E" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        );
      case 'excited':
        return (
          <g>
            {/* > < Eyes */}
            <path d="M55 95 L65 105 L55 115" stroke="#4E342E" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M165 95 L155 105 L165 115" stroke="#4E342E" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Open Mouth */}
            <path d="M95 132 Q110 155 125 132 Z" fill="#FF8A80" stroke="#4E342E" strokeWidth="2.5" />
          </g>
        );
      case 'thinking':
        return (
           <g>
            {/* Looking up eyes */}
            <circle cx="60" cy="95" r="7" fill="#4E342E" />
            <circle cx="160" cy="95" r="7" fill="#4E342E" />
            
            {/* Mouth */}
             <path d="M105 135 L115 135" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />
             
             {/* Paw on chin */}
             <circle cx="130" cy="155" r="18" fill="#E6CEAA" stroke="#D7CCC8" strokeWidth="2" />
             <circle cx="130" cy="150" r="5" fill="#D7CCC8" opacity="0.5" />
           </g>
        );
      case 'sleepy':
          return (
            <g>
                {/* Closed eyes */}
                <path d="M50 100 Q60 108 70 100" stroke="#4E342E" strokeWidth="3.5" fill="none" />
                <path d="M150 100 Q160 108 170 100" stroke="#4E342E" strokeWidth="3.5" fill="none" />
                {/* Snot bubble */}
                <circle cx="125" cy="120" r="15" fill="#E1F5FE" opacity="0.7" stroke="#81D4FA" />
                {/* Zzz */}
                <text x="170" y="70" fontFamily="Mali" fontSize="28" fill="#90CAF9" fontWeight="bold">z</text>
            </g>
          );
      case 'cheer':
          return (
            <g>
                {/* Winking eye */}
                 <path d="M50 100 Q60 110 70 100" stroke="#4E342E" strokeWidth="3.5" fill="none" />
                 
                 <ellipse cx="160" cy="100" rx="8" ry="10" fill="#4E342E" />
                 <circle cx="157" cy="96" r="3" fill="white" />

                 <path d="M95 135 Q110 145 125 135" stroke="#4E342E" strokeWidth="3" fill="none" strokeLinecap="round" />
                 
                 {/* Paws up */}
                 <circle cx="40" cy="150" r="18" fill="#E6CEAA" stroke="#D7CCC8" strokeWidth="2" />
                 <circle cx="40" cy="150" r="5" fill="#D7CCC8" />
                 
                 <circle cx="180" cy="150" r="18" fill="#E6CEAA" stroke="#D7CCC8" strokeWidth="2" />
                 <circle cx="180" cy="150" r="5" fill="#D7CCC8" />
            </g>
          );
      default: // Happy
        return (
          <g>
            {/* Big Cute Eyes */}
            <circle cx="60" cy="100" r="9" fill="#4E342E" />
            <circle cx="63" cy="97" r="3" fill="white" />
            
            <circle cx="160" cy="100" r="9" fill="#4E342E" />
            <circle cx="163" cy="97" r="3" fill="white" />
            
            {/* Cheeks */}
            <ellipse cx="40" cy="115" rx="12" ry="8" fill="#FFAB91" opacity="0.6" />
            <ellipse cx="180" cy="115" rx="12" ry="8" fill="#FFAB91" opacity="0.6" />

            {/* Smile */}
            <path d="M95 135 Q110 145 125 135" stroke="#4E342E" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </g>
        );
    }
  };

  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 220 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="overflow-visible drop-shadow-lg">
        <defs>
          <linearGradient id="furGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#E6CEAA', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#D7CCC8', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="snoutGrad" x1="0%" y1="0%" x2="0%" y2="100%">
             <stop offset="0%" style={{stopColor:'#FFF8E1', stopOpacity:1}} />
             <stop offset="100%" style={{stopColor:'#FFECB3', stopOpacity:1}} />
          </linearGradient>
        </defs>

        {/* --- Ears --- */}
        <circle cx="50" cy="65" r="30" fill="url(#furGrad)" stroke="#D7CCC8" strokeWidth="2" />
        <circle cx="50" cy="65" r="15" fill="#EFEBE9" opacity="0.8" />
        
        <circle cx="170" cy="65" r="30" fill="url(#furGrad)" stroke="#D7CCC8" strokeWidth="2" />
        <circle cx="170" cy="65" r="15" fill="#EFEBE9" opacity="0.8" />

        {/* --- Head Base --- */}
        <ellipse cx="110" cy="115" rx="85" ry="75" fill="url(#furGrad)" />

        {/* --- Snout Area --- */}
        <ellipse cx="110" cy="128" rx="35" ry="28" fill="url(#snoutGrad)" />
        
        {/* --- Nose --- */}
        <ellipse cx="110" cy="118" rx="10" ry="7" fill="#4E342E" />
        <path d="M110 125 L110 135" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" />

        {/* --- Face Features --- */}
        {getFace()}

        {/* --- Accessories: Bow Tie --- */}
        <path d="M95 190 L125 190 L135 205 L85 205 Z" fill="#FF8A80" /> {/* Collar/Body hint */}
        <path d="M110 190 L90 180 L90 200 Z" fill="#FF5252" />
        <path d="M110 190 L130 180 L130 200 Z" fill="#FF5252" />
        <circle cx="110" cy="190" r="5" fill="#FF1744" />

      </svg>
    </div>
  );
};