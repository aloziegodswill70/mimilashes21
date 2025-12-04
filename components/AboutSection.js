"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/lashlogo.jpeg"
            width={600}
            height={600}
            alt="MIMIlashes Kigali"
            className="rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-tealDark mb-6">
            About MIMIlashes
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            MIMIlashes is Kigali’s leading eyelash extension studio, dedicated
            to enhancing feminine beauty with elegance, precision, and luxury.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Founded by Mimi, a trained lash technician passionate about beauty
            and client satisfaction, our studio offers a serene environment,
            premium lash materials, and long-lasting results that boost your
            confidence.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Whether you want a natural look or full glam, we tailor each lash
            set to your unique style—ensuring comfort, safety, and beauty
            with every appointment.
          </p>

          <a
            href="/services"
            className="inline-block mt-8 bg-tealDark text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
