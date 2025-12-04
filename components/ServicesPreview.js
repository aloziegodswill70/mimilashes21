"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Classic Eyelash Extensions",
    desc: "Soft, natural-looking lashes that enhance your beauty effortlessly.",
    img: "/images/mimiservices.jpeg",
  },
  {
    title: "Hybrid Eyelash Extensions",
    desc: "A perfect mix of volume & classic lashes for a fuller feminine look.",
    img: "/images/mimiservices.jpeg",
  },
  {
    title: "Volume Eyelash Extensions",
    desc: "Bold, fluffy, glamorous volume lashes for a striking appearance.",
    img: "/images/mimiservices.jpeg",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-tealDark">Our Services</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Luxury eyelash extension services designed to fit your unique style.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <Image
              src="/images/mimiservices.jpeg"
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-tealDark">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-2">{service.desc}</p>

              <a
                href="/services"
                className="inline-block mt-4 bg-tealDark text-white px-5 py-2 rounded-lg hover:bg-black transition"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-14">
        <a
          href="/services"
          className="bg-tealDark text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition"
        >
          View All Services
        </a>
      </div>
    </section>
  );
}
