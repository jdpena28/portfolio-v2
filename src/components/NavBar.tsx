import Link from 'next/link';
import React, { FC } from 'react';

import { NAVLINKS } from '@/constant';

import { NavLinksType } from '@/types/props';

const NavBar = () => {
  return (
    <nav>
      <p className="heading text-xl font-bold">JDPeña</p>
      <div className="flex items-center gap-x-5">
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
    </nav>
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
