import { GraduationCap, Trophy, Rocket, Edit, Clock } from "lucide-react";

export default function CTASection() {
  // Registration is handled directly by the href in the anchor tag
  // const handleRegistration = () => {
  //   // Function kept for potential future use
  // };

  return (
    <section className="relative py-20 bg-gradient-to-br from-academic-blue-600 via-academic-blue-700 to-academic-blue-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl/[150%] sm:text-4xl/[120%] lg:text-5xl/[120%] font-bold mb-8 leading-tight">
            Your Journey to Academic Excellence{" "}
            <span className="md:block text-white/80">Starts Here</span>
          </h2>
          <p className="text-sm md:text-base mb-12 max-w-5xl mx-auto opacity-95 font-light leading-relaxed">
            Join our exclusive, closed-door mentorship program and take the
            first step towards your own success story. Register today for
            personalized guidance that will transform your academic performance.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <div
              className="text-center"
              data-testid="benefit-personalized-coaching"
            >
              <div className="bg-white/10 size-14 md:size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="size-5 md:size-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">
                Personalized Coaching
              </h3>
              <p className="text-xs opacity-80">
                Tailored strategies for your unique learning style and goals
              </p>
            </div>

            <div className="text-center" data-testid="benefit-proven-results">
              <div className="bg-white/10 size-14 md:size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="size-5 md:size-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">Proven Results</h3>
              <p className="text-xs opacity-80">
                Track record of success with 100+ students mentored
              </p>
            </div>

            <div className="text-center" data-testid="benefit-lifetime-skills">
              <div className="bg-white/10 size-14 md:size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="size-5 md:size-6" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">Lifetime Skills</h3>
              <p className="text-xs opacity-80">
                Build confidence, discipline, and growth mindset for life
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            <a href="https://selar.com/aem" target="_blank" rel="noopener noreferrer">
              <button
                className="group relative bg-white text-academic-blue-600 px-6 md:px-8 py-5 md:py-6 rounded-2xl text-2xl font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden flex items-center gap-2"
                data-testid="button-register-masterclass"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-academic-blue-50/0 via-academic-blue-50/50 to-academic-blue-50/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Edit className="size-4 relative z-10" />
                <span className="relative z-10 text-sm md:text-base">
                  Register for Masterclass
                </span>
              </button>
            </a>
            <div
              className="flex items-center space-x-2 text-white/90"
              data-testid="text-limited-spots"
            >
              <Clock className="size-3" />
              <span className="text-xs md:text-sm font-medium">
                Limited spots available • Exclusive closed-door sessions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
