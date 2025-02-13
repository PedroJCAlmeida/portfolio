import ImgProfile from "../assets/profile.jpg"
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white text-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagem */}
        <img
          src={ImgProfile} // Substitua pelo caminho correto da sua foto
          alt="Foto de perfil"
          className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-blue-500 shadow-lg"
        />
        
        {/* Texto */}
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Sobre Mim</h2>
          <p className="text-gray-300 leading-relaxed">
            Sou estudante de <strong>Engenharia Informática</strong> na <strong>Universidade Aberta (UAb)</strong>, com dois anos de experiência em desenvolvimento de software. Durante esse tempo, trabalhei tanto de forma independente quanto em equipe, desenvolvendo aplicações robustas e escaláveis.</p>
          <p className="text-gray-300 leading-relaxed mt-2">
            Tenho experiência em <strong>C#, .NET Framework, .NET Core MVC, Entity Framework, SQL Server, HTML, CSS, Bootstrap e JavaScript</strong>. Atualmente, estou aprimorando minhas habilidades em <strong>React, Java, Spring Boot e MySQL</strong> para criar aplicações web modernas e dinâmicas.
          </p>
          <p className="text-gray-300 leading-relaxed mt-2">
            Meu objetivo é tornar-me um <strong>desenvolvedor full-stack altamente qualificado</strong>, aprimorando constantemente meu conhecimento e contribuindo com soluções inovadoras que gerem impacto positivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
