import React from 'react';

const BlogArticle = ({ title, date, content }) => {
  return (
    <article className="bg-white shadow-md rounded-lg p-6 mb-6">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-sm text-gray-500">{date ? new Date(date).toLocaleDateString() : 'Fecha no disponible'}</p>
      </header>
      <section className="prose prose-lg">
        {content}
      </section>
    </article>
  );
};

export default BlogArticle;
