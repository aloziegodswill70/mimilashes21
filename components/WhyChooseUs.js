"use client";

import { motion } from "framer-motion";
import { FaStar, FaSpa, FaShieldAlt, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: <FaStar className="text-gold text-4xl" />,
    title: "Top Quality Lash Extensions",
    desc: "We use only premium-quality lash fibers designed for comfort and long-lasting wear.",
  },
  {
    icon: <FaSpa className="text-gold text-4xl" />,
    title: "Relaxing Studio Experience",
    desc: "Enjoy a calm, clean and feminine environment during your lash session.",
  },
  {
    icon: <FaShieldAlt className="text-gold text-4xl" />,
    title: "Safe & Professional",
    desc: "We prioritize hygiene, safety, and the health of your natural lashes.",
  },
  {
    icon: <FaHeart className="text-gold text-4xl" />,
    title: "Customized Beauty",
    desc: "Every lash set is tailored uniquely to your facial features and style preference.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-tealDark">Why Choose MIMIlashes?</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Premium service, feminine luxury, and unmatched lash artistry in Kigali.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>

            <h3 className="text-xl font-semibold text-tealDark">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-3">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
