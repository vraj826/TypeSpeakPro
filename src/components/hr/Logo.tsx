import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' },
  };

  return (
    <div className="flex items-center gap-2">
      <div 
        className="relative flex items-center justify-center rounded-xl"
        style={{ 
          width: sizes[size].icon, 
          height: sizes[size].icon,
          background: 'var(--gradient-hero)',
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-primary-foreground"
          style={{ width: sizes[size].icon * 0.6, height: sizes[size].icon * 0.6 }}
        >
          <path 
            d="M12 2C10.5 2 9 3 9 5V11C9 13 10.5 14 12 14C13.5 14 15 13 15 11V5C15 3 13.5 2 12 2Z" 
            fill="currentColor"
          />
          <path 
            d="M19 10V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11V10" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <path 
            d="M12 18V22M12 22H8M12 22H16" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      {showText && (
        <span className={`font-heading font-bold gradient-text ${sizes[size].text}`}>
          TypeSpeakPro
        </span>
      )}
    </div>
  );
};

export default Logo;
