"use client";

import { motion } from "framer-motion";
import { Instagram, Music2, Facebook, Youtube, PhoneCall } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    link: "https://instagram.com/mimi_lashes21",
    icon: <Instagram size={32} color="#E1306C" />, // Instagram pink
    hover: "#ff4f8a",
  },
  {
    name: "TikTok",
    link: "https://tiktok.com/@mimi_lashes21",
    icon: <Music2 size={32} color="#010101" />, // TikTok dark
    hover: "#ff0050",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/250784658639",
    icon: <PhoneCall size={32} color="#25D366" />, // WhatsApp green
    hover: "#32ff7e",
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: <Facebook size={32} color="#1877f2" />, // Facebook blue
    hover: "#2e90ff",
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    icon: <Youtube size={32} color="#ff0000" />, // YouTube red
    hover: "#ff4b4b",
  },
];

// Parent animation (controls stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Child animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
};

export default function SocialMedia() {
  return (
    <section
      className="
        py-20 
        text-white 
        text-center 
        bg-[rgba(212,175,55,0.08)]   /* Soft transparent gold */
        backdrop-blur-sm 
      "
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "-20%", amount: 0.3 }}
        className="text-4xl font-bold text-[#d4af37]"
      >
        Follow Us Online
      </motion.h2>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ margin: "-20%", amount: 0.3 }}
        className="text-black/70 mt-2 mb-10 font-medium"
      >
        Stay updated with our latest lash sets, beauty content & promos.
      </motion.p>

      {/* SOCIAL ICONS (Stagger animation every scroll) */}
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-6 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Trigger every time user scrolls
      >
        {socials.map((social, i) => (
          <motion.a
            key={i}
            variants={itemVariants}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-col items-center justify-center
              p-4 rounded-xl 
              bg-white/40 
              hover:bg-white/70 
              transition-all 
              backdrop-blur-md 
              shadow-sm
            "
            style={{
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector("svg");
              icon.style.color = social.hover;
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector("svg");
              icon.style.color = "";
            }}
          >
            {social.icon}
            <span className="mt-2 text-sm text-black">{social.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
