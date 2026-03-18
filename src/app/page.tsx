import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import AboutPreview from '@/components/AboutPreview';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Corp — Modern Business Solutions',
  description: 'We build modern digital solutions to help your business grow and thrive in the digital age.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <AboutPreview />
      <Testimonials />
    </>
  );
}
