import React from 'react';
import { motion } from 'framer-motion';

export default function Work() {
  const works = [
    { title: 'Project Alpha', cat: 'Art Direction', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Studio Beta', cat: 'Web Design', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop' },
    { title: 'Gamma Corp', cat: 'Branding', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop' },
    { title: 'Delta Space', cat: 'UX/UI', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section id="work" className="py-24 border-t-2 border-structural-dark bg-surface-container overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="mb-16 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">Selected Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-8">
          {works.map((work, i) => (
            <motion.div 
              key={i} 
              tabIndex={0}
              className={`group cursor-pointer focus:outline-none ${i % 2 !== 0 ? 'md:mt-32' : 'md:mb-32'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative aspect-[4/3] w-full brutalist-container overflow-hidden p-2 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-brutalist-hover group-active:-translate-x-1 group-active:-translate-y-1 group-active:shadow-brutalist-hover group-focus:-translate-x-1 group-focus:-translate-y-1 group-focus:shadow-brutalist-hover transition-all duration-200">
                <div className="w-full h-full border-2 border-structural-dark overflow-hidden relative">
                  <img 
                    src={work.img} 
                    alt={work.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 group-focus:grayscale-0 transition-all duration-500 group-hover:scale-105 group-active:scale-105 group-focus:scale-105"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-heading font-bold uppercase">{work.title}</h3>
                <span className="font-body text-xs font-bold tracking-widest uppercase border-b-2 border-structural-dark pb-1">{work.cat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
