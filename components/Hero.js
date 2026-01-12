"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black">

      {/* ==== BACKGROUND IMAGE WITH SMOOTH ZOOM ANIMATION ==== */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/lashlogo.jpeg"
          alt="MIMI Lashes Kigali"
          fill
          className="object-cover opacity-60"
          priority
        />
      </motion.div>

      {/* ==== OVERLAY (DARK LUXURY FILTER) ==== */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ==== HERO CONTENT ==== */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        {/* Radiating Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-[2.7rem] md:text-6xl font-extrabold drop-shadow-2xl"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.4)",
                "0 0 20px rgba(255,255,255,0.7)",
                "0 0 10px rgba(255,255,255,0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            WELCOME TO MIMI PREMIUM <br /> EYELASHES STUDIO
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white/90 text-lg md:text-2xl mt-4 max-w-3xl"
        >
          BEST IN KIGALI • Luxury Eyelash Extensions • Professional Lash Artists
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex gap-4 mt-8"
        >
          <a
          href="https://wa.me/250784658639"
          target="_blank"
          rel="noopener noreferrer"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Book Appointment
          </a>

          <a
            href="/services"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
