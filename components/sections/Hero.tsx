"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const BLUE_PRIMARY = "#0D47A1";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.4, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.1, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.1, 1], delay: 0.3 },
    },
  };

  return (
    <section
      ref={heroRef}
      className="w-full bg-black px-6 sm:px-10 lg:px-16 pt-24 pb-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Two-column: headline left | subtext + CTA right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-10 gap-6 md:gap-10">
          <motion.h1
            variants={itemVariants}
            className="font-extrabold leading-none tracking-tight m-0"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              color: "#ffffff",
              letterSpacing: "-2px",
              maxWidth: "560px",
            }}
          >
            Unlocking Africa&apos;s{" "}
            <span style={{ color: BLUE_PRIMARY }}>Resource Potential.</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 md:max-w-xs lg:max-w-sm flex-shrink-0 md:pb-1"
          >
            <p className="text-sm leading-relaxed m-0" style={{ color: "#9ca3af" }}>
              We combine sustainable mining practices with forward-thinking land
              development — building lasting value, enhancing communities, and
              driving economic growth through innovation and partnership.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white no-underline px-6 py-3 rounded-full"
                style={{ background: BLUE_PRIMARY, letterSpacing: "0.05em" }}
              >
                Explore Investments
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-medium no-underline"
                style={{ color: "#fff" }}
              >
                Our story
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero image card */}
        <motion.div
          variants={imageVariants}
          className="relative mt-8 w-full overflow-hidden"
          style={{
            borderRadius: "20px",
            height: "clamp(260px, 44vw, 520px)",
          }}
        >
          <Image
            src="/hero.png"
            alt="Simeozani Investments — Mining operations across Africa"
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
          />

          {/* Subtle scrim so chips stay readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)",
            }}
          />

          {/* TOP LEFT — sector chip */}
          <div
            className="absolute top-4 left-4 flex flex-col gap-0.5 px-3.5 py-2.5 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.22)",
            }}
          >
            <span className="text-white font-bold text-sm leading-none">
              Gold Mining
            </span>
            <span className="text-white/70 text-xs mt-0.5">Mineral Development</span>
          </div>

          {/* TOP RIGHT — status badge */}
          <div
            className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 text-xs font-medium"
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "#111",
              borderRadius: "10px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
            Active Operations · Zimbabwe
          </div>

          {/* BOTTOM LEFT — tagline */}
          <div className="absolute bottom-4 left-4 text-white" style={{ maxWidth: "320px" }}>
            <p
              className="font-bold leading-tight m-0"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.45rem)", letterSpacing: "-0.4px" }}
            >
              From artisanal depth<br />to industrial scale.
            </p>
            <p className="text-white/60 text-xs mt-1 m-0 font-normal">
              Pan&#8209;African · Gold Mining · Land Development
            </p>
          </div>

          {/* BOTTOM RIGHT — social proof chip */}
          <div
            className="absolute bottom-4 right-4 flex items-center gap-3 px-3 py-2.5"
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <div className="flex">
              {[
                { initials: "SM", bg: "#0D47A1" },
                { initials: "AK", bg: "#1565C0" },
                { initials: "JN", bg: "#1976D2" },
              ].map((a, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold border-2 border-white flex-shrink-0"
                  style={{
                    background: a.bg,
                    marginLeft: i === 0 ? 0 : "-8px",
                    fontSize: "9px",
                  }}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800 m-0 leading-none">Trusted Partners</p>
              <p className="text-xs text-gray-400 m-0 mt-0.5 leading-none">Across 4 African nations</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}