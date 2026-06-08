"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BLUE_PRIMARY = "#0D47A1";
const BLUE_LIGHT = "#4d7cc7";

const tickerItems = [
  "Gold Mining",
  "Formalization",
  "Industrial Scale",
  "Pan‑African",
  "Excellence Beyond Investment",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(heroRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(overlayRef.current, {
        opacity: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
      gsap.to(contentRef.current, {
        y: "-5%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, duration: 0.5, ease: "easeOut" },
    },
  };
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.1, 1] } },
  };

  const tickerFull = [...tickerItems, ...tickerItems];

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src="/hero.png"
          alt="Simeozani Investments"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          opacity: 0.8,
          background: `linear-gradient(110deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.3) 100%)`,
        }}
      />

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-40 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 pt-32 pb-28"
        style={{ minHeight: "100svh" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-2xl"
        >
          {/* Headline - single line on desktop, two lines on mobile */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
          >
            Artisanal Depth to
            <span className="block sm:inline sm:ml-3 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Industrial Scale.
            </span>
          </motion.h1>

          {/* One line subtext */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-light leading-relaxed mt-4 max-w-xl text-white/65"
          >
            Transforming small‑scale mining into structured, large‑scale commercial enterprises across Africa.
          </motion.p>

          {/* Single CTA */}
          <motion.div variants={itemVariants} className="mt-8">
            <button
              className="group relative overflow-hidden text-white font-semibold px-8 py-3.5 text-xs tracking-[0.2em] min-h-[48px] transition-all duration-300 flex items-center justify-center gap-3"
              style={{
                background: `linear-gradient(135deg, ${BLUE_PRIMARY} 0%, ${BLUE_LIGHT} 100%)`,
                borderRadius: "2px",
                boxShadow: "0 8px 20px -8px rgba(0,0,0,0.5)",
              }}
            >
              <span className="relative z-10">EXPLORE INVESTMENTS</span>
              <svg
                className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40 overflow-hidden py-2.5"
        style={{
          borderTop: `1px solid ${BLUE_PRIMARY}30`,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {tickerFull.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-5">
              <span className="font-mono text-[8px] tracking-[0.3em] text-white/50 uppercase">
                {item}
              </span>
              <span className="w-0.5 h-0.5 rounded-full bg-blue-400/50" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none z-20" />
    </section>
  );
}