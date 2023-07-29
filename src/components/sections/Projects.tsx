import { PROJECTS } from '@/constant';
import { ProjectCard } from '../card';

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="space-y-14">
          <h3>My Works</h3>
          <div className="flex flex-wrap justify-around gap-14">
            {PROJECTS.map((project) => {
              return (
                <ProjectCard
                  key={project.slug}
                  name={project.name}
                  slug={project.slug}
                  thumbnail={project.thumbnail}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* Backdrop */}
      <div className="absolute -left-64 bottom-0 top-[300vh] z-10 my-auto h-max rotate-45">
        <div className="float-animate h-96 w-96 rounded-full border-4 border-blue-500 bg-[#2548FF66]/50 blur-md" />
        <div className="float-animate2 -mt-48 h-96 w-96 rounded-full border-4 border-red-500 bg-[#FF2E0066]/50 blur-md" />
        <div />
      </div>
    </>
  );
};

export default Projects;
