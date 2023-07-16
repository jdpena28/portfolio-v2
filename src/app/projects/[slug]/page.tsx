import { Metadata } from 'next';
import Image from 'next/image';

import { BASE_URL } from '@/constant';
import { ProjectType } from '@/types/props';

const getProject = async (slug: string) => {
  const data = await fetch(`${BASE_URL}/api/projects?slug=${slug}`, {
    method: 'GET',
  });
  return data.json();
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const data: ProjectType = await getProject(slug);

  return {
    title: data.name,
    metadataBase: new URL(`/projects/${slug}`, BASE_URL),
    openGraph: {
      images: [data.thumbnail],
    },
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = params;
  const project: ProjectType = await getProject(slug);
  return (
    <section className="container mx-auto px-5" id={slug}>
      <div className="w-full space-y-3">
        <Image
          className="mx-auto"
          src={project.landscapeThumbnail}
          alt={project.name}
          height={1080}
          width={1920}
        />
        <h5 className="heading text-4xl font-medium">{project.name}</h5>
        <div className="flex gap-3">
          {project.techStacks.map((i) => {
            return (
              <span
                key={i}
                className="rounded-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 px-4 py-2 font-apercu text-sm font-semibold text-red-100">
                {i}
              </span>
            );
          })}
        </div>
        <p>{project.description}</p>
      </div>
    </section>
  );
};

export default Page;
