"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Classic Set",
    price: "RWF 25,000",
    benefits: ["Natural look", "Soft finish", "1.5 hour session"],
  },
  {
    name: "Hybrid Set",
    price: "RWF 30,000",
    benefits: ["Fuller look", "Mix of classic + volume", "2 hour session"],
  },
  {
    name: "Volume Set",
    price: "RWF 35,000",
    benefits: ["Bold glam look", "Long-lasting", "2.5 hour session"],
  },
];

export default function PricingSection() {
  return (
    <section
      className="
        py-24 
        bg-gradient-to-br 
        from-[#fff8e6] 
        via-[#fdeedb] 
        to-[#fff5e1] 
        text-[#4b3b2a]
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center text-[#d4af37] mb-16">
          Pricing Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="
                bg-white 
                p-8 
                rounded-2xl 
                shadow-xl 
                border border-[#d4af37]/30
              "
            >
              <h3 className="text-2xl font-bold text-center text-[#d4af37] mb-2">
                {plan.name}
              </h3>

              <p className="text-center text-3xl font-extrabold mb-6 text-[#4b3b2a]">
                {plan.price}
              </p>

              <ul className="space-y-3 text-gray-700">
                {plan.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="text-[#d4af37]" size={20} /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
