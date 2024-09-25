import React from 'react';

const experienceData = [
  {
    date: 'nov. 2021 - feb. 2022',
    company: 'Ripley Chile',
    position: 'Ayudante SAC Y RET',
    description: 'Liderazgo en equipos de trabajo, revisión de producto y mejora en la satisfacción del cliente.',
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-50 w-full py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Experiencia 🛠️</h2>
        <ul>
          {experienceData.map((exp, index) => (
            <li key={index} className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="text-sm text-gray-500 mb-1 sm:mb-0 sm:w-1/3">{exp.date}</p>
                <div className="sm:w-2/3">
                  <p className="text-sm font-semibold text-gray-900">
                    <span className="hover:underline">{exp.company}</span> | {exp.position}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
