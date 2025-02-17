import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import socialMedia from '../contact-info.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;

    if (successMessage || errorMessage) {
      timer = setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 10000);
    }

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado ou a mensagem mudar
  }, [successMessage, errorMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_hcko5kr', // Substitua pelo seu Service ID
        'template_7gizpfv', // Substitua pelo seu Template ID
        templateParams,
        'c_d_5mwDJJmkFgHnw' // Substitua pela sua Public Key
      );

      setSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">Entre em contacto pelo formulário abaixo.</p>
      <form className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8 space-y-4" onSubmit={handleSubmit}> {/* Classes de largura responsivas */}
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          className="w-full p-3 bg-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition" // w-full no botão para ocupar a largura do container
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>

      <div className="mt-8 flex justify-center space-x-6">
                {socialMedia.contactInfo.map((item) => ( // Acesse socialMedia dentro de contactInfo
                    <a
                        key={item.name}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <img src={item.icon} alt={item.name} className="h-8 w-8 filter invert" /> {/* Ajuste o tamanho dos ícones */}
                    </a>
                ))}
            </div>

            <div className="mt-6 flex justify-center space-x-6">
                <a href={`tel:${socialMedia.contactNumber[0].link}`} className="text-gray-400 hover:text-white transition duration-300">
                <img src={socialMedia.contactNumber[0].icon}  className="h-8 w-8 filter invert" /> 
                </a>

                <a
                    href={`https://wa.me/${socialMedia.contactNumber[1].link.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300"
                >
                    <img src={socialMedia.contactNumber[1].icon}  className="h-8 w-8 filter invert" /> 
                </a>
            </div>
    </section>
  );
};

export default Contact;