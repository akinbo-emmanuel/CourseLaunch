import { Target, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const handleRegistration = () => {
    window.open("https://external-registration-page.com", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Welcome to Academic Excellence Masterclass
          </h2>
          <div className="w-24 h-1 bg-academic-blue-600 mx-auto mb-8"></div>
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
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-academic-blue-50 p-6 rounded-xl" data-testid="card-personalized-coaching">
                <div className="text-academic-blue-600 mb-3">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Coaching</h3>
                <p className="text-gray-600 text-sm">Tailored strategies designed specifically for your academic goals and learning style.</p>
              </div>
              
              <div className="bg-academic-blue-50 p-6 rounded-xl" data-testid="card-proven-results">
                <div className="text-academic-blue-600 mb-3">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600 text-sm">Track record of helping students achieve remarkable academic improvement and success.</p>
              </div>
            </div>
            
            <button 
              onClick={handleRegistration}
              className="bg-academic-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-academic-blue-700 transition-colors duration-200"
              data-testid="button-join-masterclass"
            >
              Join Our Masterclass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
