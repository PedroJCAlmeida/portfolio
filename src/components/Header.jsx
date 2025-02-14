import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#hero" className="text-2xl font-bold">
          <span className="text-blue-400">P</span>edro{' '}
          <span className="text-blue-400">A</span>lmeida
        </a>
        <nav>
          <ul
            className={`md:flex space-x-6 ${
              isMobileMenuOpen
                ? 'flex flex-col absolute top-16 left-0 w-full bg-gray-900 z-10'
                : 'hidden'
            }`}
          >
            <li>
              <a
                href="#hero"
                className="hover:text-blue-400 block px-4 py-2 md:inline-block"
                onClick={toggleMobileMenu} // Fechar o menu ao clicar no link
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="hover:text-blue-400 block px-4 py-2 md:inline-block"
                onClick={toggleMobileMenu} // Fechar o menu ao clicar no link
              >
                Conhecimentos
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 block px-4 py-2 md:inline-block"
                onClick={toggleMobileMenu} // Fechar o menu ao clicar no link
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 block px-4 py-2 md:inline-block"
                onClick={toggleMobileMenu} // Fechar o menu ao clicar no link
              >
                Acerca
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 block px-4 py-2 md:inline-block"
                onClick={toggleMobileMenu} // Fechar o menu ao clicar no link
              >
                Contactos
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-white text-2xl" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;