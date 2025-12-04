"use client";

import { motion } from "framer-motion";
import { Instagram, Music2, Facebook, Youtube, PhoneCall } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    link: "https://instagram.com/mimi_lashes21",
    icon: <Instagram size={32} />,
    color: "hover:text-[#d4af37]",
  },
  {
    name: "TikTok",
    link: "https://tiktok.com/@mimi_lashes21",
    icon: <Music2 size={32} />,
    color: "hover:text-[#d4af37]",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/250784658639",
    icon: <PhoneCall size={32} />,
    color: "hover:text-[#25D366]",
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: <Facebook size={32} />,
    color: "hover:text-[#1877f2]",
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    icon: <Youtube size={32} />,
    color: "hover:text-[#ff0000]",
  },
];

export default function SocialMedia() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-[#d4af37]"
      >
        Follow Us Online
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white/70 mt-2 mb-10"
      >
        Stay updated with new lash sets, promos, and beauty inspiration.
      </motion.p>

      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-6 px-6">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all ${social.color}`}
          >
            {social.icon}
            <span className="mt-2 text-sm">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
