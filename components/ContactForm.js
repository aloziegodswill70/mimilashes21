"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSubmit = () => {
    const text = `Hello MIMIlashes 💕%0A
Full Name: ${name}%0A
Phone: ${phone}%0A
Message: ${message}`;

    window.open(
      `https://wa.me/250784658639?text=${text}`,
      "_blank"
    );
  };

  return (
    <form
      className="max-w-xl mx-auto bg-white shadow-xl border border-tealDark rounded-xl p-8 space-y-6"
    >
      <div>
        <label className="block font-semibold text-tealDark">
          Full Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-tealDark"
        />
      </div>

      <div>
        <label className="block font-semibold text-tealDark">
          Message
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-tealDark"
        />
      </div>

      {/* WhatsApp Submit Button */}
      <button
        type="button"
        onClick={handleWhatsAppSubmit}
        className="w-full bg-tealDark text-white py-3 rounded-lg font-semibold hover:bg-black transition"
      >
        Submit
      </button>
    </form>
  );
}
