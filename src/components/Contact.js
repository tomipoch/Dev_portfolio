import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Por favor ingrese un correo válido');
      return;
    }

    // Accedemos a las variables de entorno
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_email: email,
      message: message,
    };

    // Enviar correo usando EmailJS con variables de entorno
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormSubmitted(true); // Indicar que el formulario se ha enviado correctamente
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <section className="flex flex-col justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto 📞</h2>
          <p className="text-sm text-gray-600">Si deseas ponerte en contacto conmigo, rellena este formulario.</p>
          <p className="text-sm text-gray-500 mt-2">Actualmente son las {time}, así que probablemente esté disponible.</p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
            {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tu mensaje"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
              Enviar
            </button>
          </div>

          {formSubmitted && <p className="text-green-500 mt-4">¡Formulario enviado exitosamente!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
