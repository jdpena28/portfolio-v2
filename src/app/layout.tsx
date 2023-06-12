import './globals.css';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${apercu.variable} ${canela.variable} bg-highlight`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
