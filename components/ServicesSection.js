"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Classic Lashes",
    price: "25,000 RWF",
    desc: "A natural enhancement giving you a clean, simple lash look.",
  },
  {
    title: "Hybrid Lashes",
    price: "30,000 RWF",
    desc: "A beautiful mix of classic and volume for a fuller look.",
  },
  {
    title: "Volume Lashes",
    price: "35,000 RWF",
    desc: "Soft, fluffy fans giving dramatic fullness and beauty.",
  },
  {
    title: "Mega Volume",
    price: "40,000 RWF",
    desc: "Ultra-full glamorous lashes for bold queens.",
  },
];

export default function ServicesSection() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-tealDark text-center mb-12">
        Our Lash Services
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border border-tealDark p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white"
          >
            <h2 className="text-2xl font-bold text-tealDark">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.desc}</p>

            <p className="mt-4 text-xl font-semibold text-black">
              {service.price}
            </p>

            <a
              href="/contact"
              className="mt-6 inline-block bg-tealDark text-white px-4 py-2 rounded-lg hover:bg-black transition"
            >
              Book Now
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
