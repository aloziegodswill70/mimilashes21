"use client";

import { useState } from "react";
import { Menu, X, Instagram, Music2 } from "lucide-react";

export default function Navbar() {

  return (
    <nav className="w-full bg-tealDark text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold">MIMIlashes</h1>

        {/* ================================
            DESKTOP NAVIGATION
        ================================== */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="/" className="hover:text-goldLight">Home</a>
          <a href="/services" className="hover:text-goldLight">Services</a>
          <a href="/gallery" className="hover:text-goldLight">Gallery</a>
          <a href="/contacts" className="hover:text-goldLight">Contact</a>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://instagram.com/mimi_lashes21"
            target="_blank"
            className="hover:text-goldLight"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://tiktok.com/@mimi_lashes21"
            target="_blank"
            className="hover:text-goldLight"
          >
            <Music2 size={22} />
          </a>
        </div>

        {/* ================================
            MOBILE NAVIGATION (MINIMAL)
        ================================== */}
        <div className="flex md:hidden items-center space-x-4">

          {/* Home */}
          <a href="/" className="font-semibold text-sm">Home</a>

          {/* Instagram icon */}
          <a
            href="https://instagram.com/mimi_lashes21?igsh=YTYzbG4yZnRtcm4%3D&utm_source=qr"
            target="_blank"
            className="hover:text-goldLight"
          >
            <Instagram size={22} />
          </a>

          {/* TikTok icon */}
          <a
             href="https://tiktok.com/@mimi_lashes21?_r=1&_t=ZM-91zmj4uq3Dv"
            target="_blank"
            className="hover:text-goldLight"
          >
            <Music2 size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}
