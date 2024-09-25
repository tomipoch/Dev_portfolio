import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto 📞</h2>
          <p className="text-sm text-gray-600">
            Si deseas ponerte en contacto conmigo, rellena este formulario. ¡Te responderé pronto!
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Actualmente son las {time}, así que probablemente esté disponible.
          </p>
        </header>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tu mensaje"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
