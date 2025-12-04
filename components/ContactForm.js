"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitted! We will contact you shortly.");
  };

  return (
    <section>
      <h1 className="text-4xl font-bold text-tealDark text-center mb-10">
        Book an Appointment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-xl border border-tealDark rounded-xl p-8 space-y-6"
      >
        <div>
          <label className="block font-semibold text-tealDark">Full Name</label>
          <input
            type="text"
            required
            className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold text-tealDark">Phone Number</label>
          <input
            type="text"
            required
            className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block font-semibold text-tealDark">Message</label>
          <textarea
            required
            className="w-full mt-2 border border-gray-300 px-4 py-3 rounded-lg h-32"
          ></textarea>
        </div>

        <button className="w-full bg-tealDark text-white py-3 rounded-lg font-semibold hover:bg-black transition">
          Submit
        </button>

        {status && (
          <p className="text-green-600 text-center mt-4">{status}</p>
        )}
      </form>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-tealDark">Location</h3>
        <p className="mt-2 text-lg">
          📍 Unify House, Kigali – Rwanda  
        </p>

        <p className="mt-2 text-lg">
          📞 +250 784658639  
        </p>
      </div>
    </section>
  );
}
