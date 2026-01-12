import Link from "next/link";

export const metadata = {
  title: "List of Eyelashes Salon in Kigali | Best Lash Studios in Rwanda",
  description:
    "Looking for a list of eyelashes salons in Kigali, Rwanda? Discover top-rated lash studios and why MIMIlashes21 is the most trusted eyelash salon in Kigali.",
  keywords: [
    "list of eyelashes salon in kigali",
    "eyelash salons in kigali",
    "lash studios in kigali rwanda",
    "best eyelash salon in kigali",
    "where to do eyelashes in kigali",
    "mimilashes21",
    "luxury eyelash studio kigali",
    "women beauty salon in rwanda",
  ],
  alternates: {
    canonical: "https://mimilashes21.com/list-of-eyelashes-salon-in-kigali",
  },
};

export default function ListOfEyelashesSalonInKigali() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl md:text-5xl font-extrabold text-tealDark mb-6">
        List of Eyelashes Salon in Kigali
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Searching for a reliable <strong>list of eyelashes salons in Kigali</strong>?
        Kigali has several beauty studios offering lash services, but only a few
        truly stand out for quality, hygiene, and professionalism.
      </p>

      <p className="text-gray-700 mb-8">
        Below is a curated guide to eyelash salons in Kigali — with
        <strong> MIMIlashes21</strong> ranked as the top choice for women who want
        flawless, long-lasting eyelash extensions.
      </p>

      <h2 className="text-3xl font-bold text-tealDark mb-4">
        Top Eyelashes Salons in Kigali
      </h2>

      <div className="space-y-6 mb-12">
        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h3 className="text-2xl font-bold text-tealDark mb-2">
            1. MIMIlashes21 ⭐⭐⭐⭐⭐
          </h3>
          <p className="text-gray-700">
            A luxury eyelash studio in Kigali offering classic, hybrid, and
            volume lash extensions. Known for precision, hygiene, and
            personalized beauty results.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            📍 Unify House, Kigali – Rwanda
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm bg-white">
          <h3 className="text-xl font-semibold mb-2">
            2. Other Local Lash Studios
          </h3>
          <p className="text-gray-700">
            Kigali also has other independent lash technicians and beauty salons,
            but quality, safety, and consistency may vary.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-tealDark mb-4">
        Why MIMIlashes21 Is the Best Eyelash Salon in Kigali
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
        <li>Certified and experienced eyelash technician</li>
        <li>Luxury studio environment</li>
        <li>High-quality lash materials</li>
        <li>Safe application for sensitive eyes</li>
        <li>Excellent client reviews and repeat customers</li>
      </ul>

      <h2 className="text-3xl font-bold text-tealDark mb-4">
        Book Your Appointment Today
      </h2>

      <p className="text-gray-700 mb-6">
        If you’re choosing from a list of eyelashes salons in Kigali,
        <strong> MIMIlashes21</strong> is the trusted destination for premium
        eyelash services.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          href="/contacts"
          className="bg-tealDark text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
        >
          Book Appointment
        </Link>

        <a
          href="https://wa.me/250784658639"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-tealDark text-tealDark px-6 py-3 rounded-lg font-semibold hover:bg-tealDark hover:text-white transition"
        >
          WhatsApp Us
        </a>
      </div>

    </main>
  );
}
