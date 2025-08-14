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
    <section className="relative bg-gradient-to-br from-academic-blue-50 via-white to-academic-blue-100/30 min-h-screen flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-academic-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-academic-blue-300/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          {/* Decorative Stars */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="flex items-center space-x-2">
                <Star className="text-academic-blue-500 w-6 h-6 fill-current animate-pulse" />
                <Star className="text-academic-blue-400 w-5 h-5 fill-current animate-pulse delay-100" />
                <Star className="text-academic-blue-300 w-4 h-4 fill-current animate-pulse delay-200" />
              </div>
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-academic-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Transform Your 
            <span className="block bg-gradient-to-r from-academic-blue-600 via-academic-blue-500 to-academic-blue-700 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Join Academic Excellence Masterclass and unlock your full potential with 
            <span className="font-medium text-academic-blue-600"> personalized coaching</span>, 
            proven strategies, and expert mentorship that has helped over 
            <span className="font-bold text-academic-blue-700">100 students</span> achieve remarkable success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <button 
              onClick={handleRegistration}
              className="group relative bg-gradient-to-r from-academic-blue-600 to-academic-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-academic-blue-700 hover:to-academic-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden"
              data-testid="button-start-success-story"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <GraduationCap className="w-6 h-6 mr-3 inline" />
              Start Your Success Story
            </button>
            <button 
              onClick={scrollToInstructor}
              className="group text-academic-blue-600 hover:text-academic-blue-700 font-bold text-xl transition-all duration-300 flex items-center"
              data-testid="button-meet-mentor"
            >
              Meet Your Mentor 
              <ArrowDown className="w-6 h-6 ml-3 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-academic-blue-100/50" data-testid="stat-students">
              <div className="bg-gradient-to-br from-academic-blue-500 to-academic-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100+</div>
              <div className="text-gray-600 font-medium">Students Mentored</div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-academic-blue-100/50" data-testid="stat-excellence">
              <div className="bg-gradient-to-br from-academic-blue-500 to-academic-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1st Class</div>
              <div className="text-gray-600 font-medium">Excellence Achieved</div>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-academic-blue-100/50" data-testid="stat-recognition">
              <div className="bg-gradient-to-br from-academic-blue-500 to-academic-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Global</div>
              <div className="text-gray-600 font-medium">Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
