import { useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiJest,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <UsefulLinks />
      <Contact />
      <Footer />
    </div>
  );
};

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <span></span>
      <div className="flex items-center space-x-4">
        <NavItem href="#about">About</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#experience">Experience</NavItem>
        <NavItem href="#useful-links">Useful Links</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </div>
    </div>
  </nav>
);

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <a href={href} className="relative group">
    {children}
    <span className="absolute left-0 right-0 bottom-0 block h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </a>
);

const Header: React.FC = () => (
  <header className="hero py-20 bg-gray-100 text-center">
    <h1 className="text-4xl font-bold">Olá, me chamo Emiliano</h1>
    <p className="mt-4 text-lg">Front-End Developer</p>
    <a
      href="#contact"
      className="mt-6 bg-blue-500 hover:bg-blue-600 transition ease-in-out delay-[105] text-white px-6 py-3 rounded inline-block"
    >
      Entre em contato
    </a>
  </header>
);

const About: React.FC = () => (
  <section id="about" className="about py-20 parallax text-white text-center">
    <div className="parallax-content container mx-auto mt-10">
      <h2 className="text-3xl font-bold">Sobre mim</h2>
      <p className="mt-4">
        Sou um desenvolvedor front-end apaixonado por criar experiências web
        intuitivas e envolventes. Tenho vasta experiência com tecnologias como
        React, React Native, TypeScript, HTML, CSS, JavaScript e Tailwind CSS.
        Meu foco é sempre na criação de interfaces de usuário responsivas e de
        alta qualidade, mantendo-me atualizado com as últimas tendências e
        práticas da indústria. Sou conhecido pela minha atenção aos detalhes e
        pela capacidade de resolver problemas complexos de maneira eficiente.
        Estou sempre em busca de novos desafios para aplicar minhas habilidades
        e contribuir para o sucesso dos projetos.
      </p>
    </div>
  </section>
);

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const skills = [
    { skill: "React", Icon: FaReact },
    { skill: "HTML", Icon: FaHtml5 },
    { skill: "CSS", Icon: FaCss3Alt },
    { skill: "JavaScript", Icon: FaJs },
    { skill: "Tailwind CSS", Icon: SiTailwindcss },
    { skill: "Redux", Icon: SiRedux },
    { skill: "Storybook", Icon: SiStorybook },
    { skill: "Jest", Icon: SiJest },
    { skill: "Styled Components", Icon: SiStyledcomponents },
    { skill: "Git", Icon: FaGitAlt },
    { skill: "Docker", Icon: FaDocker },
    { skill: "API REST", Icon: FaDatabase },
    { skill: "Vite", Icon: SiVite },
    { skill: "Sass", Icon: SiSass },
    { skill: "Bancos de Dados Relacionais", Icon: SiPostgresql },
    { skill: "Bancos de Dados Não Relacionais", Icon: SiMongodb },
  ];

  const updateVisibleSkills = () => {
    const width = window.innerWidth;
    if (width >= 1150) {
      setVisibleSkills(8);
    } else if (width >= 882) {
      setVisibleSkills(6);
    } else if (width >= 609) {
      setVisibleSkills(4);
    } else {
      setVisibleSkills(3);
    }
  };

  useEffect(() => {
    updateVisibleSkills();
    window.addEventListener("resize", updateVisibleSkills);
    return () => window.removeEventListener("resize", updateVisibleSkills);
  }, []);

  const handleShowMore = () => {
    setVisibleSkills(skills.length);
    setExpanded(true);
  };

  const handleShowLess = () => {
    updateVisibleSkills();
    setExpanded(false);
  };

  return (
    <section
      id="skills"
      className="skills py-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.slice(0, visibleSkills).map(({ skill, Icon }) => (
            <div
              key={skill}
              className="hover:scale-105 ease-in-out transition delay-[110]"
            >
              <SkillCard key={skill} skill={skill} Icon={Icon} />
            </div>
          ))}
        </div>
        {!expanded && visibleSkills < skills.length && (
          <button
            onClick={handleShowMore}
            className="mt-8 px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300"
          >
            Ver mais
          </button>
        )}
        {expanded && (
          <button
            onClick={handleShowLess}
            className="mt-8 px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300"
          >
            Ver menos
          </button>
        )}
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: string;
  Icon: React.ComponentType;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, Icon }) => (
  <div className="m-4 p-6 w-60 h-40 bg-white shadow-lg rounded-lg border-t-4 border-blue-500 flex flex-col items-center justify-center">
    <div className="text-4xl text-blue-500 mb-2">
      <Icon />
    </div>
    <h3 className="text-xl font-bold text-gray-800">{skill}</h3>
  </div>
);

const Projects: React.FC = () => (
  <section id="projects" className="projects py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Projeto</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <ProjectCard title="Projeto" description="" />
        <ProjectCard title="Projeto" description="" />
        <ProjectCard title="Projeto" description="" />
      </div>
    </div>
  </section>
);

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => (
  <div className="m-4 p-6 max-w-xs bg-white shadow-md rounded">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-4">{description}</p>
  </div>
);

const Experience: React.FC = () => (
  <section id="experience" className="experience py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Experiência</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <ExperienceCard
          position="Front-End Software Engineer"
          company="Sicredi"
          duration="Junho 2023 - Maio 2024"
        />
        <ExperienceCard
          position="Front-End Software Engineer"
          company="Agibank"
          duration="Maio 2021 - Abril 2023"
        />
        <ExperienceCard
          position="Estagiário de desenvolvimento"
          company="Dimed"
          duration="Novembro 2020 - Abril 2021"
        />
      </div>
    </div>
  </section>
);

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
}

const ExperienceCard = ({
  position,
  company,
  duration,
}: ExperienceCardProps) => (
  <div className="m-4 p-6 max-w-xs bg-white shadow-md rounded">
    <h3 className="text-xl font-bold">{position}</h3>
    <p className="mt-2">{company}</p>
    <p className="mt-2 text-gray-600">{duration}</p>
  </div>
);

const UsefulLinks = () => (
  <section id="useful-links" className="useful-links py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Links úteis</h2>
      <div className="flex flex-wrap justify-center mt-10">
        <a
          href="https://github.com/eminesf"
          className="m-4 p-6 w-60 h-40 bg-white shadow-md rounded-lg border-t-4 border-blue-500 flex flex-col items-center justify-center hover:scale-105 ease-in-out transition delay-[105]"
        >
          <FaGithub className="text-4xl text-blue-500 mb-2" />
          <span className="text-xl font-bold text-gray-800">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/emiliano-da-silveira-fucks-64b8a1a5/"
          className="m-4 p-6 w-60 h-40 bg-white shadow-md rounded-lg border-t-4 border-blue-500 flex flex-col items-center justify-center hover:scale-105 ease-in-out transition delay-[105]"
        >
          <FaLinkedin className="text-4xl text-blue-500 mb-2" />
          <span className="text-xl font-bold text-gray-800">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Contato</h2>
      <p className="mt-4">Email: emilianofuchs@gmail.com</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 text-center">
    <p>&copy; 2024 Emiliano Fuchs.</p>
  </footer>
);

export default App;
