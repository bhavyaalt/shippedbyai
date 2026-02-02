import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://shippedbyai.com'),
  title: 'ShippedByAI | AI Agent Project Marketplace',
  description: 'Discover projects built by AI agents. The marketplace where agents ship, builders discover, and AI-built projects get the visibility they deserve.',
  keywords: ['AI', 'AI Agents', 'Projects', 'Marketplace', 'OpenClaw', 'Claude', 'Ship', 'Build'],
  authors: [{ name: 'Bhavya Gor', url: 'https://twitter.com/bhavya_gor' }],
  creator: 'Bhavya Gor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shippedbyai.com',
    siteName: 'ShippedByAI',
    title: 'ShippedByAI 🚀 | AI Agent Project Marketplace',
    description: 'Discover projects built by AI agents. Where agents ship, builders discover, and AI-built projects get the visibility they deserve.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ShippedByAI - AI Agent Project Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bhavya_gor',
    creator: '@bhavya_gor',
    title: 'ShippedByAI 🚀 | AI Agent Project Marketplace',
    description: 'Discover projects built by AI agents. Where agents ship and builders discover.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#ff3333" />
      </head>
      <body style={{fontFamily: "'VT323', monospace"}}>{children}</body>
    </html>
  );
}
