"use client";

import { motion } from "framer-motion";

export default function GalleryPreview() {
  const galleryImages = [
    "/images/lashlogo.jpeg",
    "/images/mimiservices.jpeg",
    "/images/mimiinstagram.jpeg",
    "/images/prices.jpeg",
    "/images/mimiservices.jpeg",
    "/images/mimitiktok.jpeg",
  ];

  return (
    <section
      className="
        py-20 
        text-center 
        bg-gradient-to-br 
        from-[#fff8e6] 
        via-[#fdeedb] 
        to-[#fff5e1]
      "
    >
      <h2 className="text-4xl font-bold text-[#d4af37] mb-4">
        Gallery Preview
      </h2>
      <p className="text-gray-600 mb-10">
        A peek into our luxury lash transformations ✨
      </p>

      {/* ================= SLIDING GALLERY ================= */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate for seamless infinite scroll */}
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-6">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="min-w-[260px] h-[340px] bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <img
                    src={src}
                    alt="Mimi Lashes Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <p className="mt-8 text-gray-500 italic text-sm">
        More stunning lash sets coming soon…
      </p>
    </section>
  );
}
