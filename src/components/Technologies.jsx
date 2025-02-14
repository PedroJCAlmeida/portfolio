import technologies from "../technologies.js";

const Technologies = () => {

  return (
    <section id="technologies" className="w-full py-16 bg-[#121212] text-[#EAEAEA]">
      <div className="max-w-7xl w-full mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#4A90E2] mb-8 text-center">
          Tecnologias
        </h2>
        <p className="mb-8 text-center">
          Aqui estão algumas das tecnologias com as quais trabalho:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <a
              key={tech.name}
              rel="noopener noreferrer"
              className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300 flex flex-col items-center" // Estilos e flexbox para centralizar
            >
              <img
                src={tech.image} // Exibe a imagem da tecnologia
                alt={tech.name} // Texto alternativo para acessibilidade
                className="h-16 w-16 mb-4 object-contain" // Ajuste o tamanho da imagem conforme necessário
              />
              <span className="text-lg font-medium">{tech.name}</span>{' '}
              {/* Exibe o nome da tecnologia */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
