"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Resource Extraction",
    body: "Industrial-scale gold, platinum, and mineral operations engineered for longevity and environmental stewardship across Sub-Saharan Africa.",
  },
  {
    number: "02",
    title: "Agricultural Systems",
    body: "Large-format agri-infrastructure — irrigation, processing, cold-chain — converting arable land into sovereign food security.",
  },
  {
    number: "03",
    title: "Energy & Infrastructure",
    body: "Grid-scale renewable deployment and critical transport corridors that unlock landlocked economies and power industrial zones.",
  },
  {
    number: "04",
    title: "Strategic Capital",
    body: "Patient, multi-decade capital structures designed for nation-building timescales — not quarterly cycles.",
  },
];

const philosophyItems = [
  {
    label: "Our Philosophy",
    heading: "Operational, not passive.",
    body: "We do not write cheques from boardrooms. We embed operational teams inside every asset class — mine sites, agri-hubs, energy plants — ensuring capital and expertise move in lockstep.",
  },
  {
    label: "Our Timescale",
    heading: "Decades, not quarters.",
    body: "The continent's infrastructure deficit cannot be solved by short-horizon capital. Simeozani structures every position for a minimum 15-year value creation horizon.",
  },
  {
    label: "Our Obligation",
    heading: "Prosperity, not extraction.",
    body: "Every project carries a binding community uplift mandate — local employment targets, skills transfer programmes, and environmental rehabilitation built into the contract.",
  },
];

const PRIMARY = "#a5b8ff";
const SECONDARY = "#5b7fff";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function About() {
  const pillarsRef = useRef<HTMLDivElement>(null);
  const pillarsInView = useInView(pillarsRef, { once: true, amount: 0.1 });

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Africa background image – subtle, on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/africa.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "auto 100%",
          opacity: 0.2,
          maskImage: "linear-gradient(to left, black 50%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to left, black 50%, transparent 90%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${SECONDARY}0a 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 pt-32 pb-32">
        {/* PART 1: Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-12">
                <div className="h-px w-7" style={{ background: SECONDARY }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: PRIMARY }}>
                  Who We Are
                </span>
              </div>
              <div
                className="font-mono font-black select-none leading-none"
                style={{
                  fontSize: "clamp(7rem, 14vw, 11rem)",
                  color: "rgba(165,184,255,0.06)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                SI
              </div>
              <div className="mt-12 space-y-8 border-l pl-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                {[
                  { label: "Founded", value: "2009" },
                  { label: "Nations", value: "12" },
                  { label: "Sectors", value: "5" },
                  { label: "Focus", value: "Africa" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-mono text-[9px] tracking-[0.3em] text-white/28 uppercase mb-1">
                      {s.label}
                    </div>
                    <div className="font-bold text-xl tracking-tight" style={{ color: PRIMARY }}>
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 lg:pt-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              <h2
                className="font-bold leading-[1.1] tracking-[-0.02em] text-white mb-10"
                style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)" }}
              >
                We do not merely <span style={{ color: PRIMARY }}>invest</span> in Africa.
                <br />
                We build <span className="relative inline-block" style={{ color: PRIMARY }}>
                  the foundations
                </span>
                <br />
                it stands on.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-px mb-8" style={{ background: "rgba(255,255,255,0.12)" }} />
              <p className="text-white/55 leading-[1.9] text-sm md:text-base font-light max-w-2xl mb-6">
                Simeozani Investments is a Pan-African industrial enterprise headquartered in Harare, Zimbabwe. Since 2009 we have channelled patient capital into the resource, agricultural, and infrastructure sectors that underpin sovereign economies — not speculative arbitrage, but generational asset-building.
              </p>
              <p className="text-white/40 leading-[1.9] text-sm md:text-base font-light max-w-2xl">
                Our model fuses financial discipline with deep operational expertise. Every asset we enter, we operate. Every nation we invest in, we employ and empower. The result is an enterprise that measures success in decades, not quarters — in communities transformed, not just returns generated.
              </p>
            </motion.div>
          </div>
        </div>

        {/* PART 2: Four Pillars Grid */}
        <div className="mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-7" style={{ background: SECONDARY }} />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: PRIMARY }}>
                What We Build
              </span>
            </div>
            <h3
              className="font-bold text-white tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
            >
              Four pillars. One continent.
            </h3>
          </motion.div>

          <motion.div
            ref={pillarsRef}
            variants={stagger}
            initial="hidden"
            animate={pillarsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {pillars.map((p) => (
              <motion.div
                key={p.number}
                variants={fadeUp}
                className="group relative flex flex-col gap-5 p-8 bg-black transition-all duration-500 hover:bg-[rgba(91,127,255,0.04)] cursor-default"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to right, ${SECONDARY}, transparent)` }}
                />
                <span className="font-mono text-xs tracking-[0.2em]" style={{ color: "rgba(165,184,255,0.35)" }}>
                  {p.number}
                </span>
                <h4
                  className="font-bold text-white leading-tight tracking-[-0.01em]"
                  style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
                >
                  {p.title}
                </h4>
                <p className="text-white/45 text-sm leading-[1.8] font-light flex-1">{p.body}</p>
                <div className="flex items-center gap-2 text-white/20 group-hover:text-[#a5b8ff] transition-colors duration-300 mt-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Learn more</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PART 3: Philosophy – each card uses whileInView directly (no custom hook component) */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(91,127,255,0.03)] to-transparent" />
          <div className="relative py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              {philosophyItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
                  className="flex flex-col gap-4"
                >
                  <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: "rgba(165,184,255,0.45)" }}>
                    {item.label}
                  </span>
                  <h4 className="font-bold text-white text-lg md:text-xl tracking-tight leading-snug">
                    {item.heading}
                  </h4>
                  <p className="text-white/45 text-sm leading-[1.85] font-light">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}