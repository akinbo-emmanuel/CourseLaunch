import { GraduationCap, Trophy, Rocket, Edit, Clock } from "lucide-react";

export default function CTASection() {
  const handleRegistration = () => {
    window.open("https://external-registration-page.com", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-academic-blue-600 to-academic-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Journey to Academic Excellence Starts Here
          </h2>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleRegistration}
              className="bg-white text-academic-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
              data-testid="button-register-masterclass"
            >
              <Edit className="w-5 h-5 mr-2 inline" />
              Register for Masterclass
            </button>
            <p className="text-sm opacity-80" data-testid="text-limited-spots">
              <Clock className="w-4 h-4 mr-1 inline" />
              Limited spots available • Exclusive closed-door sessions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
