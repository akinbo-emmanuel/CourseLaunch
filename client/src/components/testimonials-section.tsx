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
      "The personalized coaching approach completely transformed my study habits. I went from struggling with time management to achieving consistent A's across all subjects.",
    name: "Sarah Johnson",
    program: "Computer Science, University of Lagos",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 2,
    content:
      "Olajire's mentorship helped me develop confidence and discipline that extended beyond academics. I now approach challenges with a growth mindset.",
    name: "Michael Chen",
    program: "Engineering, Covenant University",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 3,
    content:
      "The exclusive mentorship program provided exactly what I needed. My grades improved dramatically and I gained scholarship opportunities I never thought possible.",
    name: "Aisha Mohammed",
    program: "Medicine, University of Ibadan",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 4,
    content:
      "From average grades to First-Class Honours - this program gave me the tools and mindset to excel beyond my wildest expectations.",
    name: "David Okafor",
    program: "Business Administration, LASU",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 5,
    content:
      "The proven strategies and personalized attention helped me build lifelong learning skills that continue to serve me in my career.",
    name: "Grace Adebayo",
    program: "Law, University of Jos",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Success Stories from Our Students
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-academic-blue-500 to-academic-blue-700 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
          Over the past five months, students in our mentorship classes have
          experienced remarkable growth. Here's what they have to say about
          their transformation.
        </p>
      </div>

      {/* Auto-scrolling testimonials container */}
      <div className="relative">
        <div
          className="flex animate-scroll-left space-x-8"
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-none w-80 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-academic-blue-100/30 p-6 flex flex-col h-64"
              data-testid={`testimonial-card-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              <p
                className="text-gray-700 mb-6 italic flex-1 text-sm leading-relaxed"
                data-testid={`text-testimonial-content-${testimonial.id}`}
              >
                "{testimonial.content}"
              </p>

              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial photo`}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-academic-blue-200"
                  data-testid={`img-testimonial-${testimonial.id}`}
                />
                <div>
                  <h4
                    className="font-bold text-gray-900 text-sm"
                    data-testid={`text-testimonial-name-${testimonial.id}`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-xs text-academic-blue-600 font-medium"
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
