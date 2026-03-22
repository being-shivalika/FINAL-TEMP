import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Services() {
  const services = [
    {
      title: 'Brand Identity',
      desc: 'Building bold, uncompromising design systems that stand out in a sea of uniformity.',
      price: 'From 5k'
    },
    {
      title: 'Digital Experience',
      desc: 'High-conversion, structurally sound websites using React and modern architectures.',
      price: 'From 8k'
    },
    {
      title: 'Content Strategy',
      desc: 'Directing visual storytelling and editorial content that demands attention.',
      price: 'Retainer'
    }
  ];

  return (
    <section id="expertise" className="py-24 border-t-2 border-structural-dark bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">Expertise</h2>
          <span className="hidden md:block font-heading font-bold text-structural-dark/50">03 / 06</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutalist-hover transition-all duration-200">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-xl md:text-2xl font-heading font-bold">{svc.title}</h3>
                  <span className="bg-structural-dark text-surface text-xs font-bold px-2 py-1 font-heading whitespace-nowrap ml-4">{svc.price}</span>
                </div>
                <p className="font-body text-structural-dark/80 mb-8 flex-grow">{svc.desc}</p>
                <div className="mt-auto border-t-2 border-structural-dark/10 pt-6">
                  <Button variant="secondary" href="#contact" className="w-full !border-structural-dark/20 text-sm hover:!border-structural-dark">
                    Inquire Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
