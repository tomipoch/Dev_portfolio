import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-50 px-4 pt-20"> {/* Ajustar el padding y margen para que sea consistente */}
      <div className="max-w-2xl mx-auto w-full flex justify-start items-center"> {/* max-w-2xl y w-full para mantener la misma anchura */}
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
            Inicio
          </Link>
          <Link to="/contacto" className="text-gray-600 hover:text-gray-900 text-sm">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
