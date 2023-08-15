import { PROJECTS } from '@/constant';
import { ProjectCard } from '../card';

const Projects = () => {
  return (
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
  );
};

export default Projects;
