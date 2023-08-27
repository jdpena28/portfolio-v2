import Image from 'next/image';

import { Modal } from '@/components/modal';

import { PROJECTS } from '@/constant';

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  const data = PROJECTS.find((i) => i.slug === slug);
  if (data) {
    return (
      <Modal>
        <Image
          className="mx-auto"
          src={data.landscapeThumbnail}
          alt={data.name}
          width={1920}
          height={1080}
        />
        <h5 className="heading font-medium">{data.name}</h5>
        <div className="flex flex-wrap gap-3">
          {data.techStacks.map((i) => {
            return (
              <span
                key={i}
                className="rounded-full bg-gradient-to-l from-gray-700 via-gray-900 to-black px-4 py-2 font-apercu text-sm font-semibold text-red-100">
                {i}
              </span>
            );
          })}
        </div>
        <p>{data.description}</p>
      </Modal>
    );
  }
  return null;
};

export default Page;
