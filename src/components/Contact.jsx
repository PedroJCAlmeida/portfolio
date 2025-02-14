import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar o loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Limpa mensagens de erro anteriores
    setLoading(true); // Define o loading como true

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Erro ao enviar a mensagem. Tente novamente.');
        console.error('Erro na resposta:', errorData);
      }
    } catch (error) {
      setErrorMessage('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      console.error('Erro na requisição:', error);
    } finally {
      setLoading(false); // Define o loading como false, independentemente do resultado
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">Entre em contacto pelo formulário abaixo.</p>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name" // Adicione o atributo 'name'
          placeholder="Nome"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name} // Vincule o valor ao estado
          onChange={handleChange} // Adicione o manipulador de mudança
          required // Campo obrigatório
        />
        <input
          type="email"
          name="email" // Adicione o atributo 'name'
          placeholder="Email"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email} // Vincule o valor ao estado
          onChange={handleChange} // Adicione o manipulador de mudança
          required // Campo obrigatório
        />
        <textarea
          name="message" // Adicione o atributo 'name'
          placeholder="Mensagem"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.message} // Vincule o valor ao estado
          onChange={handleChange} // Adicione o manipulador de mudança
          required // Campo obrigatório
        ></textarea>
        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition"
          disabled={loading} // Desabilita o botão enquanto carrega
        >
          {loading ? 'Enviando...' : 'Enviar'} {/* Texto do botão dinâmico */}
        </button>

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;