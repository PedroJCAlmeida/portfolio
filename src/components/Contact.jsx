const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">Entre em contacto pelo formulário abaixo.</p>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Mensagem"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="!bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
