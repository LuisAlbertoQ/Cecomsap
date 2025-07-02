import React, { useState, useEffect } from 'react';
import { Menu, X, Fuel } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que la página principal cargue antes de hacer scroll
      setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMenuOpen(false);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-2 rounded-lg">
              <Fuel className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                CECOMSAP
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Multiservicios S.A.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Inicio', id: 'inicio' },
              { name: 'Nosotros', id: 'nosotros' },
              { name: 'Servicios', id: 'servicios' },
              { name: 'Clientes', id: 'clientes' },
              { name: 'Infraestructura', id: 'infraestructura' },
              { name: 'Social', id: 'social' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-yellow-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Link
              to="/mapa-estrategico"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-blue-700' : 'text-blue-200'
              }`}
            >
              Mapa Estratégico
            </Link>
            <Link
              to="/archivos-excel"
              className={`font-medium transition-colors hover:text-green-600 ${
                isScrolled ? 'text-green-700' : 'text-green-200'
              }`}
            >
              Archivos Excel
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            {[
              { name: 'Inicio', id: 'inicio' },
              { name: 'Nosotros', id: 'nosotros' },
              { name: 'Servicios', id: 'servicios' },
              { name: 'Clientes', id: 'clientes' },
              { name: 'Infraestructura', id: 'infraestructura' },
              { name: 'Social', id: 'social' },
              { name: 'Contacto', id: 'contacto' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600"
              >
                {item.name}
              </button>
            ))}
            <Link
              to="/mapa-estrategico"
              className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50 hover:text-blue-900 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Mapa Estratégico
            </Link>
            <Link
              to="/archivos-excel"
              className="block w-full text-left px-4 py-2 text-green-700 hover:bg-green-50 hover:text-green-900 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Archivos Excel
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;