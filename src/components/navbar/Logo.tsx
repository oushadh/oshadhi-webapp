import React from 'react';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, color = '#4A90E2' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#4A90E2" opacity="0.1" />
      
      {/* Medical test tube */}
      <path
        d="M45 30H55V70C55 71.1 54.1 72 53 72H47C45.9 72 45 71.1 45 70V30Z"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      
      {/* Test tube liquid */}
      <path
        d="M45 50H55V70C55 71.1 54.1 72 53 72H47C45.9 72 45 71.1 45 70V50Z"
        fill="#FF6B6B"
        opacity="0.8"
      />
      
      {/* Om symbol */}
      <path
        d="M50 35C48 35 46 37 46 39C46 41 48 43 50 43C52 43 54 41 54 39C54 37 52 35 50 35ZM50 43C48 43 46 45 46 47C46 49 48 51 50 51C52 51 54 49 54 47C54 45 52 43 50 43Z"
        stroke="#FFD700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Lotus petals */}
      <path
        d="M50 35C48 33 46 33 44 35C46 33 48 33 50 35C52 33 54 33 56 35C54 33 52 33 50 35"
        stroke="#FF6B6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Center dot */}
      <circle cx="50" cy="50" r="3" fill="#4A90E2" />
    </svg>
  );
};

export default Logo; 