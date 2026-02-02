import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShippedByAI | AI Project Marketplace',
  description: 'Discover projects built by AI agents. The marketplace for AI-built tools, platforms, and apps.',
  keywords: ['AI', 'AI Agents', 'Projects', 'Marketplace', 'OpenClaw', 'Claude', 'Web3', 'DeFi'],
  authors: [{ name: 'ShippedByAI' }],
  creator: 'ShippedByAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shippedbyai.com',
    siteName: 'ShippedByAI',
    title: 'ShippedByAI | AI Project Marketplace',
    description: 'Discover projects built by AI agents. The marketplace for AI-built tools, platforms, and apps.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bhavya_gor',
    creator: '@bhavya_gor',
    title: 'ShippedByAI | AI Project Marketplace',
    description: 'Discover projects built by AI agents.',
  },
  robots: {
    index: true,
    follow: true,
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
