"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-[#1a1a1a] to-black text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 text-[#d4af37]"
      >
        Ready to Elevate Your Beauty?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white/80 mb-8 text-lg"
      >
        Click below to book your appointment instantly.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="https://wa.me/250784658639"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d4af37] text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-110 transition-transform inline-block"
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}
