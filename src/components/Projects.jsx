import projects from "../projects.js";

const Projects = () => {
    return (
        <section id="projects" className="w-full py-16 bg-[#121212] text-[#EAEAEA]">
            <div className="w-full mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#4A90E2] mb-8 text-center">
                    Projectos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />

                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                            </div>

                            <div className="mt-auto"> {/* Tecnologias e botão agrupados */}
                                <div className="flex flex-wrap gap-2 mb-4"> {/* Margem inferior para separar do botão */}
                                    {project.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-[#4A90E2] text-white px-2 py-1 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 outline-none focus:ring-2 focus:ring-blue-300 w-full"
                                    onClick={() => {
                                        window.open(project.link, '_blank', 'noopener noreferrer');
                                    }}
                                >
                                    🔗 Ver Projeto
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;