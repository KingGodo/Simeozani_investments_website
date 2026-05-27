"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tickerItems = [
  "Pan-African Infrastructure",
  "Precision Engineering",
  "Strategic Capital Deployment",
  "Sustainable Industrialization",
  "12 Nations · Active Operations",
  "Gold · Agriculture · Energy",
  "Building the Next Century",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  // Imperative particle creation – no React state
  useEffect(() => {
    if (!particlesRef.current) return;
    const container = particlesRef.current;
    container.innerHTML = ""; // clear if re-run (only once)
    const count = 18;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = "#a5b8ff";
      particle.style.opacity = "0.06";
      particle.style.willChange = "transform";
      // Add floating animation via GSAP or CSS
      gsap.to(particle, {
        y: "-35px",
        x: "15px",
        opacity: 0.35,
        duration: Math.random() * 18 + 12,
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 6,
        ease: "sine.inOut",
      });
      container.appendChild(particle);
    }
  }, []);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(contentRef.current, {
        y: "-12%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, duration: 0.6, ease: "easeOut" } as never,
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeOut" },
    },
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
          src="/hero.jpg"
          alt="Open-pit mine aerial view"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-15" />

      {/* Vignette overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          opacity: 0.78,
          background: `
            linear-gradient(105deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.2) 100%),
            linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)
          `,
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-40 flex flex-col justify-center px-12 md:px-16 lg:px-24 pt-32 pb-28"
        style={{ minHeight: "100svh" }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 28 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              className="h-px shrink-0"
              style={{ background: "#5b7fff" }}
            />
            <span
              className="font-mono text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "#a5b8ff" }}
            >
              The Industrial Vanguard
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-bold leading-[1.08] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)" }}
          >
            <span className="block text-white">Forging Africa&apos;s</span>
            <span className="block ml-8 md:ml-12" style={{ color: "#a5b8ff" }}>
              Industrial Legacy.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 font-light tracking-[0.12em]"
            style={{
              fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
              color: "rgba(255,255,255,0.28)",
              letterSpacing: "0.12em",
            }}
          >
            Capital · Engineering · Transformation
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-lg text-sm md:text-base text-white/55 font-light leading-[1.85]"
          >
            Simeozani Investments deploys precision engineering and strategic
            capital across the African continent — building the resource, energy,
            and infrastructure foundations that the next century demands.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-row items-center gap-6">
            <button
              className="group relative overflow-hidden text-white font-semibold px-7 py-[14px] text-xs tracking-[0.18em] transition-all duration-300 hover:brightness-110"
              style={{ background: "#5b7fff", borderRadius: "2px" }}
            >
              <span className="relative z-10 flex items-center gap-2.5">
                EXPLORE INVESTMENTS
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </button>

            <button className="group flex items-center gap-2.5 text-white/50 hover:text-white text-xs tracking-[0.18em] font-semibold transition-colors duration-300">
              <span>WATCH PORTFOLIO</span>
              <span
                className="block h-px w-5 group-hover:w-9 transition-all duration-300"
                style={{ background: "currentColor" }}
              />
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14 flex flex-col gap-3">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/25 uppercase">
              Active Sectors
            </span>
            <div className="flex flex-wrap gap-2">
              {["Mining", "Agriculture", "Energy", "Infrastructure", "Emerging Tech"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wide px-3 py-1.5"
                  style={{
                    color: "#a5b8ff",
                    border: "1px solid rgba(165,184,255,0.2)",
                    borderRadius: "2px",
                    background: "rgba(165,184,255,0.05)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 z-40 overflow-hidden py-3"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {tickerFull.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span className="font-mono text-[10px] tracking-[0.25em] text-white/35 uppercase">
                {item}
              </span>
              <span
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: "#5b7fff", opacity: 0.5 }}
              />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating particles – created imperatively (no React state) */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-30 overflow-hidden" />

      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black via-black/25 to-transparent pointer-events-none z-20" />
    </section>
  );
}