import { ExternalLink, Target, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const handleRegistration = () => {
    window.open("https://external-registration-page.com", "_blank");
  };

  const perks = [
    {
      icon: <Target className="size-4 md:size-5 text-white" />,
      title: "Personalized Coaching",
      content:
        "Tailored strategies designed specifically for your academic goals and learning style.",
    },
    {
      icon: <TrendingUp className="size-4 md:size-5 text-white" />,
      title: "Proven Results",
      content:
        "Track record of helping students achieve remarkable academic improvement and success.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-gray-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl/[150%] sm:text-4xl/[120%] lg:text-5xl/[120%] font-bold text-gray-900 mb-6">
            Welcome to Academic Excellence Masterclass
          </h2>
          <div className="w-48 md:w-64 h-1 bg-gradient-to-r from-academic-blue-500 to-academic-blue-700 md:mx-auto mb-8 rounded-full"></div>
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
            <p
              className="text-sm md:text-base text-justify text-gray-600 mb-6 leading-relaxed"
              data-testid="text-intro-message"
            >
              As the Lead Coach of Academic Excellence Masterclass, it is my
              passion and commitment to help students unlock their full
              potential and excel in their academic journey. Our organization
              was founded with a clear purpose: to guide, coach, and mentor
              students towards achieving excellence, not just in their grades,
              but in their confidence, discipline, and lifelong learning skills.
            </p>

            <p className="text-sm md:text-base text-justify text-gray-600 mb-8 leading-relaxed">
              Through personalized coaching and proven mentorship strategies, we
              empower students to overcome challenges, develop strong study
              habits, and approach learning with purpose and enthusiasm.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-[12px] md:rounded-xl md:p-6 p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-academic-blue-100/50"
                  data-testid="card-personalized-coaching"
                >
                  <div className="bg-gradient-to-br from-academic-blue-500 to-academic-blue-600 size-8 md:size-10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {perk.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-sm md:text-base">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[0.625rem] md:text-sm">
                    {perk.content}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={handleRegistration}
              className="group relative bg-gradient-to-r from-academic-blue-600 to-academic-blue-700 text-white px-4 md:px-10 py-5 rounded-xl text-sm md:text-base font-bold hover:from-academic-blue-700 hover:to-academic-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden flex items-center gap-2"
              data-testid="button-join-masterclass"
            >
              <span className="relative z-10">Join Our Masterclass</span>
              <ExternalLink className="size-4 inline relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
