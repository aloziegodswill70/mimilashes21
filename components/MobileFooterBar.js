"use client";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

export default function MobileFooterBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white py-3 px-4 flex justify-around items-center shadow-xl z-50 md:hidden">

      <a
        href="https://wa.me/250784658639"
        target="_blank"
        className="flex flex-col items-center text-goldLight"
      >
        <FaWhatsapp size={22} />
        <span className="text-xs mt-1">WhatsApp</span>
      </a>

      <a
        href="https://instagram.com/mimi_lashes21?igsh=YTYzbG4yZnRtcm4%3D&utm_source=qr"
        target="_blank"
        className="flex flex-col items-center text-goldLight"
      >
        <FaInstagram size={22} />
        <span className="text-xs mt-1">Instagram</span>
      </a>

      <a
        href="tel:+250784658639"
        className="flex flex-col items-center text-goldLight"
      >
        <FaPhoneAlt size={22} />
        <span className="text-xs mt-1">Call</span>
      </a>

    </div>
  );
}
