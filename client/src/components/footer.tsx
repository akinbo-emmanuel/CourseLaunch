import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import logoImage from "@assets/logo _1755149938176.jpg";

export default function Footer() {
  const handleSocialLink = (platform: string) => {
    // TODO: Replace with actual social media URLs
    const urls = {
      linkedin: "https://linkedin.com/in/academicexcellence",
      twitter: "https://twitter.com/academicexcellence",
      instagram: "https://instagram.com/academicexcellence",
      facebook: "https://facebook.com/academicexcellence",
    };

    window.open(urls[platform as keyof typeof urls] || "#", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logoImage}
                alt="Academic Excellence Masterclass Logo"
                className="h-12 w-auto mr-3 logo-footer"
                data-testid="logo-footer"
              />
              <span className="font-bold md:text-lg">
                Academic Excellence Masterclass
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-xs md:text-sm">
              Empowering students to unlock their full potential through
              personalized coaching, proven strategies, and expert mentorship.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialLink("linkedin")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="size-3 md:size-4" />
              </button>
              <button
                onClick={() => handleSocialLink("twitter")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-footer-twitter"
              >
                <Twitter className="size-3 md:size-4" />
              </button>
              <button
                onClick={() => handleSocialLink("instagram")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-footer-instagram"
              >
                <Instagram className="size-3 md:size-4" />
              </button>
              <button
                onClick={() => handleSocialLink("facebook")}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                data-testid="link-footer-facebook"
              >
                <Facebook className="size-3 md:size-4" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors duration-200"
                  data-testid="link-footer-about"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("instructor")}
                  className="hover:text-white transition-colors duration-200"
                  data-testid="link-footer-instructor"
                >
                  Instructor
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-white transition-colors duration-200"
                  data-testid="link-footer-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  data-testid="link-footer-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Contact Info</h4>
            <div className="text-gray-400 space-y-2 text-xs md:text-sm">
              <p data-testid="text-footer-email">
                <Mail className="size-2 md:size-3 mr-2 inline" />
                info@academicexcellence.com
              </p>
              <p data-testid="text-footer-phone">
                <Phone className="size-2 md:size-3 mr-2 inline" />
                +234 XXX XXX XXXX
              </p>
              <p data-testid="text-footer-hours">
                <Clock className="size-2 md:size-3 mr-2 inline" />
                Mon - Fri: 9AM - 6PM WAT
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-[0.625rem] md:text-xs space-y-1">
          <p data-testid="text-footer-copyright">
            &copy; {getCurrentYear()} Academic Excellence Masterclass. All
            rights reserved.
          </p>
          <p data-testid="text-footer-copyright">
            Powered by{" "}
            <a
              href="https://emmanuelakinbo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-200 underline"
            >
              Emmanuel Akinbo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
