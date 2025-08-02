import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import GetSupport from './pages/GetSupport';
import Partners from './pages/Partners';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/get-support" element={<GetSupport />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;