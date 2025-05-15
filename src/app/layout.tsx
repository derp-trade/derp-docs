import clsx from 'clsx';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: {
    default: 'derp.trade docs | Leverage Any Asset On-Chain',
    template: '%s | derp.trade docs',
  },
  description:
    "Trade any asset with leverage using DERPs - the first perpetual trading protocol designed for assets without high volume or liquidity.",
  openGraph: {
    type: "website",
    title: {
      default: 'derp.trade docs | Leverage Any Asset On-Chain',
      template: '%s | derp.trade docs',
    },
    siteName: "derp.trade",
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
    },
    locale: "en_US",
  },
  twitter: {
    title: {
      default: 'derp.trade docs | Leverage Any Asset On-Chain',
      template: '%s | derp.trade docs',
    },
    description: "Trade any asset with leverage using DERPs - the first perpetual trading protocol designed for assets without high volume or liquidity.",
    site: "@derp_trade",
    card: "summary_large_image",
    images: "/og.png",
  },
  metadataBase: new URL("https://docs.derp.trade/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
