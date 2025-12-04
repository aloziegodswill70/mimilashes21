"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-14 text-[#d4af37]">
          Before & After Magic ✨
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#111] p-4 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">Before</h3>
            <Image
              src="/images/lashlogo.jpeg"
              alt="before lashes"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </motion.div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#111] p-4 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#d4af37]">After</h3>
            <Image
              src="/images/lashlogo.jpeg"
              alt="after lashes"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
