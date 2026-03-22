import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../ui/Card";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const testimonials = [
    {
      quote:
        "The final product was unapologetically bold. Exactly what we needed to cut through the industry noise.",
      author: "Sarah J.",
      role: "Founder, Alpha Space",
    },
    {
      quote:
        "Structural, clean, and highly converting. Our bounce rate dropped by 40% after the redesign.",
      author: "Michael T.",
      role: "Marketing Dir, Beta Corp",
    },
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeTestimonial !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeTestimonial]);

  return (
    <section
      id="verdict"
      className="py-15 border-t-2 border-structural-dark bg-surface relative"
    >
      <div className="absolute top-0 left-12 w-1px h-full bg-structural-dark/10 hidden md:block"></div>
      <div className="absolute top-0 right-12 w-1px h-full bg-structural-dark/10 hidden md:block"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">
            Client Verdict
          </h2>
        </motion.div>

        <div className="overflow-hidden w-full relative pb-8 -mx-6 px-6 md:-mx-12 md:px-12 w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
          {/* Fading edges */}
          <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-10 h-full bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <Card
                key={i}
                className="relative bg-surface p-8 md:p-10 shadow-[8px_8px_0px_0px_#1e2f00]! w-[300px] md:w-[450px] shrink-0 cursor-pointer hover:-translate-y-1 hover:shadow-brutalist-hover transition-all duration-200 group active:scale-[0.98]"
                onClick={() => setActiveTestimonial(t)}
              >
                <div className="absolute -top-4 -left-4 font-heading text-6xl text-primary-neon opacity-50 select-none group-hover:text-structural-dark transition-colors duration-300">
                  "
                </div>
                <p className="text-lg md:text-xl font-heading font-medium leading-relaxed mb-8 relative z-10 whitespace-normal">
                  {t.quote.length > 80 ? t.quote.substring(0, 80) + '...' : t.quote}
                </p>
                <div className="mt-auto border-t-2 border-structural-dark pt-6 flex justify-between items-center whitespace-normal">
                  <div>
                    <strong className="block font-heading uppercase text-lg group-hover:text-primary-neon transition-colors duration-200">
                      {t.author}
                    </strong>
                    <span className="text-sm font-body text-structural-dark/60">
                      {t.role}
                    </span>
                  </div>
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-structural-dark/40 group-hover:text-structural-dark transition-colors duration-200">
                    Read More
                  </span>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {activeTestimonial && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-surface-container/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveTestimonial(null)}
          >
            <motion.div
              className="w-full max-w-2xl w-[95%] md:w-full"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="relative bg-surface p-8 md:p-14 shadow-brutalist-hover! border-4 border-structural-dark">
                <button
                  onClick={() => setActiveTestimonial(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-structural-dark/50 hover:text-structural-dark transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 font-heading text-8xl md:text-9xl text-primary-neon opacity-70 select-none">
                  "
                </div>

                <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight md:leading-snug mb-12 relative z-10 text-structural-dark mt-4">
                  {activeTestimonial.quote}
                </p>

                <div className="mt-auto border-t-4 border-structural-dark pt-8 flex justify-between items-end">
                  <div>
                    <strong className="block font-heading uppercase text-2xl mb-1">
                      {activeTestimonial.author}
                    </strong>
                    <span className="text-base md:text-lg font-body font-bold tracking-widest uppercase text-structural-dark/60">
                      {activeTestimonial.role}
                    </span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-neon border-2 border-structural-dark shadow-brutalist rounded-full flex items-center justify-center font-heading font-bold text-xl md:text-2xl">
                    {activeTestimonial.author.charAt(0)}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
