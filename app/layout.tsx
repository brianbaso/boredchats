import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const noto = Noto_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'BoredChats - Questions for AI',
  description: 'A collection of random questions to ask AI',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>
        {children}
        <Analytics mode="auto" />
      </body>
    </html>
  );
}