"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Amara Beauty",
    text: "The best lash experience ever! My lashes stayed fresh for weeks.",
  },
  {
    name: "Queen Esther",
    text: "Her professionalism is top notch. Highly recommended!",
  },
  {
    name: "Chichi Glow",
    text: "I love the ambience, the service, everything! 10/10.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-14 text-[#d4af37]">
          What Clients Are Saying ❤️
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#111] p-7 rounded-2xl shadow-xl border border-[#d4af37]/20"
            >
              <p className="italic mb-4">“{r.text}”</p>
              <p className="font-semibold text-[#d4af37]">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
