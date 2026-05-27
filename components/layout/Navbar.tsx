"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Sectors", id: "sectors" },
  { name: "Transformation", id: "transformation" },
  { name: "Sustainability", id: "sustainability" },
  { name: "Insights", id: "insights" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto max-w-[1600px] px-4 md:px-8 pt-5">
        <div className="glass-card rounded-lg">
          <div className="flex items-center justify-between px-6 md:px-8 py-3">
            {/* LOGO – scrolls to home */}
            <Link
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-full">
                <Image
                  src="/logo.png"
                  alt="Simeozani Investments"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="leading-none">
                <h1 className="font-space text-white font-bold tracking-tight text-lg">
                  Simeozani
                </h1>
                <p className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                  Investments
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="relative text-sm font-inter text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-[#a5b8ff] to-[#5b7fff] transition-all duration-500 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* RIGHT – Partner With Us button scrolls to contact */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  const contact = document.getElementById("contact");
                  if (contact) contact.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden md:flex items-center justify-center h-10 px-5 text-white font-space text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-lg"
                style={{
                  background: "#5b7fff",
                  borderRadius: "2px",
                  boxShadow: "0 4px 20px rgba(91,127,255,0.35)",
                }}
              >
                Partner With Us
              </button>
              <button className="lg:hidden flex items-center justify-center w-10 h-10 rounded border border-white/20 bg-white/5 text-white">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}