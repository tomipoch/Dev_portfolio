import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import CV from '../assets/Curriculum_Vitae.pdf'
import Perfil from '../assets/perfil.jpeg'

const Hero = () => {
  return (
    <section className="flex flex-col justify-center bg-gray-50 transition-colors px-6"> {/* Eliminé py-12 para quitar el padding vertical */}
      {/* Contenedor principal más angosto */}
      <div className="max-w-2xl  mx-auto px-4 mb-10"> {/* Añadí px-4 para igualarlo a Projects */}
        
        {/* Perfil del usuario */}
        <header className="flex flex-col items-start mb-10"> {/* Cambié a flex-col para alinear verticalmente */}
          <img
            src={Perfil}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-4" 
          />
          <div className="text-left"> {/* text-left para justificar a la izquierda */}
            <h1 className="text-xl font-bold text-gray-800">
              Tomás Poblete Chamorro
            </h1>
            <p className="text-xs text-gray-600">
              Estudiante Ingeniería Civil Informática
            </p>
            <p className="text-xs text-gray-500">
              Talca, Chile
            </p>
          </div>
        </header>

        {/* Descripción */}
        <div className="mb-6">
  <h2 className="text-lg font-semibold text-gray-800 mb-3">
  Lo que hago 💭
  </h2>
  <p className="text-sm text-gray-600">
    Soy especialista en desarrollo frontend con <span className="font-bold">React.js</span> y <span className="font-bold">Next.js</span>, apasionado por crear aplicaciones web dinámicas y responsivas. Además de mis competencias en frontend, cuento con experiencia en desarrollo backend utilizando <span className="font-bold">Node.js</span>, <span className="font-bold">Express.js</span> y <span className="font-bold">Spring</span>. A esto se suman mis conocimientos en bases de datos relacionales, como <span className="font-bold">Oracle Database</span> adquiridos en mi formación universitaria, así como <span className="font-bold">PostgreSQL</span> y <span className="font-bold">MySQL</span> aplicados en proyectos personales y de análisis de datos.
  </p>
  <p className="text-sm text-gray-600 mt-3">
    Además de mis habilidades técnicas, tengo experiencia en diseño UX/UI con Figma, lo que me permite crear interfaces visualmente atractivas y fáciles de usar. También manejo herramientas de edición como Adobe Photoshop y Adobe Lightroom para fotografía, y Adobe Premiere para edición de video.
  </p>
</div>


        {/* Enlaces de redes sociales y currículum */}
        <div className="flex items-center space-x-4">
          <a
            href={CV}
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 flex items-center space-x-2 text-sm"
          >
            <span>Curriculum Vitae</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h10a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm9 5H8v1h4V9zm-4-2h2V6H8v1zm0 6h4v-1H8v1z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="mailto:ft.fernandotomas@gmail.com"
            className="text-gray-600 hover:text-gray-900"
            aria-label="Enviar email"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tomipoch/"
            className="text-gray-600 hover:text-gray-900"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/tomipoch"
            className="text-gray-600 hover:text-gray-900"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
