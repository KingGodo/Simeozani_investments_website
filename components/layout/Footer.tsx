"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";

const companyLinks = [
  "About Us",
  "Our Vision",
  "Leadership",
  "Sustainability",
  "Investments",
];

const sectorLinks = [
  "Gold Mining",
  "Agriculture",
  "Infrastructure",
  "Renewable Energy",
  "Emerging Tech",
];

const socials = [FaTwitter, FaInstagram, FaLinkedinIn, FaGlobe];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full left-0 right-0 bottom-0 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 lg:px-20">

        {/* TOP SECTION - solid background, no borders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20">

          {/* LEFT — Brand */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#a5b8ff" }}>
                  Simeozani Investments
                </p>
                <h2 className="font-space text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                  Building Africa&apos;s Industrial Future.
                </h2>
              </div>
              <p className="font-inter text-sm text-white/50 leading-relaxed max-w-sm">
                A Pan-African investment and mining enterprise focused on
                sustainable industrialization, infrastructure development, and
                economic transformation.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(91,127,255,0.2)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                  >
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE — Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "#a5b8ff" }}>
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="font-inter text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "#a5b8ff" }}>
                Sectors
              </h3>
              <ul className="space-y-3">
                {sectorLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="font-inter text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Newsletter */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#a5b8ff" }}>
                  Stay Connected
                </p>
                <h3 className="font-space text-2xl font-bold text-white leading-snug">
                  Receive insights and strategic updates.
                </h3>
              </div>
              <p className="font-inter text-sm text-white/50 leading-relaxed">
                Subscribe to investment insights, sustainability initiatives,
                and infrastructure developments across Africa.
              </p>

              {/* Email input + button */}
              <div className="space-y-3">
                <div
                  className="flex flex-col sm:flex-row overflow-hidden transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "2px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                  onFocusCapture={e => (e.currentTarget.style.borderColor = "#5b7fff")}
                  onBlurCapture={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 min-w-0 bg-transparent px-4 py-3 text-white placeholder:text-white/30 outline-none font-inter text-sm"
                  />
                  <button
                    className="group flex items-center justify-center gap-2 px-5 py-3 font-space text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 shrink-0"
                    style={{ background: "#5b7fff" }}
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
                <p className="font-mono text-[10px] text-white/35 tracking-wide pl-1">
                  No spam, only strategic updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL & BRANDING — solid background, no borders */}
        <div className="py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/5">
          <p className="font-inter text-xs text-white/40">
            © 2026{" "}
            <span className="font-semibold" style={{ color: "#a5b8ff" }}>
              Simeozani Investments
            </span>
            . All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Investor Relations"].map((label) => (
              <Link
                key={label}
                href="/"
                className="font-mono text-[10px] tracking-wide text-white/40 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* MASSIVE BRANDING */}
        <div className="pb-8 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="order-2 md:order-1">
              <img
                src="/logo.png"
                alt="Simeozani Investments"
                className="h-45 w-auto object-contain opacity-70"
              />
            </div>
            <h1
              className="order-1 md:order-2 font-space font-black tracking-tighter uppercase text-center md:text-right"
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                color: "#a5b8ff",
                letterSpacing: "-0.03em",
              }}
            >
              Simeozani
            </h1>
          </div>
        </div>

      </div>
    </footer>
  );
}