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

    </main>
  );
}
