"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCENT       = "#0D47A1";
const ACCENT_LIGHT = "#4d7cc7";
const ACCENT_ALPHA = "rgba(13,71,161,";

const tickerItems = [
  "Pan-African Infrastructure",
  "Precision Engineering",
  "Strategic Capital Deployment",
  "Sustainable Industrialization",
  "12 Nations · Active Operations",
  "Gold · Agriculture · Energy",
  "Building the Next Century",
];

const stats = [
  { value: "12",   label: "Nations" },
  { value: "$2.4B", label: "Assets Under Mgmt." },
  { value: "6",    label: "Active Sectors" },
];

const sectors = ["Mining", "Agriculture", "Energy", "Infrastructure", "Emerging Tech", "Logistics"];

export default function Hero() {
  const heroRef      = useRef<HTMLElement>(null);
  const imageRef     = useRef<HTMLDivElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);
  const overlayRef   = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const controls     = useAnimation();
  const isInView     = useInView(heroRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!particlesRef.current) return;
    const container = particlesRef.current;
    container.innerHTML = "";
    for (let i = 0; i < 14; i++) {
      const p = document.createElement("div");
      p.className = "absolute rounded-full";
      Object.assign(p.style, {
        left:       `${Math.random() * 100}%`,
        top:        `${Math.random() * 100}%`,
        width:      `${Math.random() * 1.5 + 0.8}px`,
        height:     `${Math.random() * 1.5 + 0.8}px`,
        background: ACCENT_LIGHT,
        opacity:    "0.04",
        willChange: "transform",
      });
      gsap.to(p, {
        y: "-28px", x: "10px", opacity: 0.2,
        duration: Math.random() * 20 + 14,
        repeat: -1, yoyo: true,
        delay: Math.random() * 8,
        ease: "sine.inOut",
      });
      container.appendChild(p);
    }
  }, []);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.14, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.4 },
      });
      gsap.to(overlayRef.current, {
        opacity: 1, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(contentRef.current, {
        y: "-10%", ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
    });
    return () => ctx.revert();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, duration: 0.5, ease: "easeOut" } as never },
  };
  const itemVariants: Variants = {
    hidden:  { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
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
          alt="Aerial view of mining operations"
          fill priority quality={100} sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* Base dim */}
      <div className="absolute inset-0 bg-black/72 pointer-events-none z-[15]" />

      {/* Directional vignette */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          opacity: 0.88,
          background: `
            linear-gradient(100deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.15) 100%),
            linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.28) 30%, transparent 56%)
          `,
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        ref={contentRef}
        className="relative z-40 flex flex-col justify-center
                   px-6 sm:px-10 md:px-16 lg:px-24
                   pt-28 sm:pt-32 pb-24"
        style={{ minHeight: "100svh" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-xl"
        >

          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
            <span
              className="font-mono text-[9px] sm:text-[10px] tracking-[0.28em] uppercase"
              style={{ color: ACCENT_LIGHT }}
            >
              Simeozani Investments
            </span>
            <div className="h-px w-6" style={{ background: "rgba(255,255,255,0.07)" }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-[1.1] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.6rem)" }}
          >
            Forging Africa&apos;s
            <br />
            Industrial Legacy.
          </motion.h1>

          {/* Sub-descriptor */}
          <motion.p
            variants={itemVariants}
            className="mt-2 font-light tracking-[0.1em]"
            style={{
              fontSize: "clamp(0.6rem, 1.2vw, 0.75rem)",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.14em",
            }}
          >
            Capital &nbsp;·&nbsp; Engineering &nbsp;·&nbsp; Transformation
          </motion.p>

          {/* Short paragraph */}
          <motion.div variants={itemVariants}>
            <p
              className="text-[13.5px] sm:text-[14px] mt-4 font-light leading-[1.75]"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Deploying long‑horizon capital into Africa&apos;s resource, energy, and industrial
              supply chains — building assets that compound across generations.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="mt-9 grid grid-cols-3 gap-0"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col justify-center py-4 px-3 sm:px-4"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <span
                  className="font-bold leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.45rem)", color: "#fff" }}
                >
                  {s.value}
                </span>
                <span
                  className="mt-1 font-mono text-[8px] sm:text-[9px] tracking-[0.18em] uppercase"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                className="group relative overflow-hidden text-white font-semibold
                           px-6 py-3 text-[11px] tracking-[0.2em] min-h-[44px]
                           transition-all duration-300 hover:brightness-110
                           w-full sm:w-auto flex items-center justify-center gap-2.5"
                style={{ background: ACCENT, borderRadius: "2px" }}
              >
                <span className="relative z-10">EXPLORE INVESTMENTS</span>
                <svg
                  className="w-3 h-3 relative z-10 group-hover:translate-x-0.5 transition-transform shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </button>

              <button
                className="group text-white/55 hover:text-white/85 font-medium
                           px-6 py-3 text-[11px] tracking-[0.2em] min-h-[44px]
                           transition-all duration-300 w-full sm:w-auto
                           flex items-center justify-center gap-2"
                style={{
                  border: "1px solid rgba(255,255,255,0.13)",
                  borderRadius: "2px",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                COMPANY OVERVIEW
              </button>
            </div>

            <button
              className="group flex items-center gap-2 self-start text-[11px] tracking-[0.12em] font-medium transition-all duration-300"
              style={{ color: ACCENT_LIGHT }}
            >
              <span className="group-hover:underline underline-offset-4">
                Request an Investor Brief
              </span>
              <svg
                className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40 overflow-hidden py-2.5"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.62)",
          backdropFilter: "blur(12px)",
        }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        >
          {tickerFull.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-5">
              <span className="font-mono text-[9px] tracking-[0.22em] text-white/22 uppercase">
                {item}
              </span>
              <span
                className="w-[3px] h-[3px] rounded-full shrink-0"
                style={{ background: ACCENT, opacity: 0.65 }}
              />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-30 overflow-hidden" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/20 to-transparent pointer-events-none z-20" />
    </section>
  );
}