import React from 'react';
import Button from '../ui/Button';
import CropMarks from '../ui/CropMarks';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4">
            <span className="font-heading font-medium tracking-widest text-sm uppercase text-structural-dark/70">Raw Curator. Visual Editorial.</span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] tracking-tight">
              Beyond  <br />
              <span className="text-brutalist-border italic font-normal">the</span> Feed.
            </h1>
          </div>

          <p className="text-lg md:text-xl max-w-lg leading-relaxed font-body">
            I build uncompromising visual identities and structural storytelling for brands that want to stand out, not blend in.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button variant="primary" href="#work">View My Work</Button>
            <Button variant="secondary" href="#contact">Get Your Portfolio</Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:col-span-5 relative mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto brutalist-container bg-surface-container overflow-visible p-2 group">
            <CropMarks position="all" />
            <div className="w-full h-full bg-structural-darker relative overflow-hidden border-2 border-structural-dark">
              {/* Image Placeholder */}
              <img
                src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80"
                alt="Creator"
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary-neon px-4 py-2 font-heading font-bold brutalist-container border-2 border-structural-dark shadow-brutalist">
              EST. 2024
            </div>

            <div className="absolute -top-4 -right-4 bg-surface px-3 py-1 font-heading text-xs font-bold border-2 border-structural-dark shadow-[2px_2px_0px_0px_#1e2f00]">
              VOL. 1
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
