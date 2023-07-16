import Link from 'next/link';

import { NAVLINKS, SOCIALS } from '@/constant';

const Footer = () => {
  return (
    <footer className="mt-10 flex justify-between bg-primary p-10 [&>*]:text-highlight">
      <div className="flex flex-col gap-3">
        {NAVLINKS.map((i) => {
          return (
            <Link key={i.name} className="font-apercu font-bold" href={i.url}>
              {i.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        {SOCIALS.map((i) => {
          return (
            <Link key={i.url} href={i.url}>
              {i.icon}
            </Link>
          );
        })}
      </div>
      <div className="space-y-3 [&>*]:text-highlight">
        <h5 className="font-apercu font-semibold">JDPeña</h5>
        <p className="text-sm font-light">
          Copyright of {new Date().getFullYear()} | Made with passion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
