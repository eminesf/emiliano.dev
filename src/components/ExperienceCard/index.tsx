interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
}

export const ExperienceCard = ({
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
