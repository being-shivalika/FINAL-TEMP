import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-24 border-t-2 border-structural-dark bg-structural-dark text-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none filter invert"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-8">
            Ready to <br/><span className="text-primary-neon">Scale?</span>
          </h2>
          <p className="text-xl md:text-2xl font-body max-w-2xl mx-auto mb-12 text-surface-container/80">
            Stop blending in. Let's build a visual identity that commands attention and converts.
          </p>
          <Button variant="primary" href="#contact" className="text-xl !px-12 !py-6 w-full md:w-auto">
            Start a Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
