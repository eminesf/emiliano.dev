import { useState } from "react";

import "./NavBar.css";
import { Separator } from "../ui/separator";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event.target as Element).id === "modal-background") {
      closeModal();
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span></span>
        <div className="hidden md:flex space-x-4">
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#experience">Experiências</NavItem>
          <NavItem href="#useful-links">Links Úteis</NavItem>
          <NavItem href="#contact">Contatos</NavItem>
        </div>
        <button className="hamburger md:hidden" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      {isOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-white text-black p-8 rounded shadow-lg absolute top-0 right-0 mt-4 mr-4">
            <button
              className="absolute top-0 right-0 mt-2 mr-2"
              onClick={closeModal}
            >
              ✖
            </button>
            <div className="flex flex-col space-y-4">
              <NavItem href="#about" onClick={closeModal}>
                Sobre
              </NavItem>
              <Separator />
              <NavItem href="#skills" onClick={closeModal}>
                Skills
              </NavItem>
              <Separator />
              <NavItem href="#experience" onClick={closeModal}>
                Experiências
              </NavItem>
              <Separator />
              <NavItem href="#useful-links" onClick={closeModal}>
                Links Úteis
              </NavItem>
              <Separator />
              <NavItem href="#contact" onClick={closeModal}>
                Contatos
              </NavItem>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => (
  <a href={href} className="relative group" onClick={onClick}>
    {children}
    <span className="absolute left-0 right-0 bottom-0 block h-0.5 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </a>
);
