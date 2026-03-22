import React from 'react';

export default function Card({ children, className = '', noPadding = false, ...props }) {
  return (
    <div 
      className={`brutalist-container h-full flex flex-col ${noPadding ? '' : 'p-6 md:p-8'} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}
