"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";

const focuses = [
  {
    id: "01",
    keyword: "Industrialise",
    title: "Local Value Addition & Industrialisation",
    body: "We reject the raw-export model. Every asset we develop is engineered to process, refine, and manufacture on African soil — capturing the full value chain within the continent rather than shipping potential abroad.",
    detail: "Where others see ore, we see a smelter. Where others see harvest, we see a processing plant. Value addition is not a policy aspiration for us — it is a deal-entry requirement.",
    stat: { value: "70%", label: "of operations include downstream processing" },
  },
  {
    id: "02",
    keyword: "Steward",
    title: "Responsible Resource Utilisation",
    body: "Africa's resources are not infinite. We deploy environmental management frameworks, rehabilitation bonds, and water stewardship protocols across every extraction site — because the next generation inherits what we build today.",
    detail: "ISO 14001-aligned environmental management is mandatory across all Simeozani operating subsidiaries. We measure reclamation progress quarterly.",
    stat: { value: "100%", label: "of sites carry rehabilitation mandates" },
  },
  {
    id: "03",
    keyword: "Ignite",
    title: "Youth Entrepreneurship & Innovation",
    body: "The median age in Sub-Saharan Africa is 18. That is not a demographic burden — it is the largest entrepreneurial workforce on earth. We fund incubators, technical apprenticeships, and junior mining ventures that turn that energy into economic output.",
    detail: "Our Youth Industrial Fund has co-seeded 40+ enterprises across Zimbabwe, Zambia, and the DRC since 2018.",
    stat: { value: "40+", label: "enterprises co-seeded through youth programmes" },
  },
  {
    id: "04",
    keyword: "Partner",
    title: "Sustainable Investment Partnerships",
    body: "Capital without alignment destroys. We structure long-horizon joint ventures with host governments, development finance institutions, and local private equity — ensuring every partner's incentives are tied to the same 20-year outcome.",
    detail: "Our partnership framework requires a minimum 25% local equity stake in all operating entities, with structured buyout pathways for host-nation partners.",
    stat: { value: "25%+", label: "minimum local equity in every operating entity" },
  },
  {
    id: "05",
    keyword: "Lead",
    title: "African-Led Economic Solutions",
    body: "The solutions to Africa's development challenges already exist on the continent — in its engineers, economists, agronomists, and entrepreneurs. Our role is to resource and amplify African-designed answers, not to import foreign templates.",
    detail: "Over 90% of our management and technical leadership is drawn from within the African continent.",
    stat: { value: "90%+", label: "of management is African-born and raised" },
  },
];

const PRIMARY_COLOR = "#a5b8ff"; // unified blue accent

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export default function StrategicFocus() {
  const [active, setActive] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const bodyInView = useInView(bodyRef, { once: true, amount: 0.1 });

  const current = focuses[active];

  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* AMBIENT BLOB – single color */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 80% 40%, rgba(91,127,255,0.07) 0%, transparent 70%)`,
        }}
      />

      {/* Animated accent blob – always uses PRIMARY_COLOR */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px]"
        animate={{ background: `${PRIMARY_COLOR}0d` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 pt-32 pb-32">

        {/* HEADER */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          className="mb-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-7" style={{ background: PRIMARY_COLOR }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: PRIMARY_COLOR }}>
              Strategic Focus
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <motion.h2
              variants={fadeUp}
              className="font-bold leading-[1.08] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              Not what we do —<br />
              <span style={{ color: PRIMARY_COLOR }}>how and why</span> we do it.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/40 text-sm font-light leading-[1.9] max-w-md lg:ml-auto">
              Strategy without principles is just opportunism. These five commitments are the operating DNA of every investment, partnership, and project Simeozani touches.
            </motion.p>
          </div>
        </motion.div>

        {/* MAIN INTERACTIVE LAYOUT */}
        <motion.div
          ref={bodyRef}
          initial={{ opacity: 0 }}
          animate={bodyInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >

          {/* LEFT — vertical tab list */}
          <div className="lg:col-span-4 flex flex-col">
            {focuses.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActive(i)}
                className="group relative text-left flex items-center gap-5 py-5 transition-all duration-300"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Active indicator bar – single color */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  animate={{
                    background: active === i ? PRIMARY_COLOR : "rgba(255,255,255,0.08)",
                    scaleY: active === i ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ originY: 0.5 }}
                />

                <div className="pl-5 flex items-center gap-5 w-full">
                  <span
                    className="font-mono text-xs shrink-0 transition-colors duration-300"
                    style={{ color: active === i ? PRIMARY_COLOR : "rgba(255,255,255,0.2)" }}
                  >
                    {f.id}
                  </span>

                  <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                    <span
                      className="font-bold tracking-tight leading-none transition-colors duration-300"
                      style={{
                        fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                        color: active === i ? PRIMARY_COLOR : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {f.keyword}
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-[0.1em] transition-colors duration-300 truncate"
                      style={{ color: active === i ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)" }}
                    >
                      {f.title}
                    </span>
                  </div>

                  <motion.div
                    animate={{ x: active === i ? 0 : -4, opacity: active === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: PRIMARY_COLOR }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — content panel with unified color */}
          <div className="lg:col-span-8 lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative overflow-hidden flex flex-col gap-8"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid ${PRIMARY_COLOR}30`,
                  borderRadius: "3px",
                  padding: "clamp(1.5rem, 3vw, 2.5rem)",
                  boxShadow: `0 0 60px ${PRIMARY_COLOR}0e, inset 0 0 60px ${PRIMARY_COLOR}06`,
                }}
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(to right, transparent, ${PRIMARY_COLOR}80, transparent)` }}
                />

                {/* Keyword watermark */}
                <div
                  className="absolute right-6 top-4 font-black select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(5rem, 10vw, 9rem)",
                    color: `${PRIMARY_COLOR}08`,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {current.keyword}
                </div>

                {/* Number + tag line */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs" style={{ color: `${PRIMARY_COLOR}80` }}>
                    {current.id}
                  </span>
                  <div className="h-px flex-1" style={{ background: `${PRIMARY_COLOR}20` }} />
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-white leading-snug tracking-[-0.01em] relative z-10"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                >
                  {current.title}
                </h3>

                {/* Body */}
                <p className="text-white/55 text-sm md:text-base leading-[1.9] font-light relative z-10">
                  {current.body}
                </p>

                {/* Detail with left border */}
                <p
                  className="text-sm leading-[1.85] font-light pl-5 relative z-10"
                  style={{
                    color: "rgba(255,255,255,0.32)",
                    borderLeft: `2px solid ${PRIMARY_COLOR}40`,
                  }}
                >
                  {current.detail}
                </p>

                {/* Stat pill – single color */}
                <div
                  className="inline-flex items-center gap-5 self-start px-5 py-4 relative z-10"
                  style={{
                    background: `${PRIMARY_COLOR}0c`,
                    border: `1px solid ${PRIMARY_COLOR}25`,
                    borderRadius: "2px",
                  }}
                >
                  <span
                    className="font-black text-2xl tracking-tight leading-none"
                    style={{ color: PRIMARY_COLOR }}
                  >
                    {current.stat.value}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-white/35 uppercase max-w-[140px] leading-relaxed">
                    {current.stat.label}
                  </span>
                </div>

                {/* Progress dots – single color */}
                <div className="flex items-center gap-2 relative z-10">
                  {focuses.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="transition-all duration-300"
                      style={{
                        width: active === i ? 20 : 6,
                        height: 4,
                        borderRadius: 2,
                        background: active === i ? PRIMARY_COLOR : "rgba(255,255,255,0.12)",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}