import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-50 pt-20 pb-10">
      <div className="max-w-2xl mx-auto px-4 flex justify-start items-center">
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
