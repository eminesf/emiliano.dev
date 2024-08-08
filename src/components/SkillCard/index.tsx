interface SkillCardProps {
  skill: string;
  Icon: React.ComponentType;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, Icon }) => (
  <div className="m-4 p-6 w-60 h-40 bg-white shadow-lg rounded-lg border-t-4 border-blue-500 flex flex-col items-center justify-center">
    <div className="text-4xl text-blue-500 mb-2">
      <Icon />
    </div>
    <h3 className="text-xl font-bold text-gray-800">{skill}</h3>
  </div>
);
