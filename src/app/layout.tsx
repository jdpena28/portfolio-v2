import './globals.css';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import { Metadata } from 'next';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio | John Henrich Dela Peña',
  description:
    'Over a year experience in Full Stack Javascript Application mainly focus on web and mobile application. Lean with working on Next.js Framework. React.js Typescript Enthusiast. Keeping up with the latest emerging technology.',
  openGraph: {
    title: 'Portfolio | John Henrich Dela Peña',
    description:
      'Over a year experience in Full Stack Javascript Application mainly focus on web and mobile application. Lean with working on Next.js Framework. React.js Typescript Enthusiast. Keeping up with the latest emerging technology.',
    url: 'https://www.jdpena.tech/',
    siteName: 'John Henrich Dela Peña',
    images: [
      {
        url: '/thumbnail.png',
        width: 1440,
        height: 1020,
      },
    ],
  },
};

const apercu = localFont({
  src: [
    {
      path: '../../public/fonts/Apercu Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Apercu Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Apercu Bold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-apercu',
});

const canela = localFont({
  src: [
    {
      path: '../../public/fonts/Canela-Thin-Trial.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CanelaText-Light-Trial.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CanelaText-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Canela-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Canela-Bold-Trial.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-canela',
});

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${apercu.variable} ${canela.variable} bg-highlight`}>
      <body>
        <NavBar />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}
