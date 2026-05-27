"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Sectors", id: "sectors" },
  { name: "Transformation", id: "transformation" },
  { name: "Sustainability", id: "sustainability" },
  { name: "Insights", id: "insights" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // close menu on navigation
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePartnerClick = () => {
    setMobileMenuOpen(false);
    const contact = document.getElementById("contact");
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 w-full"
      >
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 pt-5">
          <div className="glass-card rounded-lg">
            <div className="flex items-center justify-between px-6 md:px-8 py-3">
              {/* LOGO */}
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

              {/* DESKTOP BUTTON + MOBILE HAMBURGER */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePartnerClick}
                  className="hidden md:flex items-center justify-center h-10 px-5 text-white font-space text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110 hover:scale-[1.02] shadow-lg"
                  style={{
                    background: "#0D47A1",
                    borderRadius: "2px",
                  }}
                >
                  Partner With Us
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden flex items-center justify-center w-10 h-10 rounded border border-white/20 bg-white/5 text-white"
                >
                  {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU (overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Slide-in menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-black/95 border-l border-white/10 z-50 lg:hidden flex flex-col p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={`#${item.id}`}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="text-white/70 hover:text-white text-lg font-inter transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={handlePartnerClick}
                  className="mt-4 w-full py-3 text-white font-space text-sm font-semibold tracking-wide transition-all duration-300 hover:brightness-110"
                  style={{
                    background: "#0D47A1",
                    borderRadius: "2px",
                  }}
                >
                  Partner With Us
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}