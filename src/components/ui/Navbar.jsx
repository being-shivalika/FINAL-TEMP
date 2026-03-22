import React from 'react';
import Button from './Button';

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Work', href: '#work' },
    { name: 'Verdict', href: '#verdict' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface border-b-2 border-structural-dark transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-2xl tracking-tighter uppercase line-through decoration-primary-neon decoration-4">
          Brand
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-heading font-bold uppercase text-sm tracking-widest">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary-neon hover:bg-structural-dark px-2 py-1 transition-colors relative block -ml-2">
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex items-center">
          <Button href="#contact" variant="primary" className="!text-sm !px-6 !py-2">
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
}
