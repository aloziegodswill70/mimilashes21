export const metadata = {
  title: "Beauty & Eyelash Blog 2026 | Mimilashes21 Kigali",
  description:
    "Top beauty tips, eyelash guides, and lash extension articles in Kigali Rwanda. Discover why Mimilashes21 is Kigali’s trusted beauty studio.",
  keywords: [
    "eyelash blog kigali",
    "beauty blog rwanda",
    "lash extensions kigali",
    "best eyelash salon in kigali",
    "mimilashes21 blog",
    "eyelash technician in kigali",
    "bridal lashes kigali",
    "affordable lashes rwanda",
    "beauty services for women in rwanda",
  ],
  alternates: {
    canonical: "https://mimilashes21.com/blog2026",
  },
};

export default function BlogLayout({ children }) {
  return (
    <section className="bg-[#fff8e6] text-gray-800 min-h-screen">
      {children}
    </section>
  );
}
