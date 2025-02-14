import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
      {/* ... */}
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        {/* ... */}
        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;