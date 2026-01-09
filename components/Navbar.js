"use client";

import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-tealDark text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* ================= LEFT: BRAND ================= */}
        <a
          href="/"
          className="text-lg font-bold tracking-wide hover:text-goldLight transition"
        >
          mimilashes21
        </a>

        {/* ================= DESKTOP LINKS ================= */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="/services" className="hover:text-goldLight transition">
            Services
          </a>
          <a href="/packages" className="hover:text-goldLight transition">
            Packages
          </a>
          <a href="/about" className="hover:text-goldLight transition">
            About
          </a>
          <a href="/contacts" className="hover:text-goldLight transition">
            Contacts
          </a>
        </div>

        {/* ================= RIGHT ICONS ================= */}
        <div className="flex items-center gap-5">

          {/* Instagram – always visible */}
          <a
            href="https://instagram.com/mimi_lashes21?igsh=YTYzbG4yZnRtcm4%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-goldLight transition"
          >
            <Instagram size={22} />
          </a>

          {/* Menu icon – MOBILE ONLY */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {open && (
        <div className="md:hidden bg-tealDark border-t border-white/10 mt-4 px-6 py-6 space-y-6 text-center text-sm font-medium">
          <a href="/services" className="block hover:text-goldLight">
            Services
          </a>
          <a href="/packages" className="block hover:text-goldLight">
            Packages
          </a>
          <a href="/about" className="block hover:text-goldLight">
            About
          </a>
          <a href="/contacts" className="block hover:text-goldLight">
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}
