import { GraduationCap, Trophy, Rocket, Edit, Clock } from "lucide-react";

export default function CTASection() {
  const handleRegistration = () => {
    window.open("https://external-registration-page.com", "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-academic-blue-600 via-academic-blue-700 to-academic-blue-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Your Journey to Academic Excellence 
            <span className="block text-white/90">Starts Here</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-12 max-w-5xl mx-auto opacity-95 font-light leading-relaxed">
            Join our exclusive, closed-door mentorship program and take the first step towards your own success story. 
            Register today for personalized guidance that will transform your academic performance.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center" data-testid="benefit-personalized-coaching">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Coaching</h3>
              <p className="text-sm opacity-80">Tailored strategies for your unique learning style and goals</p>
            </div>
            
            <div className="text-center" data-testid="benefit-proven-results">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm opacity-80">Track record of success with 100+ students mentored</p>
            </div>
            
            <div className="text-center" data-testid="benefit-lifetime-skills">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Lifetime Skills</h3>
              <p className="text-sm opacity-80">Build confidence, discipline, and growth mindset for life</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-8">
            <button 
              onClick={handleRegistration}
              className="group relative bg-white text-academic-blue-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
              data-testid="button-register-masterclass"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-academic-blue-50/0 via-academic-blue-50/50 to-academic-blue-50/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Edit className="w-6 h-6 mr-3 inline relative z-10" />
              <span className="relative z-10">Register for Masterclass</span>
            </button>
            <div className="flex items-center space-x-4 text-white/90" data-testid="text-limited-spots">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-medium">Limited spots available • Exclusive closed-door sessions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
