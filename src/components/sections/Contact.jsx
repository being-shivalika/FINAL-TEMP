import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Button from "../ui/Button";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // PLACEHOLDER: Please replace these with your actual EmailJS credentials
    const serviceId = 'service_udpwevg';
    const templateId = 'template_dd9soia';
    const publicKey = 'u9dLFm3FnBRm433at';

    emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    })
      .then(
        () => {
          setStatus("success");
          e.target.reset(); // clear the form
          setTimeout(() => {
            setStatus("idle");
          }, 4000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please ensure EmailJS credentials are set.');
          setStatus("idle");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 border-t-2 border-structural-dark bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-8">
            Get in <br />
            Touch
          </h2>
          <p className="text-xl font-body mb-8 max-w-md text-structural-dark/80">
            Currently accepting new clients for Q3 2024. Fill out the form or
            reach out directly via email.
          </p>

          <div className="flex flex-col gap-4 font-heading text-lg font-bold">
            <a
              href="mailto:hello@example.com"
              className="hover:text-primary-neon hover:bg-structural-dark px-2 -ml-2 transition-colors w-fit"
            >
              MEHRASHIVALIKA8@GMAIL.COM
            </a>
            <a
              href="#"
              className="hover:text-primary-neon hover:bg-structural-dark px-2 -ml-2 transition-colors w-fit"
            >
              TWITTER / X  @SHIVALIKA271
            </a>
            <a
              href="#"
              className="hover:text-primary-neon hover:bg-structural-dark px-2 -ml-2 transition-colors w-fit"
            >
              INSTAGRAM  @shiv_isthisu_
            </a>
          </div>
        </motion.div>

        <motion.div
          className="bg-surface-container border-2 border-structural-dark p-8 md:p-12 shadow-brutalist relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <form
            ref={formRef}
            className="flex flex-col gap-6 relative"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-heading font-bold uppercase text-sm tracking-widest pl-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full bg-surface border-2 border-structural-dark p-4 font-body outline-none focus:border-primary-neon focus:ring-2 focus:ring-structural-dark transition-all rounded-none"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-heading font-bold uppercase text-sm tracking-widest pl-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full bg-surface border-2 border-structural-dark p-4 font-body outline-none focus:border-primary-neon focus:ring-2 focus:ring-structural-dark transition-all rounded-none"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-heading font-bold uppercase text-sm tracking-widest pl-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full bg-surface border-2 border-structural-dark p-4 font-body outline-none focus:border-primary-neon focus:ring-2 focus:ring-structural-dark transition-all resize-none rounded-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <Button
              variant={status === "success" ? "primary" : "dark"}
              className="w-full mt-4 group"
              disabled={status === "success" || status === "sending"}
            >
              <span
                className={
                  status === "success"
                    ? "text-structural-dark"
                    : "group-hover:text-primary-neon transition-colors"
                }
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Delivered" : "Send Message"}
              </span>
            </Button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 w-full h-full bg-surface-container/90 backdrop-blur-sm z-20 flex items-center justify-center p-8 border-2 border-structural-dark shadow-brutalist"
              >
                <div className="bg-primary-neon font-heading font-bold text-structural-dark text-xl p-6 border-2 border-structural-dark shadow-brutalist text-center uppercase tracking-widest">
                  Thank you! <br />
                  <span className="text-sm font-body normal-case tracking-normal">
                    Your request has been sent.
                  </span>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
