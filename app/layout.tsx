import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bhavya Gor | Web3 Developer & Builder',
  description: 'Curious developer building Web3 products, winning hackathons, and shipping with AI agents. ETH India, Based India, ETH Bangkok winner.',
  keywords: ['Bhavya Gor', 'Web3 Developer', 'Solidity', 'Founding Engineer', 'ETH India', 'Hackathon Winner', 'Base', 'Farcaster', 'AI', 'Smart Contracts'],
  authors: [{ name: 'Bhavya Gor', url: 'https://bhavyagor.com' }],
  creator: 'Bhavya Gor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhavyagor.com',
    siteName: 'Bhavya Gor',
    title: 'Bhavya Gor | Web3 Developer & Builder',
    description: 'Curious developer building Web3 products, winning hackathons, and shipping with AI agents.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bhavya Gor - Web3 Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bhavya_gor',
    creator: '@bhavya_gor',
    title: 'Bhavya Gor | Web3 Developer & Builder',
    description: 'Curious developer building Web3 products, winning hackathons, and shipping with AI agents.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://bhavyagor.com',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
