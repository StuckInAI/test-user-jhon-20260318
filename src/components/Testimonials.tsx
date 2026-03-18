const testimonials = [
  {
    quote:
      'Acme Corp completely transformed our online presence. Our revenue increased by 45% within the first three months of launching our new website.',
    author: 'Jennifer Adams',
    role: 'CEO, TechStart Inc.',
    initials: 'JA',
    color: 'bg-blue-500',
    rating: 5,
  },
  {
    quote:
      'The team at Acme Corp delivered beyond our expectations. Their attention to detail and commitment to quality is truly unmatched in the industry.',
    author: 'Robert Kim',
    role: 'CTO, DataFlow Systems',
    initials: 'RK',
    color: 'bg-green-500',
    rating: 5,
  },
  {
    quote:
      'Working with Acme Corp was a game-changer for us. They understood our vision perfectly and brought it to life in ways we hadn't even imagined.',
    author: 'Maria Santos',
    role: 'Founder, Creative Studio',
    initials: 'MS',
    color: 'bg-purple-500',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-800">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              <blockquote className="text-white/90 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                  <div className="text-primary-300 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
