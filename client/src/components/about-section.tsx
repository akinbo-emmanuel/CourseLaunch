import { Target, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const handleRegistration = () => {
    window.open("https://external-registration-page.com", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Academic Excellence Masterclass
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-academic-blue-500 to-academic-blue-700 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80" 
              alt="Students studying in a modern university library" 
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-academic-success"
            />
          </div>
          
          <div className="animate-fade-in">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="text-intro-message">
              As the Lead Coach of Academic Excellence Masterclass, it is my passion and commitment to help students unlock their full potential and excel in their academic journey. Our organization was founded with a clear purpose: to guide, coach, and mentor students towards achieving excellence, not just in their grades, but in their confidence, discipline, and lifelong learning skills.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through personalized coaching and proven mentorship strategies, we empower students to overcome challenges, develop strong study habits, and approach learning with purpose and enthusiasm.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-academic-blue-100/50" data-testid="card-personalized-coaching">
                <div className="bg-gradient-to-br from-academic-blue-500 to-academic-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Personalized Coaching</h3>
                <p className="text-gray-600 leading-relaxed">Tailored strategies designed specifically for your academic goals and learning style.</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-academic-blue-100/50" data-testid="card-proven-results">
                <div className="bg-gradient-to-br from-academic-blue-500 to-academic-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Proven Results</h3>
                <p className="text-gray-600 leading-relaxed">Track record of helping students achieve remarkable academic improvement and success.</p>
              </div>
            </div>
            
            <button 
              onClick={handleRegistration}
              className="group bg-gradient-to-r from-academic-blue-600 to-academic-blue-700 text-white px-10 py-4 rounded-2xl font-bold hover:from-academic-blue-700 hover:to-academic-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              data-testid="button-join-masterclass"
            >
              <span className="relative z-10">Join Our Masterclass</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
