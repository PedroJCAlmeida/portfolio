const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white w-full px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo ao Meu Portfólio</h1>
      <p className="text-lg md:text-xl max-w-3xl">
        Desenvolvedor apaixonado por criar experiências digitais incríveis com tecnologias modernas.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition"
      >
        Ver Projetos
      </a>
    </section>
  );
};

export default Hero;
