import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-800/50 border border-primary-700/50 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-primary-200 text-sm font-medium">Now Serving 200+ Clients Worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Build Something
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-blue-400">
            Extraordinary
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed mb-10">
          We craft modern digital experiences that drive growth, engage customers, and set your business apart from the competition.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="btn-primary bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 text-base shadow-xl hover:shadow-2xl"
          >
            Start Your Project →
          </Link>
          <Link
            href="/about"
            className="btn-secondary border-primary-400 text-primary-300 hover:bg-primary-800/50 px-8 py-4 text-base"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '200+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '9yr', label: 'Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-primary-300 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary-400">
        <span className="text-xs">Scroll</span>
        <div className="w-0.5 h-6 bg-primary-500 rounded animate-bounce" />
      </div>
    </section>
  );
}
