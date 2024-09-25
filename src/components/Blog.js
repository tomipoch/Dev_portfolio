import React from 'react';
import { Link } from 'react-router-dom';
import article1 from '../articles/article1';
import article2 from '../articles/article2';
// Importa más artículos según sea necesario

const writingsData = [article1, article2]; // Array de artículos

const Blog = () => {
  return (
    <section className="bg-gray-50 w-full py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Blogs 📝</h2>
        <ul>
          {writingsData.map((writing) => (
            <li key={writing.id} className="mb-4">
              <Link
                to={`/blog/${writing.id}`}
                className="text-sm font-semibold text-gray-900 hover:underline cursor-pointer"
              >
                {writing.title}
              </Link>
              <p className="text-sm text-gray-400">
                {writing.date ? new Date(writing.date).toLocaleDateString() : 'Fecha no disponible'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
