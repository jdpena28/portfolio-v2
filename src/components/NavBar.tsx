'use client';

import Link from 'next/link';
import { FC, useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import { NAVLINKS } from '@/constant';

import { NavLinksType } from '@/types/props';

const NavBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useOnClickOutside(ref, () => setIsOpen(false));
  const variant: Variants = {
    initial: {
      opacity: 0,
      x: '100vw',
      transition: {
        duration: 0.5,
        bounce: 0.6,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        bounce: 0.6,
        ease: 'easeInOut',
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      x: '100vw',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <>
      <nav>
        <p className="heading text-xl font-bold">JDPeña</p>
        {/* Desktop Link */}
        <div className="hidden items-start gap-x-5 lg:flex">
          {NAVLINKS.map((i) => {
            return (
              <NavLinks
                key={i.name}
                url={i.url}
                description={i.description}
                name={i.name}
              />
            );
          })}
        </div>
        {/* Mobile Link */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`z-50 block h-6 w-6 cursor-pointer lg:hidden ${
            isOpen ? 'fill-highlight' : 'fill-primary'
          }`}
          onClick={() => setIsOpen(!isOpen)}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variant}
            initial="initial"
            animate="open"
            exit="exit"
            ref={ref}
            className="fixed right-0 top-0 z-40 mt-20 flex h-screen w-1/3 flex-col items-center gap-3 bg-primary pt-8 lg:hidden">
            {NAVLINKS.map((i) => {
              return (
                <Link
                  className="font-canela text-highlight"
                  key={i.url}
                  href={i.url}>
                  {i.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLinks: FC<NavLinksType> = ({ name, url, description }) => {
  return (
    <Link href={url}>
      <div className="relative w-full max-w-[150px] border-t-2 border-black">
        <p className="font-apercu font-bold">{name}</p>
        <p>{description}</p>
        <svg
          className="absolute right-0 top-1 h-4 w-4"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.2941 4.09521L4.45093 11.9788M5.75812 4.09521H12.2941V10.6648"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
};

export default NavBar;
