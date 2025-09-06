import {
  GraduationCap,
  Star,
  Users,
  Award,
  Globe,
  ArrowDown,
} from "lucide-react";

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

  const perks = [
    {
      icon: <Users className="size-4 md:size-5 text-white" />,
      main: "100+",
      sub: "Students Mentored",
    },
    {
      icon: <Award className="size-4 md:size-5 text-white" />,
      main: "1st Class",
      sub: "Excellence Achieved",
    },
    {
      icon: <Globe className="size-4 md:size-5 text-white" />,
      main: "Global",
      sub: "Recognition",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Combined Background with Multiple Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-academic-blue-50 via-white to-academic-blue-100/30"></div>

        {/* Combined Radial Gradients */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1), transparent 50%)",
              "radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.05), transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.15), transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(147, 197, 253, 0.1), transparent 50%)",
            ].join(", "),
          }}
        ></div>

        {/* Animated Gradient Blobs */}
        <div
          className="absolute -top-48 -right-48 w-[36rem] h-[36rem] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 197, 253, 0.2) 0%, transparent 70%)",
            filter: "blur(64px)",
            animation: "float 20s ease-in-out infinite alternate",
          }}
        ></div>
        <div
          className="absolute -bottom-48 -left-48 w-[36rem] h-[36rem] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)",
            filter: "blur(64px)",
            animation: "float 24s ease-in-out infinite alternate-reverse",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          {/* Decorative Stars */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="flex items-center space-x-2">
                <Star className="text-academic-blue-500 size-5 fill-current animate-pulse" />
                <Star className="text-academic-blue-400 size-4 fill-current animate-pulse delay-100" />
                <Star className="text-academic-blue-300 size-3 fill-current animate-pulse delay-200" />
              </div>
              <div className="absolute -top-2 -right-2 size-1 bg-academic-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-left md:text-center leading-[150%] text-3xl sm:text-4xl/[120%] lg:text-5xl/[120%] font-extrabold text-gray-900 mb-6">
            Transform Your
            <span className="block bg-gradient-to-r from-academic-blue-600 via-academic-blue-500 to-academic-blue-700 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="md:text-center text-justify sm:text-lg lg:text-xl text-gray-700 mb-10 max-w-5xl mx-auto leading-relaxed font-light">
            Join Academic Excellence Masterclass and unlock your full potential
            with
            <span className="font-medium text-academic-blue-600">
              {" "}
              personalized coaching
            </span>
            , proven strategies, and expert mentorship that has helped over{" "}
            <span className="font-bold text-academic-blue-700">
              100 students
            </span>{" "}
            achieve remarkable success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-14">
            <a href="https://selar.com/aem" target="_blank">
              <button
                onClick={handleRegistration}
                className="group relative bg-gradient-to-r from-academic-blue-600 to-academic-blue-700 text-white px-4 md:px-10 py-5 rounded-[12px] text-sm md:text-base font-bold hover:from-academic-blue-700 hover:to-academic-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden flex items-center gap-2"
                data-testid="button-start-success-story"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <GraduationCap className="size-4 inline" />
                Start Your Success Story
              </button>
            </a>
            <button
              onClick={scrollToInstructor}
              className="group text-academic-blue-600 hover:text-academic-blue-700 font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2"
              data-testid="button-meet-mentor"
            >
              Meet Your Mentor
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-[12px] md:rounded-xl md:p-6 p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-academic-blue-100/50"
                data-testid="stat-students"
              >
                <div className="bg-gradient-to-br from-academic-blue-500 to-academic-blue-600 size-8 md:size-10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {perk.icon}
                </div>
                <div className="text-sm md:text-base font-bold text-gray-900 mb-1">
                  {perk.main}
                </div>
                <div className="text-gray-600 font-medium text-[0.625rem] md:text-sm">
                  {perk.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
