interface ProjectCardProps {
  title: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
}) => (
  <div className="m-4 p-6 max-w-xs bg-white shadow-md rounded">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-4">{description}</p>
  </div>
);
