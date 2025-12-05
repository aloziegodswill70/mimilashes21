"use client";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <BookOpen size={35} />,
    title: "1. Consultation",
    desc: "We analyze your eye shape & discuss the perfect lash style for you.",
  },
  {
    icon: <Sparkles size={35} />,
    title: "2. Application",
    desc: "We apply lightweight, long-lasting lash extensions with zero discomfort.",
  },
  {
    icon: <CheckCircle2 size={35} />,
    title: "3. Aftercare",
    desc: "We guide you on how to maintain your lashes for 3–4 weeks.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="py-24 
      bg-gradient-to-br from-[#fff7f5] via-[#ffece6] to-[#fff] 
      text-tealDark"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl text-center font-bold text-[#d4af37] mb-16">
          Our Luxury 3-Step Process
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl 
              border border-[#d4af37]/30 hover:shadow-2xl transition"
            >
              <div className="text-[#d4af37] flex justify-center mb-4">
                {step.icon}
              </div>

              <h3 className="font-bold text-xl mb-3 text-tealDark">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
