interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  onClick,
}) => (
  <a href={href} className="relative group" onClick={onClick}>
    {children}
    <span className="absolute left-0 right-0 bottom-0 block h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </a>
);
