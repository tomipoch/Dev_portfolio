import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './components/Contact';
import BlogArticlePage from './components/BlogArticlePage';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog/:id" element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogArticlePage />
            </Suspense>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
