import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 border-t-2 border-structural-dark relative bg-surface-container">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <motion.div 
          className="md:col-span-4 flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold uppercase tracking-tight">System &<br/>Structure</h2>
          <div className="mt-12 md:mt-0 font-body text-sm font-medium tracking-widest uppercase flex gap-12">
            <div>
              <span className="block text-structural-dark/50 mb-1">Followers</span>
              <span className="text-2xl font-heading font-bold">120K+</span>
            </div>
            <div>
              <span className="block text-structural-dark/50 mb-1">Impact</span>
              <span className="text-2xl font-heading font-bold">Global</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:col-span-8 flex flex-col gap-8 md:pl-12 md:border-l-2 border-structural-dark/20 text-xl md:text-2xl lg:text-3xl leading-snug font-heading font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <p>
            I believe in <span className="bg-primary-neon px-2 border-y-2 border-structural-dark inline-block italic">exposing the grid</span>. The digital world is too smooth, too rounded. My work strips away the unnecessary gradients to reveal the hard structures underneath.
          </p>
          <p className="text-structural-dark/60">
            For the past 4 years, I've curated content and built digital experiences that prioritize sharp contrast, bold typography, and undeniable clarity.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
