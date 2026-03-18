const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Our solutions are optimized for peak performance, ensuring your customers get the best possible experience every time.',
    color: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-yellow-100',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description:
      'We create stunning, modern interfaces that not only look great but also drive conversions and delight users.',
    color: 'bg-pink-50 border-pink-200',
    iconBg: 'bg-pink-100',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description:
      'Security is built into every layer of our solutions, giving you and your customers peace of mind.',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description:
      'Every solution we build is fully responsive and optimized for all devices, from smartphones to desktops.',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '📈',
    title: 'Scalable Growth',
    description:
      'Our architecture grows with your business, handling everything from startup traffic to enterprise scale.',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100',
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    description:
      'We integrate cutting-edge AI capabilities to automate workflows and provide intelligent business insights.',
    color: 'bg-indigo-50 border-indigo-200',
    iconBg: 'bg-indigo-100',
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-max">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Services Built for
            <span className="text-primary-600"> Success</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From design to deployment, we provide everything your business needs to succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl border p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default ${feature.color}`}
            >
              <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
