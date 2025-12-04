"use client";

import { motion } from "framer-motion";

const images = [
  "/images/lashlogo.jpeg",
  "/images/mimiservices.jpeg",
  "/images/mimiinstagram.jpeg",
  "/images/prices.jpeg",
  "/images/mimiservices.jpeg",
  "/images/mimitiktok.jpeg"
];

export default function GalleryGrid() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-tealDark text-center mb-12">
        Gallery Showcase
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-xl border border-tealDark shadow-lg"
          >
            <img
              src={img}
              alt="Lash work"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
