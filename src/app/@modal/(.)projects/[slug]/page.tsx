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
        <p>{data.description}</p>
      </Modal>
    );
  }
  return null;
};

export default Page;
