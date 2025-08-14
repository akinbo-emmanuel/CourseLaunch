import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import InstructorSection from "@/components/instructor-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <InstructorSection />
      <CTASection />
      <Footer />
    </div>
  );
}
