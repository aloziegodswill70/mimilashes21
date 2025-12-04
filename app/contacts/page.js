"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitted! We will contact you shortly.");
  };

  return (
    <section className="px-4 py-20">
      <h1 className="text-4xl font-bold text-tealDark text-center mb-12">
        Book an Appointment
      </h1>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-xl border border-tealDark rounded-xl p-8 space-y-6"
      >
        <div>
          <label className="block font-semibold text-tealDark">
            Full Name
          </label>
          <input
            type="text"
            required
            className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-tealDark"
          />
        </div>

        <div>
          <label className="block font-semibold text-tealDark">
            Phone Number
          </label>
          <input
            type="text"
            required
            className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-tealDark"
          />
        </div>

        <div>
          <label className="block font-semibold text-tealDark">Message</label>
          <textarea
            required
            className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-tealDark"
          ></textarea>
        </div>

        <button className="w-full bg-tealDark text-white py-3 rounded-lg font-semibold hover:bg-black transition">
          Submit
        </button>

        {status && (
          <p className="text-green-600 text-center mt-4">{status}</p>
        )}
      </form>

      {/* ================= LOCATION SECTION ================= */}
      <div className="text-center mt-20">
        <h3 className="text-3xl font-bold text-tealDark">Our Location</h3>

        <p className="mt-4 text-lg">📍 Unify House, KN 7 Ave, Kigali, Rwanda</p>
        <p className="mt-1 text-lg">📞 +250 784 658 639</p>

        {/* GOOGLE MAP */}
        <div className="mt-10 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994.002501381938!2d30.060897574999564!3d-1.953538398030785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca1e22ce76adf%3A0x8b1f7bd5887450a4!2sUnify%20House%2C%20KN%207%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1736012345678!5m2!1sen!2srw"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* ================= SOCIAL MEDIA ICONS ================= */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-tealDark mb-6">Follow Us</h3>

        <div className="flex justify-center gap-6 text-tealDark text-4xl">
          <a
            href="https://instagram.com/mimi_lashes21"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://tiktok.com/@mimi_lashes21"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaTiktok />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://wa.me/250784658639"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
