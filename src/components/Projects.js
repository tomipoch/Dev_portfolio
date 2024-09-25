import React from 'react';
import Forment from '../assets/Forment.svg';
import CriminalScan from '../assets/Frame 11.png';
import { GoArrowUpRight } from "react-icons/go";

const ProjectSection = () => {
  const projectData = [
    {
      id: '01',
      imageUrl: CriminalScan,
      title: 'Criminal Scan',
      tech: 'Aplicación móvil que utiliza IA para verificar antecedentes penales mediante reconocimiento facial.',
      link: 'https://github.com/tomipoch/Criminal-Scan',
    },
    {
      id: '02',
      imageUrl: Forment,
      title: 'Forment',
      tech: 'Sistema de encuestas para usuarios que permite ver reportes detallados.',
      link: 'https://github.com/tomipoch/Forment',
    },
  ];

  return (
    <div className="bg-gray-50 w-full  px-4 py-10">
      <div className="max-w-2xl mx-auto w-full">
        <p className="text-xl font-bold text-gray-800 mb-6">Proyectos 🚀</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-44 object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="flex mt-4 mb-4 justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.tech}</p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Enlace a ${project.title}`} className="text-black">
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
