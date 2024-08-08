import { ProjectCard } from "../ProjectCard";

export const Projects: React.FC = () => (
  <section id="projects" className="projects parallax py-20">
    <div className="container parallax-content  mx-auto text-center">
      <h2 className="text-3xl text-white font-bold">Projetos</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <ProjectCard title="Projeto" description="" />
        <ProjectCard title="Projeto" description="" />
        <ProjectCard title="Projeto" description="" />
      </div>
    </div>
  </section>
);
