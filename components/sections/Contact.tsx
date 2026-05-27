"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call – replace with your actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", formState);
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#5b7fff]/5 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] rounded-full bg-[#a5b8ff]/5 blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 py-32">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#a5b8ff" }}>
              Partner With Us
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-bold leading-[1.1] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Let&apos;s build Africa&apos;s
            <br />
            <span style={{ color: "#a5b8ff" }}>industrial future together.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/45 text-sm font-light leading-[1.8] max-w-2xl mx-auto mt-6"
          >
            Whether you represent a mining cooperative, a development finance institution, or a strategic investor – we are always open to conversations that advance sustainable industrialisation.
          </motion.p>
        </motion.div>

        {/* Two-column layout: Form + Contact Info */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {/* LEFT: CONTACT FORM */}
          <motion.div
            variants={fadeUp}
            className="rounded-sm p-8"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3 className="font-bold text-white text-2xl mb-6">Send a message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-[#a5b8ff] mb-4" />
                <p className="text-white/80 font-medium mb-2">Message sent successfully</p>
                <p className="text-white/40 text-sm">We&apos;ll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:border-[#a5b8ff] outline-none transition-colors text-sm"
                    placeholder="John Ochieng"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:border-[#a5b8ff] outline-none transition-colors text-sm"
                    placeholder="hello@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-2">
                    Message / Inquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/20 focus:border-[#a5b8ff] outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us about your investment opportunity, partnership proposal, or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden w-full bg-[#5b7fff] text-white font-semibold py-4 text-sm tracking-wide transition-all duration-300 hover:bg-[#4a6bdd] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ borderRadius: "2px" }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: CONTACT INFO */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-8"
          >
            <div
              className="rounded-sm p-8"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="font-bold text-white text-2xl mb-6">Direct contacts</h3>

              <div className="space-y-6">
                <a
                  href="mailto:sikhutu@gmail.com"
                  className="flex items-start gap-4 group transition-colors duration-300 hover:bg-white/5 p-3 -mx-3 rounded-sm"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5b7fff]/10 text-[#a5b8ff] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Email</p>
                    <p className="text-white/80 text-sm font-mono group-hover:text-[#a5b8ff] transition-colors">
                      sikhutu@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+263776778785"
                  className="flex items-start gap-4 group transition-colors duration-300 hover:bg-white/5 p-3 -mx-3 rounded-sm"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5b7fff]/10 text-[#a5b8ff] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Phone</p>
                    <p className="text-white/80 text-sm font-mono group-hover:text-[#a5b8ff] transition-colors">
                      +263 776 778 785
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 -mx-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#5b7fff]/10 text-[#a5b8ff] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Headquarters</p>
                    <p className="text-white/80 text-sm">Harare, Zimbabwe</p>
                    <p className="text-white/40 text-xs mt-1">Pan‑African operations across 12 nations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office hours / additional context */}
            <div
              className="rounded-sm p-8"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h4 className="font-bold text-white mb-4">Response time</h4>
              <p className="text-white/45 text-sm leading-relaxed">
                We aim to respond to all partnership inquiries within 48 hours. For urgent matters, please call our direct line.
              </p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
                  Investment inquiries only — no unsolicited sales.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}