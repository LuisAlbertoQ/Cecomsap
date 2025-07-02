import React from 'react';
import { Fuel, Truck, Wrench, Clock, Shield, Users } from 'lucide-react';

const Services = () => {
  const fuelTypes = [
    {
      name: "Diésel B5-S50",
      description: "Combustible premium para maquinaria pesada",
      specs: "Bajo azufre, alta eficiencia"
    },
    {
      name: "Gasohol 90 Plus",
      description: "Gasolina de alto octanaje para vehículos",
      specs: "90 octanos, rendimiento superior"
    },
    {
      name: "Gasohol 95 Plus",
      description: "Gasolina premium de máxima calidad",
      specs: "95 octanos, tecnología avanzada"
    }
  ];

  const services = [
    {
      icon: <Fuel className="h-12 w-12" />,
      title: "Venta de Combustibles",
      description: "Amplia gama de combustibles líquidos de alta calidad para todas las necesidades del sector minero",
      features: ["Diésel B5-S50", "Gasohol 90 Plus", "Gasohol 95 Plus", "Precios competitivos"]
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Transporte Especializado",
      description: "Flota propia de cisternas modernas para distribución segura y eficiente",
      features: ["Cisternas de 3,000 galones", "Cisternas de 9,000 galones", "Cisternas de 10,000 galones", "Monitoreo satelital"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Atención Personalizada",
      description: "Servicio especializado para cooperativas y empresas mineras con atención 24/7",
      features: ["Asesoría técnica", "Planes de abastecimiento", "Facturación flexible", "Soporte especializado"]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Asistencia Técnica",
      description: "Soporte técnico especializado para emergencias y mantenimiento preventivo",
      features: ["Emergencias 24/7", "Mantenimiento preventivo", "Diagnóstico técnico", "Capacitación al personal"]
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Despacho Normado",
      description: "Cumplimiento estricto de normas de seguridad y calidad en todos los despachos",
      features: ["Certificación de calidad", "Protocolos de seguridad", "Trazabilidad completa", "Documentación legal"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Seguridad Integral",
      description: "Máximos estándares de seguridad en almacenamiento, transporte y distribución",
      features: ["EPP certificado", "Protocolos estrictos", "Personal capacitado", "Equipos de emergencia"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales en combustibles y transporte para el sector minero con los más altos estándares de calidad
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Tipos de Combustible</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fuelTypes.map((fuel, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-6 border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <Fuel className="h-8 w-8 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">{fuel.name}</h4>
                </div>
                <p className="text-gray-700 mb-3">{fuel.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-600">{fuel.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-6">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-1 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas un servicio personalizado?</h3>
            <p className="text-lg mb-6">Contáctanos para desarrollar una solución específica para tu operación minera</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;