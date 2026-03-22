import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  ...props 
}) {
  const baseStyles = "px-6 py-3 font-heading font-bold text-lg uppercase tracking-wider brutalist-button whitespace-nowrap focus:outline-none focus:ring-4 focus:ring-structural-dark cursor-pointer inline-block text-center";
  
  const variants = {
    primary: "bg-primary-neon text-structural-dark",
    secondary: "bg-surface text-structural-dark",
    dark: "bg-structural-dark text-surface",
  };

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
