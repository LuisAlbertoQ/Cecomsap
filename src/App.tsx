import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Infrastructure from './components/Infrastructure';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StrategicMap from './components/StrategicMap';

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white">
      <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
      <Hero />
      <About />
      <Services />
      <Clients />
      <Infrastructure />
      <Social />
      <Contact />
      <Footer />
              </>
            }
          />
          <Route path="/mapa-estrategico" element={<StrategicMap />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;