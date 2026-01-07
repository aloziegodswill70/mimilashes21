"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rihana Beauty",
    text: "The best lash experience ever! My lashes stayed fresh for weeks.",
  },
  {
    name: "Queen Esther",
    text: "Her professionalism is top notch. Highly recommended!",
  },
  {
    name: "Joy Glow",
    text: "I love the ambience, the service, everything! 10/10.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        py-24 
        bg-gradient-to-br from-[#fff7f5] via-[#ffe9e2] to-white
        text-tealDark
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-[#d4af37]"
        >
          What Clients Are Saying ❤️
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.35, // EPISODIC SLIDING
                type: "spring",
              }}
              viewport={{ once: true }}
              className="
                bg-white 
                p-8 
                rounded-2xl 
                shadow-xl 
                border border-[#d4af37]/30
                hover:shadow-2xl 
                transition
              "
            >
              <p className="italic text-gray-700 mb-4">“{r.text}”</p>
              <p className="font-semibold text-[#d4af37]">— {r.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
