"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-black font-black text-xl">
            2CO
          </div>

          <div>
            <h2 className="font-black text-white text-lg">
              2CO LOGISTICS
            </h2>

            <p className="text-slate-400 text-sm">
              Nationwide Logistics Solutions
            </p>
          </div>

        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-slate-300 font-medium">

          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-orange-400 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>

          <a href="#partners" className="hover:text-orange-400 transition">
            Partners
          </a>

        </nav>

        {/* RIGHT CTA */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://wa.me/2347066066701"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl text-black font-bold"
          >
            WhatsApp Us
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-6 py-6 flex flex-col gap-5 text-slate-300">

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#partners">Partners</a>

          <a
            href="https://wa.me/2347066066701"
            target="_blank"
            className="bg-orange-500 text-black text-center py-3 rounded-xl font-bold"
          >
            WhatsApp Us
          </a>

        </div>

      )}

    </header>
  );
}