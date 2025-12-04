"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-tealDark">

      {/* Background Image */}
      <Image
        src="/images/lashlogo.jpeg"
        alt="MIMIlashes Kigali"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          Kigali’s Premium Eyelash Studio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white/90 text-xl md:text-2xl mt-4 max-w-2xl"
        >
          Transform your beauty with professionally fitted luxury eyelash extensions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex gap-4 mt-8"
        >
          <a
            href="/contacts"
            className="bg-tealDark border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-tealDark transition"
          >
            Book Appointment
          </a>

          <a
            href="/services"
            className="bg-white text-tealDark px-6 py-3 rounded-lg font-semibold hover:bg-gold transition"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
