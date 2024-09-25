import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import article1 from '../articles/article1';
import article2 from '../articles/article2';

const writingsData = [article1, article2];

const BlogArticlePage = () => {
  const { id } = useParams();
  const article = writingsData.find((item) => item.id === id);
  const navigate = useNavigate();

  if (!article) {
    return <p className="text-center text-red-500">Artículo no encontrado</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(article.date).toLocaleDateString()}</p>
      
      {/* Renderiza contenido del artículo con ReactMarkdown y plugins */}
      <ReactMarkdown
        className="prose prose-lg"
        remarkPlugins={[remarkGfm]}
        components={{
          img({ node, ...props }) {
            return <img {...props} className="max-w-full h-auto my-4" alt={props.alt || 'Image'} />;
          },
          code({ node, inline, className, children, ...props }) {
            return inline ? (
              <code className="bg-gray-100 text-gray-800 rounded px-2">{children}</code>
            ) : (
              <pre className="bg-gray-100 border border-gray-200 rounded-xl p-4 my-4 text-gray-800 overflow-x-auto">
                <code {...props}>{children}</code>
              </pre>
            );
          },
        }}
      >
        {article.content}
      </ReactMarkdown>
      
      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
      >
        Volver al blog
      </button>
    </div>
  );
};

export default BlogArticlePage;
