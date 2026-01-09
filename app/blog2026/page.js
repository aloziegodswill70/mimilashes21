import Link from "next/link";

export default function Blog2026Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-[#d4af37] mb-6">
        Mimilashes21 Beauty Blog – 2026
      </h1>

      <p className="mb-12 text-lg">
        Welcome to the official <strong>Mimilashes21 Blog</strong>.  
        Here we share expert eyelash tips, beauty insights, and trusted guides
        for women in Kigali and across Rwanda.
      </p>

      {/* ================= BLOG LINKS ================= */}
      <div className="grid md:grid-cols-2 gap-8">

        <BlogCard
          title="Best Eyelash Technician in Kigali"
          href="/best-eyelash-technician-in-kigali"
        />

        <BlogCard
          title="Lashes for Weddings in Kigali"
          href="/lashes-for-weddings-in-kigali"
        />

        <BlogCard
          title="Affordable Lash Extensions in Kigali"
          href="/affordable-lash-extensions-in-kigali"
        />

        <BlogCard
          title="Why Women Love Mimilashes21"
          href="/why-women-love-mimilashes21"
        />

        <BlogCard
          title="Beauty Services for Women in Rwanda"
          href="/beauty-services-for-women-in-rwanda"
        />

        <BlogCard
          title="Classic Lash Extensions in Kigali"
          href="/classic-lash-extensions-in-kigali"
        />

        <BlogCard
          title="Volume Lashes in Kigali"
          href="/volume-lashes-in-kigali"
        />

        <BlogCard
          title="Hybrid Lashes in Kigali"
          href="/hybrid-lashes-in-kigali"
        />

        <BlogCard
          title="Eyelash Extension Aftercare"
          href="/eyelash-extension-aftercare"
        />

        <BlogCard
          title="Book Eyelashes in Kigali"
          href="/book-eyelashes-in-kigali"
        />

        <BlogCard
          title="Luxury Beauty Studio in Kigali"
          href="/luxury-beauty-studio-in-kigali"
        />

        <BlogCard
          title="Top Beauty Salon for Women in Kigali"
          href="/top-beauty-salon-for-women-in-kigali"
        />

      </div>

      {/* ================= CTA ================= */}
      <div className="mt-20 text-center">
        <p className="text-lg mb-4">
          Ready to elevate your beauty?
        </p>
        <Link
          href="/contacts"
          className="inline-block bg-[#d4af37] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Book an Appointment
        </Link>
      </div>
    </main>
  );
}

/* ================= REUSABLE CARD ================= */
function BlogCard({ title, href }) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-[#d4af37]/20"
    >
      <h2 className="text-xl font-bold text-[#333]">{title}</h2>
      <p className="text-sm text-gray-500 mt-2">
        Read full article →
      </p>
    </Link>
  );
}
