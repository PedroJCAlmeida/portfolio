import projects from "../projects.js";

const Projects = () => {
    return (
        <section id="projects" className="w-full py-16 bg-[#121212] text-[#EAEAEA]">
            <div className="w-full mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#4A90E2] mb-8 text-center">
                    Projectos
                </h2>

                {/* Grid responsiva */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col min-h-[400px]"
                        >
                            {/* Imagem responsiva */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />

                            {/* Conteúdo principal */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-400">{project.description}</p>

                                {/* Tecnologias usadas */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-[#4A90E2] text-white px-2 py-1 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Botão sempre alinhado no final */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 outline-none focus:ring-2 focus:ring-blue-300"
                            >
                                🔗 Ver Projeto
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;