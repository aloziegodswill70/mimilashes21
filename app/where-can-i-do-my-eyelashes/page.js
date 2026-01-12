import Link from "next/link";

export const metadata = {
  title: "Where Can I Do My Eyelashes? | Best Eyelash Studio in Kigali",
  description:
    "Wondering where you can do your eyelashes in Kigali, Rwanda? Visit MIMIlashes21 — a luxury eyelash studio offering classic, hybrid & volume lash extensions.",
  keywords: [
    "where can i do my eyelashes",
    "eyelash extensions near me",
    "eyelash studio in kigali",
    "best place to do eyelashes in rwanda",
    "lash technician in kigali",
    "mimilashes21",
    "luxury beauty studio kigali",
    "women beauty salon in kigali",
  ],
  alternates: {
    canonical: "https://mimilashes21.com/where-can-i-do-my-eyelashes",
  },
};

export default function WhereCanIDoMyEyelashes() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl md:text-5xl font-extrabold text-tealDark mb-6">
        Where Can I Do My Eyelashes?
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        If you’re asking <strong>“where can I do my eyelashes?”</strong>,
        the perfect answer in Kigali, Rwanda is <strong>MIMIlashes21</strong>.
        We specialize in professional eyelash extensions designed to enhance
        your natural beauty and confidence.
      </p>

      <p className="text-gray-700 mb-8">
        Our studio is trusted by women across Kigali for clean application,
        beautiful results, and a relaxing luxury experience.
      </p>

      <h2 className="text-3xl font-bold text-tealDark mb-4">
        The Best Place to Do Eyelashes in Kigali
      </h2>

      <p className="text-gray-700 mb-6">
        MIMIlashes21 is a premium eyelash studio offering customized lash styles
        for every woman. Whether you want something soft and natural or bold and
        glamorous, we’ve got you covered.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
        <li>Professional and certified lash technician</li>
        <li>Luxury, clean, and comfortable studio</li>
        <li>High-quality, lightweight lash extensions</li>
        <li>Safe for sensitive eyes</li>
        <li>Located conveniently in Kigali, Rwanda</li>
      </ul>

      <h2 className="text-3xl font-bold text-tealDark mb-4">
        Eyelash Services We Offer
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-10">
        <li><strong>Classic Lash Extensions</strong> – natural and elegant look</li>
        <li><strong>Hybrid Lash Extensions</strong> – fuller but soft finish</li>
        <li><strong>Volume Lashes</strong> – dramatic, fluffy lashes</li>
      </ul>

      <h2 className="text-3xl font-bold text-tealDark mb-4">
        Book Your Eyelashes Appointment Today
      </h2>

      <p className="text-gray-700 mb-6">
        Stop searching for where to do your eyelashes — <strong>MIMIlashes21</strong>
        is the trusted choice for women in Kigali who love beauty, elegance,
        and long-lasting lashes.
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
