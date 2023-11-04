import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  slug: string;
  name: string;
  thumbnail: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ slug, name, thumbnail }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="rounded-sm border-2 border-gray-200 bg-white p-5 shadow-lg shadow-white drop-shadow-2xl">
        <Image src={thumbnail} alt={name} width={354} height={439} />
        <div className="flex justify-between py-5">
          <h4 className="max-w-xs text-lg">{name}</h4>
          <svg
            className="h-8 w-8"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_120_158)">
              <path
                d="M0 18.5C0 23.4065 1.9491 28.1121 5.41852 31.5815C8.88795 35.0509 13.5935 37 18.5 37C23.4065 37 28.1121 35.0509 31.5815 31.5815C35.0509 28.1121 37 23.4065 37 18.5C37 13.5935 35.0509 8.88795 31.5815 5.41852C28.1121 1.9491 23.4065 0 18.5 0C13.5935 0 8.88795 1.9491 5.41852 5.41852C1.9491 8.88795 0 13.5935 0 18.5ZM13.653 24.9819C13.5463 25.0924 13.4188 25.1805 13.2777 25.2411C13.1366 25.3017 12.9849 25.3335 12.8314 25.3349C12.6778 25.3362 12.5256 25.307 12.3835 25.2488C12.2414 25.1907 12.1123 25.1048 12.0037 24.9963C11.8952 24.8877 11.8093 24.7586 11.7512 24.6165C11.693 24.4744 11.6638 24.3222 11.6651 24.1686C11.6665 24.0151 11.6983 23.8634 11.7589 23.7223C11.8195 23.5812 11.9076 23.4537 12.0181 23.347L21.4901 13.875H15.0891C14.7824 13.875 14.4883 13.7532 14.2715 13.5363C14.0546 13.3195 13.9328 13.0254 13.9328 12.7188C13.9328 12.4121 14.0546 12.118 14.2715 11.9012C14.4883 11.6843 14.7824 11.5625 15.0891 11.5625H24.2812C24.5879 11.5625 24.882 11.6843 25.0988 11.9012C25.3157 12.118 25.4375 12.4121 25.4375 12.7188V21.9109C25.4375 22.2176 25.3157 22.5117 25.0988 22.7285C24.882 22.9454 24.5879 23.0672 24.2812 23.0672C23.9746 23.0672 23.6805 22.9454 23.4637 22.7285C23.2468 22.5117 23.125 22.2176 23.125 21.9109V15.5099L13.653 24.9819Z"
                fill="#101110"
              />
            </g>
            <defs>
              <clipPath id="clip0_120_158">
                <rect
                  width="37"
                  height="37"
                  fill="white"
                  transform="matrix(-1 0 0 -1 37 37)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
