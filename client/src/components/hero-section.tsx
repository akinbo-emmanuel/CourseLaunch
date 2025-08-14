import { GraduationCap, Star, Users, Award, Globe, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const handleRegistration = () => {
    window.open("https://external-registration-page.com", "_blank");
  };

  const scrollToInstructor = () => {
    const element = document.getElementById("instructor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-academic-blue-50 to-white py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-academic-blue-100/30 to-white/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          {/* Decorative Stars */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-1">
              <Star className="text-academic-blue-500 w-5 h-5 fill-current" />
              <Star className="text-academic-blue-400 w-4 h-4 fill-current" />
              <Star className="text-academic-blue-300 w-3 h-3 fill-current" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your <span className="text-academic-blue-600">Academic Journey</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join Academic Excellence Masterclass and unlock your full potential with personalized coaching, 
            proven strategies, and expert mentorship that has helped over 100 students achieve remarkable success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleRegistration}
              className="bg-academic-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-academic-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              data-testid="button-start-success-story"
            >
              <GraduationCap className="w-5 h-5 mr-2 inline" />
              Start Your Success Story
            </button>
            <button 
              onClick={scrollToInstructor}
              className="text-academic-blue-600 hover:text-academic-blue-700 font-semibold text-lg transition-colors duration-200"
              data-testid="button-meet-mentor"
            >
              Meet Your Mentor <ArrowDown className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
            <div className="flex items-center" data-testid="stat-students">
              <Users className="h-5 w-5 text-academic-blue-500 mr-2" />
              <span>100+ Students Mentored</span>
            </div>
            <div className="flex items-center" data-testid="stat-excellence">
              <Award className="h-5 w-5 text-academic-blue-500 mr-2" />
              <span>First-Class Excellence</span>
            </div>
            <div className="flex items-center" data-testid="stat-recognition">
              <Globe className="h-5 w-5 text-academic-blue-500 mr-2" />
              <span>International Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
