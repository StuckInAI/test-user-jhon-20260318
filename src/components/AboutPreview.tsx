import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-3xl p-8 aspect-square max-w-sm mx-auto lg:max-w-none flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { icon: '🚀', label: 'Launch Ready', bg: 'bg-white' },
                  { icon: '💼', label: 'Business First', bg: 'bg-primary-600 text-white' },
                  { icon: '🎯', label: 'Goal Driven', bg: 'bg-white' },
                  { icon: '🌍', label: 'Global Reach', bg: 'bg-white' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${item.bg} rounded-2xl p-4 shadow-md flex flex-col items-center justify-center text-center gap-2`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className={`text-xs font-semibold ${item.bg.includes('primary') ? 'text-white' : 'text-gray-700'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:right-8 bg-primary-600 text-white rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-2xl font-bold">9+</div>
              <div className="text-xs text-primary-200">Years of Excellence</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              About Acme Corp
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              We Turn Your Vision Into Reality
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since 2015, we&apos;ve been partnering with businesses of all sizes to deliver innovative digital solutions. Our team of experts combines creativity with technical excellence to produce outstanding results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We don&apos;t just build products — we build lasting partnerships. Every project we take on is an opportunity to make a meaningful difference in our clients&apos; businesses and their customers&apos; lives.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: '200+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Retention' },
                { value: '50+', label: 'Team Members' },
                { value: '30+', label: 'Countries Served' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
