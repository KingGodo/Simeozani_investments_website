"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRIMARY = "#0D47A1";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const pillarsContainerRef = useRef<HTMLDivElement>(null);
  const philosophyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Brand name animation
      gsap.fromTo(headlineRef.current,
        { letterSpacing: "0.05em", scale: 0.95 },
        {
          letterSpacing: "0.2em",
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats items
      const statsItems = statsContainerRef.current?.children;
      if (statsItems && statsItems.length) {
        gsap.fromTo(statsItems,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power2.out",
            scrollTrigger: { trigger: statsContainerRef.current, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }

      // Manifesto
      gsap.fromTo(manifestoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: manifestoRef.current, start: "top 85%", toggleActions: "play none none reverse" }
        }
      );

      // Pillars
      const pillarItems = pillarsContainerRef.current?.children;
      if (pillarItems && pillarItems.length) {
        gsap.fromTo(pillarItems,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 0.4, ease: "power2.out",
            scrollTrigger: { trigger: pillarsContainerRef.current, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }

      // Philosophy
      const philosophyItems = philosophyContainerRef.current?.children;
      if (philosophyItems && philosophyItems.length) {
        gsap.fromTo(philosophyItems,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: philosophyContainerRef.current, start: "top 85%", toggleActions: "play none none reverse" }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-black">
      {/* Africa background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "url('/africa.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "auto 100%",
          maskImage: "linear-gradient(to left, black 50%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to left, black 50%, transparent 90%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 md:px-14 lg:px-20 py-12 md:py-16">

        {/* Brand headline — fully fluid, no overflow scroll */}
        <div ref={headlineRef} className="w-full text-center mb-12 md:mb-16">
          <span
            className="font-black uppercase inline-block w-full"
            style={{
              /*
               * clamp floor raised to 2rem so it never clips on tiny screens.
               * 11.5vw hits ~10rem at 1400px and scales down cleanly.
               * No whitespace-nowrap — the word can reflow if the viewport
               * is extremely narrow, but with this clamp it won't need to.
               */
              fontSize: "clamp(2rem, 11.5vw, 10rem)",
              color: "white",
              letterSpacing: "0.1em",
              lineHeight: 1.05,
            }}
          >
            SIMEOZANI
          </span>
        </div>

        {/* Stats + Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 md:mb-24">
          {/* Stats column */}
          <div className="lg:col-span-1">
            <div ref={statsContainerRef} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2">
              {[
                { label: "Founded", value: "2022" },
                { label: "Nations", value: "12" },
                { label: "Sectors", value: "5" },
                { label: "Focus", value: "Africa" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left p-2 bg-black/20 rounded-sm border border-white/5">
                  <div className="font-mono text-[8px] tracking-[0.2em] text-white/40 uppercase mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-bold text-2xl md:text-3xl tracking-tight" style={{ color: PRIMARY }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manifesto column */}
          <div className="lg:col-span-2">
            <div ref={manifestoRef} className="space-y-6">
              <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                We do not merely <span style={{ color: PRIMARY }}>invest</span> in Africa.<br />
                We build <span style={{ color: PRIMARY }}>the foundations</span> it stands on.
              </p>
              <div className="w-12 h-px bg-white/20" />
              <div className="space-y-5 text-sm md:text-base text-white/60 leading-relaxed">
                <p>
                  Simeozani Investments is a Pan-African industrial enterprise headquartered in Harare, Zimbabwe. Since 2009 we have channelled patient capital into the resource, agricultural, and infrastructure sectors that underpin sovereign economies — not speculative arbitrage, but generational asset-building.
                </p>
                <p>
                  Our model fuses financial discipline with deep operational expertise. Every asset we enter, we operate. Every nation we invest in, we employ and empower. The result is an enterprise that measures success in decades, not quarters — in communities transformed, not just returns generated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-12 md:mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-7" style={{ background: PRIMARY }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#4d7cc7" }}>
              What We Build
            </span>
          </div>
          <h3 className="font-bold text-white text-lg md:text-xl tracking-[-0.02em] mb-8">
            Four pillars. One continent.
          </h3>

          <div ref={pillarsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { number: "01", title: "Resource Extraction", body: "Industrial-scale gold and platinum operations engineered for longevity." },
              { number: "02", title: "Agricultural Systems", body: "Large-format agri-infrastructure converting land into food security." },
              { number: "03", title: "Energy & Infrastructure", body: "Grid-scale renewables and transport corridors unlocking economies." },
              { number: "04", title: "Strategic Capital", body: "Multi-decade capital designed for nation-building, not quarterly cycles." },
            ].map((p) => (
              <div key={p.number} className="group p-3 bg-black/30 border border-white/10 rounded-sm hover:border-[#0D47A1]/30 transition-all duration-300">
                <span className="font-mono text-[9px] text-white/30">{p.number}</span>
                <h4 className="font-bold text-white text-xs mt-1.5 mb-1">{p.title}</h4>
                <p className="text-white/35 text-[11px] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(13,71,161,0.08)] to-transparent" />
          <div ref={philosophyContainerRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            {[
              { label: "Our Philosophy", heading: "Operational, not passive.", body: "We embed operational teams inside every asset class — ensuring capital and expertise move in lockstep." },
              { label: "Our Timescale", heading: "Decades, not quarters.", body: "Simeozani structures every position for a minimum 15‑year value creation horizon." },
              { label: "Our Obligation", heading: "Prosperity, not extraction.", body: "Every project carries a binding community uplift mandate — local employment, skills transfer, and environmental rehabilitation." },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="font-mono text-[8px] tracking-[0.35em] uppercase text-[#4d7cc7]/60">
                  {item.label}
                </span>
                <h4 className="font-bold text-white text-base tracking-tight">{item.heading}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}