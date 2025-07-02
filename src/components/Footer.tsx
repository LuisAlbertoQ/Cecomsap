import React from 'react';
import { Fuel, MapPin, Phone, Mail, Facebook, Calendar, Users, Award } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Clientes', id: 'clientes' },
    { name: 'Contacto', id: 'contacto' }
  ];

  const services = [
    'Venta de Combustibles',
    'Transporte Especializado',
    'Atención a Cooperativas',
    'Asistencia Técnica 24/7'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                <Fuel className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CECOMSAP</h3>
                <p className="text-gray-400 text-sm">Multiservicios S.A.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empresa cooperativa líder en la venta y distribución de combustibles líquidos para el sector minero en la región de Puno.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-800 p-2 rounded-lg">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <div className="text-white font-medium">Desde 2013</div>
                <div className="text-gray-400">+10 años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <h5 className="text-sm font-medium text-white mb-3">Documentos</h5>
              <ul className="space-y-2">
                <li>
                  <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                    MOF (PDF)
                  </button>
                </li>
                <li>
                  <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm">
                    ROF (PDF)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">10 Cooperativas Socias</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Certificaciones en Proceso</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  <div className="text-white font-medium">Oficina Administrativa</div>
                  <div className="text-gray-300">Jr. Callao 425, Piso 7</div>
                  <div className="text-gray-300">Juliaca, San Román – Puno</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <div className="text-sm">
                  <div className="text-white font-medium">Centro Operativo</div>
                  <div className="text-gray-300">Jr. Arenales 430</div>
                  <div className="text-gray-300">Ananea, San Antonio de Putina</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div className="text-sm">
                  <div className="text-gray-300">+51 XXX XXX XXX</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <div className="text-sm">
                  <div className="text-gray-300">info@cecomsap.com</div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.facebook.com/p/Multiservicios-Cecomsap-sa-100082839807074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Síguenos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 MULTISERVICIOS CECOMSAP S.A. Todos los derechos reservados.</p>
              <p className="mt-1">RUC: XXXXXXXXXX | Capital Social: S/ 100,000</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">
                Términos y Condiciones
              </button>
              <button className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Servicio 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;