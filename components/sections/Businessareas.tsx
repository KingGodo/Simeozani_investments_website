"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const sectors = [
  {
    id: "01",
    title: "Gold & Minerals",
    fullTitle: "Gold Mining & Mineral Development",
    description: "Large‑scale extraction and formalisation of artisanal mining communities.",
  },
  {
    id: "02",
    title: "Agribusiness",
    fullTitle: "Agriculture & Agribusiness",
    description: "Irrigated farms, cold‑chain logistics, and sovereign food infrastructure.",
  },
  {
    id: "03",
    title: "Infrastructure",
    fullTitle: "Infrastructure & Industrial Development",
    description: "Roads, rail corridors, industrial parks – the multiplier of economies.",
  },
  {
    id: "04",
    title: "Energy & Tech",
    fullTitle: "Renewable Energy & Emerging Tech",
    description: "Grid‑scale renewables paired with strategic technology leapfrogging.",
  },
];

// Brand blue
const PRIMARY = "#0D47A1";
const PRIMARY_LIGHT = "#4d7cc7";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function BusinessAreas() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const listInView = useInView(listRef, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Africa background image – more visible, positioned right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/africa.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "auto 100%",
          opacity: 0.45,
          maskImage: "linear-gradient(to left, black 60%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 95%)",
        }}
      />

      {/* Dark overlay – softer on the right side to let the image show through */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/45 pointer-events-none"
      />

      {/* ambient glow – using brand blue */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#0D47A1]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 pt-32 pb-32">
        {/* HEADER */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-7" style={{ background: PRIMARY }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: PRIMARY }}>
              Business Areas
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              variants={fadeUp}
              className="font-bold leading-[1.1] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Where capital meets<br />
              <span style={{ color: PRIMARY }}>industrial purpose.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-sm text-sm text-white/45 font-light leading-relaxed lg:text-right"
            >
              Four strategic verticals. Each selected for its capacity to generate returns
              while anchoring economic transformation.
            </motion.p>
          </div>
        </motion.div>

        {/* VERTICAL LIST – ultra minimal, no cards */}
        <motion.div
          ref={listRef}
          initial="hidden"
          animate={listInView ? "visible" : "hidden"}
          variants={stagger}
          className="relative"
        >
          {/* thin vertical line – only visible on desktop */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-16 md:space-y-20">
            {sectors.map((sector, idx) => (
              <motion.div
                key={sector.id}
                variants={fadeUp}
                className="group relative flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
              >
                {/* number with small connecting dot */}
                <div className="relative flex items-center gap-4 md:w-32 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-[#0D47A1] transition-colors duration-300 hidden md:block" />
                  <span className="font-mono text-sm tracking-wider text-white/30 group-hover:text-[#0D47A1] transition-colors duration-300">
                    {sector.id}
                  </span>
                </div>

                {/* content */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-2xl md:text-3xl text-white tracking-tight group-hover:text-[#0D47A1] transition-colors duration-300">
                    {sector.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed max-w-2xl font-light">
                    {sector.description}
                  </p>
                  {/* optional full title (small, monospace) */}
                  <div className="pt-1">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20">
                      {sector.fullTitle}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}