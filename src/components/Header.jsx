const Header = () => {
    return (
      <header className="bg-gray-900 text-white fixed w-full shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#hero" className="text-2xl font-bold">
            <span className="text-blue-400">P</span>edro <span className="text-blue-400">A</span>lmeida
          </a>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#hero" className="hover:text-blue-400">Início</a></li>
              <li><a href="#technologies" className="hover:text-blue-400">Conhecimentos</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projetos</a></li>
              <li><a href="#about" className="hover:text-blue-400">Acerca</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contactos</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            {/* Menu Mobile */}
            <button className="text-white text-2xl">☰</button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  