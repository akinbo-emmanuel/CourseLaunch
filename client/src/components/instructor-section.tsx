import {
  Medal,
  GraduationCap,
  Award,
  University,
  Globe,
  Calendar,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";
import mentorImage from "@assets/WhatsApp Image 2025-08-09 at 15.39.51_1755153100108.jpeg";

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
      email: "mailto:olajire@academicexcellence.com",
    };

    window.open(urls[platform as keyof typeof urls] || "#", "_blank");
  };

  return (
    <section
      id="instructor"
      className="py-20 bg-gradient-to-br from-white to-academic-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl/[150%] sm:text-4xl/[120%] lg:text-5xl/[120%] font-bold text-gray-900 mb-6">
            Meet Your Mentor
          </h2>
          <div className="w-48 md:w-64 h-1 bg-gradient-to-r from-academic-blue-500 to-academic-blue-700 md:mx-auto mb-8 rounded-full"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Learn from a scholar who has walked the path to academic excellence
            and is committed to guiding you to your own success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <img
              src={mentorImage}
              alt="Professional portrait of Olajire Damilola Adedokun"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square md:aspect-[3/4]"
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
              <h3
                className="md:text-2xl text-lg font-bold text-gray-900 md:mb-2 mb-1"
                data-testid="text-instructor-name"
              >
                Olajire Damilola Adedokun
              </h3>
              <p className="text-academic-blue-600 font-semibold text-xs md:text-sm mb-4">
                Lead Coach & Academic Excellence Mentor
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-6 text-[0.625rem]">
                <span className="bg-academic-blue-100 text-academic-blue-800 px-3 py-1 rounded-full font-medium flex items-center">
                  <Medal className="size-3 mr-1" />
                  First-Class Honours
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium flex items-center">
                  <GraduationCap className="size-3 mr-1" />
                  Master's Student
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium flex items-center">
                  <Award className="size-3 mr-1" />
                  EU Scholarship
                </span>
              </div>
            </div>

            <p
              className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base text-justify"
              data-testid="text-instructor-bio"
            >
              Olajire Damilola Adedokun is on a mission to help students unlock
              their full potential, excel academically, and become leaders in
              their chosen fields. A scholar par excellence, he knows what it
              takes to succeed. Graduating with First-Class Honours in
              Agricultural Science from Landmark University under the
              prestigious David Oyedepo Foundation Scholarship.
            </p>

            {/* Academic Achievements */}
            <div className="mb-8 flex flex-wrap gap-2">
              <div
                className="flex-1 min-w-full md:min-w-fit border border-gray-200 rounded-[8px] p-2 py-4 bg-gray-50"
                data-testid="card-undergraduate"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
                  <div className="bg-academic-blue-100 p-2 rounded-lg">
                    <University className="w-5 h-5 text-academic-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                      First-Class Honours Graduate
                    </h4>
                    <p className="text-gray-600 text-xs">
                      Agricultural Science, Landmark University
                    </p>
                    <p className="text-gray-500 text-[0.625rem] mt-1">
                      David Oyedepo Foundation Scholarship Recipient
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex-1 min-w-full md:min-w-fit border border-gray-200 rounded-[8px] p-2 py-4 bg-gray-50"
                data-testid="card-masters"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-2 text-center md:text-left">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                      Master's Student
                    </h4>
                    <p className="text-gray-600 text-xs">
                      Organic Agriculture, CIHEAM Bari, Italy
                    </p>
                    <p className="text-gray-500 text-[0.625rem] mt-1">
                      European Union & Italian Ministry Scholarships
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              <div
                className="text-center bg-academic-blue-50 p-4 rounded-[8px]"
                data-testid="stat-students-mentored"
              >
                <div className="text-lg font-bold text-academic-blue-600 mb-1">
                  100+
                </div>
                <div className="text-xs text-gray-600">Students Mentored</div>
              </div>
              <div
                className="text-center bg-academic-blue-50 p-4 rounded-[8px]"
                data-testid="stat-years-experience"
              >
                <div className="text-lg font-bold text-academic-blue-600 mb-1">
                  5+
                </div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
            </div>

            <blockquote
              className="italic text-gray-600 border-l-4 border-academic-blue-600 pl-2 mb-6 text-xs"
              data-testid="quote-instructor"
            >
              "If you're ready to take your academic journey to the next level,
              I am the mentor who can help you get there."
            </blockquote>

            <button
              onClick={handleRegistration}
              className="group relative bg-gradient-to-r from-academic-blue-600 to-academic-blue-700 text-white px-4 md:px-10 py-5 rounded-xl text-sm md:text-base font-bold hover:from-academic-blue-700 hover:to-academic-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden flex items-center gap-2"
              data-testid="button-book-mentorship"
            >
              <Calendar className="size-4 mr-2 inline" />
              Book Your Mentorship Session
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
