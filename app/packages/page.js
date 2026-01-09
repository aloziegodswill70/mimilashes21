export const metadata = {
  title: "Eyelash Packages & Prices | MIMIlashes21 Kigali",
  description:
    "View our eyelash extension packages and affordable prices in Kigali, Rwanda.",
};

export default function PackagesPage() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-tealDark mb-12">
        Lash Packages
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { name: "Classic Set", price: "RWF 25,000" },
          { name: "Hybrid Set", price: "RWF 35,000" },
          { name: "Volume Set", price: "RWF 45,000" },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-2xl p-8 shadow-md text-center bg-white"
          >
            <h2 className="text-2xl font-semibold text-tealDark mb-3">
              {item.name}
            </h2>
            <p className="text-3xl font-bold text-[#d4af37]">
              {item.price}
            </p>
            <p className="mt-6">
            Looking for the{" "}
            <a
                href="/best-eyelashes-salon-in-kigali-rwanda"
                className="text-[#d4af37] font-semibold underline"
            >
                best eyelash salon in Kigali?
            </a>{" "}
            MIMIlashes21 offers premium lash services you can trust.
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
