import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Acme Corp, our mission, values, and the team behind our success.',
};

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    bio: 'With over 15 years in the industry, Sarah drives our vision and strategy with passion and precision.',
    initials: 'SJ',
    color: 'bg-blue-500',
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    bio: 'Michael leads our engineering team, ensuring we stay at the cutting edge of technology.',
    initials: 'MC',
    color: 'bg-purple-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Emily crafts beautiful, user-centered experiences that delight customers and drive results.',
    initials: 'ER',
    color: 'bg-pink-500',
  },
  {
    name: 'David Park',
    role: 'Head of Marketing',
    bio: 'David brings data-driven marketing strategies that amplify our clients\' reach and impact.',
    initials: 'DP',
    color: 'bg-green-500',
  },
  {
    name: 'Lisa Thompson',
    role: 'Lead Developer',
    bio: 'Lisa architects robust solutions and mentors our growing engineering team.',
    initials: 'LT',
    color: 'bg-orange-500',
  },
  {
    name: 'James Wilson',
    role: 'Business Development',
    bio: 'James forges strategic partnerships that open new opportunities for growth.',
    initials: 'JW',
    color: 'bg-teal-500',
  },
];

const values = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in every interaction and decision.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards, delivering quality that exceeds expectations.',
  },
  {
    icon: '💡',
    title: 'Creativity',
    description: 'We approach every challenge with fresh eyes and creative thinking to find unique solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-primary-300">Acme Corp</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of innovators, designers, and engineers dedicated to transforming businesses through technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Empowering Businesses to Thrive in the Digital Era
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2015, Acme Corp was born from a simple belief: every business deserves access to world-class digital solutions. We bridge the gap between complex technology and real-world business needs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Today, we serve over 200 clients across 30+ countries, helping them build stronger brands, more efficient operations, and better customer experiences.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">200+</div>
                  <div className="text-sm text-gray-500 mt-1">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">30+</div>
                  <div className="text-sm text-gray-500 mt-1">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">9yr</div>
                  <div className="text-sm text-gray-500 mt-1">Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8">
              <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                &ldquo;Our vision is a world where every business, regardless of size, can harness the power of technology to create meaningful impact and sustainable growth.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">CEO & Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">The People Behind Our Success</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Meet Our Team</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our diverse team brings together expertise from across the globe to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-20 h-20 rounded-full ${member.color} flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg`}>
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm mt-1 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
