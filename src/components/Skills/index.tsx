import { useEffect, useState } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaReact,
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
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { SkillCard } from "../SkillCard";

export const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const skills = [
    { skill: "React", Icon: FaReact },
    { skill: "HTML", Icon: FaHtml5 },
    { skill: "CSS", Icon: FaCss3Alt },
    { skill: "Typescript", Icon: SiTypescript },
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
    { skill: "SQL", Icon: SiPostgresql },
    { skill: "MongoDB", Icon: SiMongodb },
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
