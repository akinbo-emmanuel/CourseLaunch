import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  name: string;
  program: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "The Academic Excellence Masterclass transformed my academics and life. From January to June, our Thursday sessions equipped me with strategies, structure, and accountability for success. Beyond academics, I grew in skills, relationships, networking, and volunteering. Today, I maintain a disciplined study routine and a 4.91 GPA as a first-class medical student.",
    name: "Oladayo Omotola Jennifer",
    program: "Medicine, Bowen University",
    image:
      "https://lh3.googleusercontent.com/d/1vl57zvEckRdBxDp-8CeurdxHoTDAFxD4",
  },
  {
    id: 2,
    content:
      "Academic Excellence Masterclass has been a means of inspiration to me. I get to learn unlearn and relearn a lot of things. Mr Ola is so intentional about our growth and makes sure that every meeting we leave  with something tangible. Sometimes when I feel like giving up, I hear Mr Ola's voice saying, 'Pay your dues. There is a price for greatness.' Things like that. He also helped me in my academic journey. My GPA was above 4.5 the last semester and this platform was a huge part of it.",
    name: "Peace Chinechetam Azubuike",
    program: "Bowen University",
    image:
      "https://lh3.googleusercontent.com/d/1vO6tNklHPsprsAbJ9gyKZh1Rs5XQYjFO",
  },
  {
    id: 3,
    content:
      "Attending AEM classes helped me become a first class student. We walked through topics that include; time management, beyond academics,Fear,academic success strategies, my favourite! balancing academic and spiritual life, to mention but a few. These armed me for the storms that came, enabling me to overcome strong.",
    name: "Azubuike Blessing Chinemerem",
    program: "Bowen University",
    image:
      "https://lh3.googleusercontent.com/d/1cvVZIcGXvwTy_RoyYt3a0K4QGBxBHISd",
  },
  {
    id: 4,
    content:
      "He has been a good mentor. I know that I learnt a lot from him, even when I had not  gotten the gpa I wanted he encouraged me and just help me see where I needed to put in effort. He helped me realise that I took can do something different.",
    name: "Faith Oluchukwu Ifenkwe",
    program: "Bowen University",
    image:
      "https://lh3.googleusercontent.com/d/1LemMTmW380InW7WNpZz6cXsttLHwX9lz",
  },
  {
    id: 5,
    content:
      "I learned that age is no barrier, and Mr. Olajire always guided me through challenges. During my second semester, I fell sick before an exam and feared missing it, but he encouraged me to seek treatment and still prepare. Remembering his words—“We can never fail”—gave me courage in the hall. My results improved drastically compared to my first semester. Mr. Olajire has truly been a blessing, and I pray God blesses him to impact more lives.",
    name: "Victoria Aluko",
    program: "Bowen University",
    image:
      "https://lh3.googleusercontent.com/d/1iQDmmWn9mcMbhRddmucsUkUd8TzLSkmd",
  },
];

export default function TestimonialsSection() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-50 to-academic-blue-50/30 overflow-hidden"
    >
      <div className="md:text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl/[150%] sm:text-4xl/[120%] lg:text-5xl/[120%] font-bold text-gray-900 mb-6 animate-fade-in-up">
          Success Stories from Our Students
        </h2>
        <div className="w-48 md:w-64 h-1 bg-gradient-to-r from-academic-blue-500 to-academic-blue-700 md:mx-auto mb-8 rounded-full"></div>
        <p className="text-sm md:text-base text-justify md:text-center text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
          Over the past five months, students in our mentorship classes have
          experienced remarkable growth. Here's what they have to say about
          their transformation.
        </p>
      </div>

      {/* Auto-scrolling testimonials container */}
      <div className="relative overflow-hidden">
        <div
          className="flex w-max animate-marquee-ltr space-x-4 will-change-transform hover:[animation-play-state:paused] [animation-duration:40s] md:[animation-duration:30s] lg:[animation-duration:20s]"
          // Optional: pause on hover (Tailwind arbitrary style)
          // className="flex w-max animate-marquee-rtl space-x-8 will-change-transform hover:[animation-play-state:paused]"
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-1 w-80 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-academic-blue-100/30 p-4 flex flex-col h-auto"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 md:size-4 fill-current" />
                  ))}
                </div>
              </div>

              <p
                className="text-gray-700 mb-6 italic flex-1 text-[0.625rem] md:text-xs leading-relaxed text-justify"
                data-testid={`text-testimonial-content-${testimonial.id}`}
              >
                "{testimonial.content}"
              </p>

              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial photo`}
                  className="size-10 rounded-full object-cover mr-2 ring-2 ring-academic-blue-200"
                  data-testid={`img-testimonial-${testimonial.id}`}
                />
                <div>
                  <h4
                    className="font-bold text-gray-900 text-xs"
                    data-testid={`text-testimonial-name-${testimonial.id}`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-[0.625rem] text-academic-blue-600 font-medium"
                    data-testid={`text-testimonial-program-${testimonial.id}`}
                  >
                    {testimonial.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
