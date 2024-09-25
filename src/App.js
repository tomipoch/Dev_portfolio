import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Header from './components/Header'; // Lista de artículos
import BlogArticlePage from './components/BlogArticlePage'; // Página de artículo

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          {/* Ruta para el inicio */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Blog />
                <Experience />
              </>
            }
          />

          {/* Ruta para la página de contacto */}
          <Route path="/contacto" element={<Contact />} />

          {/* Ruta para la lista de artículos del blog */}
          <Route path="/blogs" element={<Blog />} />

          {/* Ruta dinámica para un artículo específico */}
          <Route path="/blog/:id" element={<BlogArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
