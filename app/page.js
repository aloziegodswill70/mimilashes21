import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import GalleryPreview from "../components/GalleryPreview";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SocialMedia from "../components/SocialMedia";
import PricingSection from "../components/PricingSection";



export default function Home() {
  return (
    <main className="pt-20">

      {/* HERO SECTION */}
      <Hero />

      <section id="services">
        <AboutSection />
      </section>


      {/* SERVICES PREVIEW */}
      <section id="services">
        <ServicesPreview />
      </section>

      {/* GALLERY PREVIEW */}
      <section id="gallery">
        <GalleryPreview />
      </section>

      {/* ABOUT THE BRAND */}
      <section id="about">
        <PricingSection />
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us">
        <WhyChooseUs />
      </section>

      {/* PROCESS SECTION */}
      <section id="process">
        <ProcessSection />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

       {/* TESTIMONIALS */}
      <section id="socialmedias">
        <SocialMedia />
      </section>

      <section className="py-12 px-6 text-center text-sm text-gray-600">
  <p className="mb-3 font-semibold">Explore More</p>

      <div className="flex flex-wrap justify-center gap-4 underline">
        <a href="/blog2026">About MIMIlashes21</a>
        <a href="/packages">Eyelash Packages</a>
        <a href="/best-eyelashes-salon-in-kigali-rwanda">
          Best Eyelashes Salon in Kigali
        </a>
        <a href="/where-can-i-fix-lashes-in-kigali-rwanda">
          Where to Fix Lashes in Kigali
        </a>
        <a href="/5-reasons-you-should-visit-mimilashes21">
          Why Choose MIMIlashes21
        </a>
      </div>
</section>


    </main>
  );
}
