"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const principles = [
  {
    id: "01",
    title: "Strategic Vision",
    description:
      "We look beyond quarterly earnings to the generational arc of African industrialisation. Every decision is weighed against a 20‑year horizon of nation‑building and economic sovereignty.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28 L28 28 M16 4 L16 28 M4 16 L28 16" />
        <circle cx="16" cy="16" r="6" />
        <polyline points="16 10 16 16 22 16" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Resilience & Grit",
    description:
      "Africa's industrial transformation requires patience, tenacity, and the ability to navigate regulatory, logistical, and market complexities. We are built for the long, hard road.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20 L16 12 L24 20" />
        <path d="M16 28 L16 12" />
        <circle cx="16" cy="8" r="2" />
        <path d="M4 28 L28 28" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Transformative Enterprise",
    description:
      "We do not invest to extract; we invest to transform. Every asset we touch must emerge more productive, more sustainable, and more integrated into the regional economy.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20 L20 12" />
        <circle cx="8" cy="24" r="4" />
        <circle cx="24" cy="8" r="4" />
        <path d="M20 24 L28 16" />
        <path d="M8 4 L16 12" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Integrity & Transparency",
    description:
      "In a sector often plagued by opacity, we operate with auditable books, binding community contracts, and uncompromising governance standards. Trust is our hardest‑earned asset.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="16 2 20 8 28 10 22 16 24 24 16 20 8 24 10 16 4 10 12 8 16 2" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    ),
  },
];

// Brand blue
const PRIMARY = "#0D47A1";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function LeadershipPhilosophy() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const quoteInView = useInView(quoteRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Ambient glow – using brand blue */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0D47A1]/5 blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 py-32">

        {/* ── HEADER ── */}
        <motion.div
          ref={headerRef}
          variants={stagger}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-7" style={{ background: PRIMARY }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: PRIMARY }}>
              Leadership Philosophy
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <motion.h2
              variants={fadeUp}
              className="font-bold leading-[1.08] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              Guiding{" "}
              <span style={{ color: PRIMARY }}>principles</span>
              <br />of a Pan‑African enterprise.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/45 text-sm font-light leading-[1.9] max-w-md lg:ml-auto"
            >
              Our leadership is rooted in strategic vision, resilience, and an unshakeable commitment
              to transformative enterprise. These four pillars define every decision we make.
            </motion.p>
          </div>
        </motion.div>

        {/* ── 4 PRINCIPLES GRID (2x2 on desktop, 1x1 on mobile) ── */}
        <motion.div
          ref={gridRef}
          variants={stagger}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)] mb-24"
        >
          {principles.map((p, idx) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              className="group relative flex flex-col gap-5 p-8 bg-black transition-all duration-500 hover:bg-[rgba(13,71,161,0.04)]"
            >
              {/* Top accent line on hover – using brand blue */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${PRIMARY}, transparent)` }}
              />

              <div className="flex items-start justify-between">
                <div className="w-10 h-10 text-[#0D47A1] opacity-70">{p.icon}</div>
                <span className="font-mono text-[11px] tracking-wide text-white/20">{p.id}</span>
              </div>

              <h3
                className="font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)" }}
              >
                {p.title}
              </h3>

              <p className="text-white/45 text-sm leading-relaxed font-light">
                {p.description}
              </p>

              {/* Bottom arrow on hover */}
              <div className="flex items-center gap-2 text-white/20 group-hover:text-[#0D47A1] transition-colors duration-300 mt-2">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase">Core tenet</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── RESILIENCE QUOTE (no borders, only background gradient with brand blue) ── */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 30 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative py-14 px-6 md:px-12 text-center"
          style={{
            background: `linear-gradient(90deg, transparent, ${PRIMARY}0a, transparent)`,
          }}
        >
          <span className="font-mono text-[9px] tracking-[0.35em] text-white/30 uppercase block mb-6">
            The Simeozani Ethos
          </span>
          <h3
            className="font-bold leading-[1.2] tracking-tight text-white max-w-4xl mx-auto"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
          >
            “Economic empowerment and sustainable investment are essential pillars for long‑term national and continental development.”
          </h3>
          <p className="text-white/40 text-xs font-mono tracking-[0.2em] uppercase mt-8">
            Leadership Mandate
          </p>
        </motion.div>

      </div>
    </section>
  );
}