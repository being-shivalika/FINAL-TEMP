import React from 'react';

export default function NeonLine({ className = '' }) {
  return (
    <div className={`w-full h-[1px] bg-primary-neon ${className}`} />
  );
}
