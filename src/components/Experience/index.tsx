import { ExperienceCard } from "../ExperienceCard";

export const Experience: React.FC = () => (
  <section id="experience" className="parallax experience py-20 bg-gray-100">
    <div className="container mx-auto text-center parallax-content">
      <h2 className="text-3xl font-bold text-white">Experiência</h2>
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
