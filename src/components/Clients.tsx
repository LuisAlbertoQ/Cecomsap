import React from 'react';
import { Users, Building, Truck, MapPin, Star, Handshake } from 'lucide-react';

const Clients = () => {
  const cooperatives = [
    "Cooperativa minera Santiago de Ananea",
    "Cooperativa minera Señor de Ananea",
    "Cooperativa minera San Juan de Dios",
    "Cooperativa minera El Dorado",
    "Cooperativa minera Municipal",
    "Cooperativa minera San Antonio",
    "Cooperativa minera Estrella de oro",
    "Cooperativa minera Halcon de Oro",
    "Cooperativa minera Los Andes",
    "Cooperativa minera San Francisco"
  ];

  const clientTypes = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Cooperativas Mineras",
      description: "Nuestros socios fundadores y principales clientes",
      count: "10+ cooperativas",
      color: "blue"
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Transportistas",
      description: "Empresas de transporte del sector minero",
      count: "50+ empresas",
      color: "yellow"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Minería Informal",
      description: "Pequeños productores mineros de la región",
      count: "200+ clientes",
      color: "green"
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Corredor Minero",
      description: "Empresas del corredor minero de Puno",
      count: "30+ empresas",
      color: "blue"
    }
  ];

  const benefits = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Calidad Garantizada",
      description: "Combustibles certificados con los más altos estándares"
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Confianza Mutua",
      description: "Más de 10 años construyendo relaciones sólidas"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Atención Personalizada",
      description: "Servicio adaptado a las necesidades específicas"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      yellow: "from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Clientes y Socios</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construyendo el futuro del sector minero junto a nuestros socios estratégicos y clientes de confianza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clientTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`bg-gradient-to-r ${getColorClasses(type.color)} p-6 text-white`}>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getColorClasses(type.color)} text-white`}>
                  {type.count}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cooperativas Socias Fundadoras</h3>
            <p className="text-gray-600 mb-6">
              Las 10 cooperativas mineras que forman parte de la Central CECOMSAP y que son nuestros socios estratégicos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cooperatives.map((coop, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700 font-medium">{coop}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Beneficios para Nuestros Clientes</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-600 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-3">Programa de Fidelización</h4>
              <p className="text-gray-700 text-sm mb-4">
                Descuentos especiales y beneficios exclusivos para nuestros clientes frecuentes
              </p>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300">
                Conocer Más
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">¿Quieres ser parte de nuestra familia?</h3>
          <p className="text-lg mb-6 opacity-90">
            Únete a más de 300 clientes satisfechos que confían en nosotros para abastecer sus operaciones mineras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
              Solicitar Membresía
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300">
              Ver Testimonios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;