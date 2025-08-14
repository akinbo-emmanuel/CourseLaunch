import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/logo _1755149938176.jpg";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegistration = () => {
    // TODO: Replace with actual external registration URL
    window.open("https://external-registration-page.com", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-auto">
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Academic Excellence Masterclass Logo"
              className="h-10 md:h-16 w-auto logo-nav"
              data-testid="logo-image"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-academic-blue-600 transition-colors duration-200 font-medium"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("instructor")}
              className="text-gray-600 hover:text-academic-blue-600 transition-colors duration-200 font-medium"
              data-testid="nav-instructor"
            >
              Instructor
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-academic-blue-600 transition-colors duration-200 font-medium"
              data-testid="nav-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={handleRegistration}
              className="bg-academic-blue-600 text-white px-6 py-2 rounded-lg hover:bg-academic-blue-700 transition-colors duration-200 font-semibold"
              data-testid="button-register-nav"
            >
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 mt-4 py-4 space-y-4 text-xs">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-600 hover:text-academic-blue-600 transition-colors duration-200 font-medium"
              data-testid="nav-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("instructor")}
              className="block w-full text-left text-gray-600 hover:text-academic-blue-600 transition-colors duration-200 font-medium"
              data-testid="nav-instructor-mobile"
            >
              Instructor
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-gray-600 hover:text-academic-blue-600 transition-colors duration-200 font-medium"
              data-testid="nav-testimonials-mobile"
            >
              Testimonials
            </button>
            <button
              onClick={handleRegistration}
              className="bg-academic-blue-600 text-white px-6 py-2 rounded-lg hover:bg-academic-blue-700 transition-colors duration-200 font-semibold w-full"
              data-testid="button-register-mobile"
            >
              Register Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
