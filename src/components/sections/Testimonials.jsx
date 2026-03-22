import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Card from "../ui/Card";

export default function Testimonials() {
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

  return (
    <section
      id="verdict"
      className="py-24 border-t-2 border-structural-dark bg-surface relative"
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
          <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-surface to-transparent z-20"></div>
          <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-surface to-transparent z-20"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <Card
                key={i}
                className="relative bg-surface p-8 md:p-10 shadow-[8px_8px_0px_0px_#1e2f00]! w-[300px] md:w-[450px] shrink-0"
              >
                <div className="absolute -top-4 -left-4 font-heading text-6xl text-primary-neon opacity-50 select-none">
                  "
                </div>
                <p className="text-lg md:text-xl font-heading font-medium leading-relaxed mb-8 relative z-10 whitespace-normal">
                  {t.quote}
                </p>
                <div className="mt-auto border-t-2 border-structural-dark pt-6 flex justify-between items-center whitespace-normal">
                  <div>
                    <strong className="block font-heading uppercase text-lg">
                      {t.author}
                    </strong>
                    <span className="text-sm font-body text-structural-dark/60">
                      {t.role}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
