import { Medal, GraduationCap, Award, University, Globe, Calendar, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export default function InstructorSection() {
  const handleRegistration = () => {
    window.open("https://external-registration-page.com", "_blank");
  };

  const handleSocialLink = (platform: string) => {
    // TODO: Replace with actual social media URLs
    const urls = {
      linkedin: "https://linkedin.com/in/olajire-adedokun",
      twitter: "https://twitter.com/olajire_adedokun",
      instagram: "https://instagram.com/olajire_adedokun",
      email: "mailto:olajire@academicexcellence.com"
    };
    
    window.open(urls[platform as keyof typeof urls] || "#", "_blank");
  };

  return (
    <section id="instructor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Meet Your Mentor
          </h2>
          <div className="w-24 h-1 bg-academic-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from a scholar who has walked the path to academic excellence and is committed to guiding you to your own success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=700&q=80" 
              alt="Professional portrait of Olajire Damilola Adedokun" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              data-testid="img-instructor-photo"
            />
            
            {/* Social Media Links */}
            <div className="mt-8 flex justify-center space-x-6">
              <button 
                onClick={() => handleSocialLink("linkedin")}
                className="bg-academic-blue-600 text-white p-3 rounded-full hover:bg-academic-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-instructor-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialLink("twitter")}
                className="bg-academic-blue-600 text-white p-3 rounded-full hover:bg-academic-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-instructor-twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialLink("instagram")}
                className="bg-academic-blue-600 text-white p-3 rounded-full hover:bg-academic-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-instructor-instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialLink("email")}
                className="bg-academic-blue-600 text-white p-3 rounded-full hover:bg-academic-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                data-testid="link-instructor-email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2" data-testid="text-instructor-name">
                Olajire Damilola Adedokun
              </h3>
              <p className="text-academic-blue-600 font-semibold text-lg mb-4">
                Lead Coach & Academic Excellence Mentor
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-academic-blue-100 text-academic-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Medal className="w-4 h-4 mr-1" />
                  First-Class Honours
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Master's Student
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  EU Scholarship
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="text-instructor-bio">
              Olajire Damilola Adedokun is on a mission to help students unlock their full potential, excel academically, and become leaders in their chosen fields. A scholar par excellence, he knows what it takes to succeed. Graduating with First-Class Honours in Agricultural Science from Landmark University under the prestigious David Oyedepo Foundation Scholarship.
            </p>
            
            {/* Academic Achievements */}
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50" data-testid="card-undergraduate">
                <div className="flex items-start">
                  <div className="bg-academic-blue-100 p-2 rounded-lg mr-4">
                    <University className="w-5 h-5 text-academic-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">First-Class Honours Graduate</h4>
                    <p className="text-gray-600 text-sm">Agricultural Science, Landmark University</p>
                    <p className="text-gray-500 text-xs mt-1">David Oyedepo Foundation Scholarship Recipient</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50" data-testid="card-masters">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Master's Student</h4>
                    <p className="text-gray-600 text-sm">Organic Agriculture, CIHEAM Bari, Italy</p>
                    <p className="text-gray-500 text-xs mt-1">European Union & Italian Ministry Scholarships</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center bg-academic-blue-50 p-4 rounded-xl" data-testid="stat-students-mentored">
                <div className="text-2xl font-bold text-academic-blue-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Students Mentored</div>
              </div>
              <div className="text-center bg-academic-blue-50 p-4 rounded-xl" data-testid="stat-years-experience">
                <div className="text-2xl font-bold text-academic-blue-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <blockquote className="italic text-gray-600 border-l-4 border-academic-blue-600 pl-4 mb-6" data-testid="quote-instructor">
              "If you're ready to take your academic journey to the next level, I am the mentor who can help you get there."
            </blockquote>
            
            <button 
              onClick={handleRegistration}
              className="bg-academic-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-academic-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              data-testid="button-book-mentorship"
            >
              <Calendar className="w-5 h-5 mr-2 inline" />
              Book Your Mentorship Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
