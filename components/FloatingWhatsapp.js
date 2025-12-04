"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/250784658639"
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
