"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    id: "01",
    title: "Pan‑African Capital",
    subtitle: "African resources, African innovation, African led.",
    description:
      "Simeozani Investments operates from within the continent, for the continent. Every boardroom, every technical team, every supply chain prioritises local expertise and regional integration.",
    stat: { value: "12", label: "African nations active" },
  },
  {
    id: "02",
    title: "Local Empowerment",
    subtitle: "Ownership, employment, and procurement stay local.",
    description:
      "We negotiate binding local content agreements – from minimum local equity stakes to village‑level hiring mandates. Economic transformation means wealth staying inside the communities where it's created.",
    stat: { value: "90%+", label: "local workforce across all sites" },
  },
  {
    id: "03",
    title: "Future Generations",
    subtitle: "Build what lasts – beyond quarterly earnings.",
    description:
      "Our time horizon is measured in decades, not quarters. Every investment must prove its contribution to Africa&apos;s long‑term industrial base – environmental, social, and economic.",
    stat: { value: "15+", label: "minimum years value creation horizon" },
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CommitmentAfrica() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const bottomInView = useInView(bottomRef, { once: true, amount: 0.2 });

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/africa.png')" }}
    >
      {/* Darker Overlay – 95% black */}
      <div className="absolute inset-0 bg-black/95" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#a5b8ff]/5 blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#5b7fff]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-14 lg:px-20 pt-32 pb-32">
        {/* HEADER */}
        <motion.div
          ref={headerRef}
          variants={stagger}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-7" style={{ background: "#5b7fff" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#a5b8ff" }}>
              Commitment to Africa
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <motion.h2
              variants={fadeUp}
              className="font-bold leading-[1.08] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            >
              We are not visitors.
              <br />
              <span style={{ color: "#a5b8ff" }}>We are builders of Africa.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/45 text-sm font-light leading-[1.9] max-w-md lg:ml-auto"
            >
              Pan‑African by design, not by marketing. Our capital, our people, and our
              long‑term success are anchored inside the continent we serve.
            </motion.p>
          </div>
        </motion.div>

        {/* THREE PILLARS – NO CARDS, ONLY CONTENT WITH DIVIDERS */}
        <motion.div
          ref={gridRef}
          variants={stagger}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              variants={fadeUp}
              className="relative flex flex-col gap-4"
            >
              {/* Vertical divider line (except first) */}
              {idx !== 0 && (
                <div className="hidden md:block absolute -left-6 top-0 bottom-0 w-px bg-white/10" />
              )}

              {/* Number */}
              <span className="font-mono text-xs tracking-[0.2em] text-[#a5b8ff]/50">
                {pillar.id}
              </span>

              {/* Title */}
              <h3 className="font-bold text-white text-xl leading-tight tracking-tight">
                {pillar.title}
              </h3>

              {/* Subtitle / phrase */}
              <p className="text-[#a5b8ff]/80 text-sm italic font-light leading-relaxed border-l-2 pl-3" style={{ borderLeftColor: "#a5b8ff" }}>
                “{pillar.subtitle}”
              </p>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed font-light">
                {pillar.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 pt-3 mt-auto">
                <span className="font-bold text-2xl tracking-tight" style={{ color: "#a5b8ff" }}>
                  {pillar.stat.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-white/35 uppercase">
                  {pillar.stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* QUOTE / MANIFESTO BLOCK – with subtle glow */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 30 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative py-16 my-8 text-center"
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(91,127,255,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-[10px] tracking-[0.35em] text-white/30 uppercase">
              Our Pan‑African Pledge
            </span>
            <h3
              className="font-bold leading-[1.2] tracking-tight text-white"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              “Ad Astra Per Aspera — Through Hardships to the Stars.”
            </h3>
            <p className="text-white/45 text-sm leading-relaxed max-w-2xl mx-auto">
              Simeozani Investments embraces a Pan‑African outlook that prioritises African resources,
              African innovation, and African‑led development. We aspire to participate in building
              an economically empowered continent — capable of competing effectively in the global economy.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-[#a5b8ff] transition-colors duration-300 group"
              >
                Partner with us
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}