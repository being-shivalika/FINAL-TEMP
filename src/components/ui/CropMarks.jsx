import React from 'react';

export default function CropMarks({ className = '', position = 'all' }) {
  const length = '1rem';
  const thickness = '2px';
  const color = 'var(--color-structural-dark)';

  const marks = {
    tl: (
      <div className="absolute -top-4 -left-4 w-4 h-4 pointer-events-none">
        <div className="absolute top-0 right-0" style={{ width: length, height: thickness, backgroundColor: color }} />
        <div className="absolute bottom-0 left-0" style={{ width: thickness, height: length, backgroundColor: color }} />
      </div>
    ),
    tr: (
      <div className="absolute -top-4 -right-4 w-4 h-4 pointer-events-none">
        <div className="absolute top-0 left-0" style={{ width: length, height: thickness, backgroundColor: color }} />
        <div className="absolute bottom-0 right-0" style={{ width: thickness, height: length, backgroundColor: color }} />
      </div>
    ),
    bl: (
      <div className="absolute -bottom-4 -left-4 w-4 h-4 pointer-events-none">
        <div className="absolute bottom-0 right-0" style={{ width: length, height: thickness, backgroundColor: color }} />
        <div className="absolute top-0 left-0" style={{ width: thickness, height: length, backgroundColor: color }} />
      </div>
    ),
    br: (
      <div className="absolute -bottom-4 -right-4 w-4 h-4 pointer-events-none">
        <div className="absolute bottom-0 left-0" style={{ width: length, height: thickness, backgroundColor: color }} />
        <div className="absolute top-0 right-0" style={{ width: thickness, height: length, backgroundColor: color }} />
      </div>
    ),
  };

  return (
    <div className={`absolute inset-0 z-10 pointer-events-none ${className}`}>
      {(position === 'all' || position === 'tl') && marks.tl}
      {(position === 'all' || position === 'tr') && marks.tr}
      {(position === 'all' || position === 'bl') && marks.bl}
      {(position === 'all' || position === 'br') && marks.br}
    </div>
  );
}
