import React from 'react';
import Forment from '../assets/Forment.svg'; // Ruta de la imagen
//import Omega from '../assets/Group 8.png'; // Ruta de la imagen
import CriminalScan from '../assets/Frame 11.png'; // Ruta de la imagen
import { GoArrowUpRight } from "react-icons/go";

const ProjectSection = () => {
  const projectData = [
    {
      id: '01',
      imageUrl: CriminalScan,
      title: 'Criminal Scan',
      tech: 'Aplicacion Movil que utiliza IA para verificar antecedentes penales de personas por medio de reconocimiento facial ',
      link: 'https://github.com/tomipoch/Criminal-Scan',
    },
    {
      id: '02',
      imageUrl: Forment,
      title: 'Forment',
      tech: 'Sistema de encuestas, permite a los usuarios registrarse, iniciar sesión, completar formularios de encuestas y ver reportes detallados.',
      link: 'https://github.com/tomipoch/Forment',
    },
    /*
    {
      id: '03',
      imageUrl: Omega,
      title: 'Relojería y Joyería Omega',
      tech: 'React js, Express JS, PostgreSQL',
      link: 'https://notes-webapp.pages.dev/',
    },
    */
  ];

  return (
    <div className="bg-gray-50 w-full">
      <div className="max-w-2xl mx-auto px-4 pb-8"> {/* Igual padding horizontal al Hero */}        
        <div>
          <p className="text-xl font-bold text-gray-800 mb-6">Proyectos 🚀</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              {/* Imagen del proyecto */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-44 object-cover rounded-2xl"
              />
              {/* Contenedor con título y icono */}
              <div className="flex mt-4 mb-4 justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.tech}</p>
                </div>
                {/* Ícono de enlace */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <GoArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

