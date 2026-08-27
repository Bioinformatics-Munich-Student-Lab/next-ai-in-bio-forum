import { Geist, Geist_Mono } from 'next/font/google';
import { Instrument_Serif } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { EVENT } from '@/content/event';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${EVENT.title} | September 12, 2026 | Munich`,
  description: EVENT.description,
  metadataBase: new URL('https://nextai.bio'),
  openGraph: {
    title: EVENT.title,
    description: EVENT.description,
    url: 'https://nextai.bio',
    siteName: 'Next AI in Bio Forum 2026',
    images: [
      {
        url: 'https://nextai.bio/og-image.png',
        width: 1200,
        height: 630,
        alt: EVENT.title,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: EVENT.title,
    description: EVENT.description,
    images: ['https://nextai.bio/og-image.png'],
  },
  keywords: [
    'AI',
    'biology',
    'neurotech',
    'BCI',
    'neural decoding',
    'clinical trials',
    'AI for science',
    'forum',
    'Munich',
    'TUM',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-white text-gray-900 tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
