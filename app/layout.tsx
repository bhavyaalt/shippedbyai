import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bhavya Gor | Shipped by AI',
  description: 'Curious developer passionate about building things. Shipping Web3 products with AI.',
  openGraph: {
    title: 'Bhavya Gor | Shipped by AI',
    description: 'Curious developer passionate about building things. Shipping Web3 products with AI.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bhavyagor12',
    title: 'Bhavya Gor | Shipped by AI',
    description: 'Curious developer shipping Web3 products with AI.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
