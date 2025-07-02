import React from 'react';
import { Database, Truck, Monitor, Smartphone, Satellite, Gauge } from 'lucide-react';

const Infrastructure = () => {
  const storage = [
    { capacity: "15,000", type: "Tanque Principal Diésel", color: "blue" },
    { capacity: "12,096", type: "Tanque Secundario Diésel", color: "blue" },
    { capacity: "5,000", type: "Tanque Gasohol 90", color: "yellow" },
    { capacity: "5,000", type: "Tanque Gasohol 95", color: "green" }
  ];

  const dispensers = [
    { number: "01", products: "Diésel B5-S50", hoses: "2 mangueras" },
    { number: "02", products: "Gasohol 90 Plus", hoses: "2 mangueras" },
    { number: "03", products: "Gasohol 95 Plus", hoses: "2 mangueras" }
  ];

  const fleet = [
    { capacity: "3,000", quantity: "2", type: "Cisterna Liviana" },
    { capacity: "9,000", quantity: "1", type: "Cisterna Media" },
    { capacity: "10,000", quantity: "1", type: "Cisterna Pesada" }
  ];

  const systems = [
    {
      icon: <Database className="h-8 w-8" />,
      name: "SIGER",
      description: "Sistema Integral de Gestión de Estaciones de Servicio",
      features: ["Control de inventarios", "Gestión de ventas", "Reportes automáticos"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      name: "Apps Móviles",
      description: "Aplicaciones para gestión de flota y control de stock",
      features: ["Seguimiento en tiempo real", "Alertas automáticas", "Gestión de rutas"]
    },
    {
      icon: <Satellite className="h-8 w-8" />,
      name: "Monitoreo Satelital",
      description: "Control GPS de todas las unidades de transporte",
      features: ["Ubicación en tiempo real", "Control de velocidad", "Alertas de seguridad"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      green: "bg-green-100 text-green-800 border-green-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="infraestructura" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Infraestructura y Tecnología</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instalaciones modernas y tecnología avanzada para garantizar la máxima eficiencia y seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Database className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Capacidad de Almacenamiento</h3>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">37,096</div>
              <div className="text-gray-700 font-medium">Galones Totales</div>
            </div>
            <div className="space-y-4">
              {storage.map((tank, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 ${getColorClasses(tank.color)}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{tank.type}</div>
                      <div className="text-sm opacity-80">Capacidad: {tank.capacity} galones</div>
                    </div>
                    <Gauge className="h-6 w-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Gauge className="h-10 w-10 text-yellow-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Estación de Servicio</h3>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
              <div className="text-gray-700 font-medium">Dispensadores Modernos</div>
            </div>
            <div className="space-y-4">
              {dispensers.map((dispenser, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border-2 border-yellow-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Dispensador {dispenser.number}</div>
                      <div className="text-sm text-gray-600">{dispenser.products}</div>
                    </div>
                    <div className="text-sm font-medium text-yellow-700">
                      {dispenser.hoses}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Truck className="h-10 w-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Flota de Transporte</h3>
            </div>
            <div className="space-y-4">
              {fleet.map((vehicle, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border-2 border-green-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">{vehicle.type}</div>
                      <div className="text-sm text-gray-600">Capacidad: {vehicle.capacity} galones</div>
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {vehicle.quantity} unidades
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-green-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">4</div>
                <div className="text-gray-700 font-medium">Cisternas Totales</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Monitor className="h-10 w-10 text-purple-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Sistemas Tecnológicos por Implementar</h3>
            </div>
            <div className="space-y-6">
              {systems.map((system, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border-2 border-purple-200">
                  <div className="flex items-start space-x-3">
                    <div className="text-purple-600">{system.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{system.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{system.description}</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1 h-1 bg-purple-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Tecnología de Vanguardia</h3>
            <p className="text-lg mb-8 opacity-90">
              Nuestras inversiones en tecnología nos permiten ofrecer el mejor servicio con máxima seguridad y eficiencia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm">Monitoreo GPS</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-sm">Control de Stock</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">Real Time</div>
                <div className="text-sm">Reportes Automáticos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;