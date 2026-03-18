import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Acme Corp — Modern Business Solutions',
    template: '%s | Acme Corp',
  },
  description: 'We build modern digital solutions to help your business grow and thrive in the digital age.',
  keywords: ['business', 'digital solutions', 'web development', 'consulting'],
  authors: [{ name: 'Acme Corp' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acmecorp.com',
    siteName: 'Acme Corp',
    title: 'Acme Corp — Modern Business Solutions',
    description: 'We build modern digital solutions to help your business grow and thrive in the digital age.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
