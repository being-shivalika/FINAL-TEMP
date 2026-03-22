import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The final product was unapologetically bold. Exactly what we needed to cut through the industry noise.",
      author: "Sarah J.",
      role: "Founder, Alpha Space"
    },
    {
      quote: "Structural, clean, and highly converting. Our bounce rate dropped by 40% after the redesign.",
      author: "Michael T.",
      role: "Marketing Dir, Beta Corp"
    }
  ];

  return (
    <section id="verdict" className="py-24 border-t-2 border-structural-dark bg-surface relative">
      <div className="absolute top-0 left-12 w-[1px] h-full bg-structural-dark/10 hidden md:block"></div>
      <div className="absolute top-0 right-12 w-[1px] h-full bg-structural-dark/10 hidden md:block"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">Client Verdict</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="relative bg-surface p-8 md:p-12 !shadow-[8px_8px_0px_0px_#1e2f00]">
                <div className="absolute -top-4 -left-4 font-heading text-6xl text-primary-neon opacity-50 select-none">"</div>
                <p className="text-xl md:text-2xl font-heading font-medium leading-relaxed mb-8 relative z-10">
                  {t.quote}
                </p>
                <div className="mt-auto border-t-2 border-structural-dark pt-6 flex justify-between items-center">
                  <div>
                    <strong className="block font-heading uppercase text-lg">{t.author}</strong>
                    <span className="text-sm font-body text-structural-dark/60">{t.role}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
