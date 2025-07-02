import React from 'react';
import { Heart, Leaf, Users, Award, BookOpen, Recycle } from 'lucide-react';

const Social = () => {
  const initiatives = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Fomento de Buenas Prácticas",
      description: "Promoción del uso de EPP, señalización adecuada y manejo responsable de residuos",
      color: "red",
      achievements: ["100% EPP certificado", "Señalización completa", "Cero accidentes en 2023"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Relación con Comunidades",
      description: "Trabajo conjunto con comunidades mineras para el desarrollo sostenible",
      color: "blue",
      achievements: ["15 comunidades beneficiadas", "Empleo local directo", "Programas de capacitación"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Educación Ambiental",
      description: "Programas internos de concientización y educación ambiental",
      color: "green",
      achievements: ["Personal 100% capacitado", "Talleres mensuales", "Certificaciones ambientales"]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Participación Institucional",
      description: "Activa participación en eventos y actividades sociales de la región",
      color: "yellow",
      achievements: ["10+ eventos anuales", "Patrocinios deportivos", "Actividades culturales"]
    }
  ];

  const environmentalActions = [
    {
      icon: <Recycle className="h-6 w-6" />,
      title: "Gestión de Residuos",
      description: "Manejo responsable de residuos peligrosos y no peligrosos"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eficiencia Energética",
      description: "Optimización del consumo energético en todas nuestras operaciones"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Capacitación Continua",
      description: "Formación permanente en temas ambientales y de seguridad"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "from-red-500 to-red-600",
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      yellow: "from-yellow-500 to-yellow-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBackgroundClasses = (color: string) => {
    const colors = {
      red: "from-red-50 to-red-100",
      blue: "from-blue-50 to-blue-100",
      green: "from-green-50 to-green-100",
      yellow: "from-yellow-50 to-yellow-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="social" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Responsabilidad Social y Ambiental</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprometidos con el desarrollo sostenible y el bienestar de las comunidades donde operamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div key={index} className={`bg-gradient-to-br ${getBackgroundClasses(initiative.color)} rounded-xl p-8 border border-gray-200`}>
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${getColorClasses(initiative.color)} text-white mb-6`}>
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
              <p className="text-gray-700 mb-6">{initiative.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-3">Logros Destacados:</h4>
                {initiative.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(initiative.color)}`}></div>
                    <span className="text-sm text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Acciones Ambientales</h3>
            <p className="text-gray-600">
              Implementamos prácticas sostenibles en todas nuestras operaciones
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {environmentalActions.map((action, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                <div className="text-green-600 mb-4">{action.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Impacto Social 2023</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">Empleos Directos</div>
                  <div className="text-sm text-gray-600">Personal contratado localmente</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">45</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">Capacitaciones</div>
                  <div className="text-sm text-gray-600">Talleres y cursos realizados</div>
                </div>
                <div className="text-2xl font-bold text-green-600">24</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">Inversión Social</div>
                  <div className="text-sm text-gray-600">Monto destinado a programas</div>
                </div>
                <div className="text-2xl font-bold text-yellow-600">S/ 85K</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificaciones y Reconocimientos</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">ISO 14001</h4>
                <p className="text-sm text-gray-600">Sistema de Gestión Ambiental (en proceso)</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">OHSAS 18001</h4>
                <p className="text-sm text-gray-600">Seguridad y Salud Ocupacional (en proceso)</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">Empresa Socialmente Responsable</h4>
                <p className="text-sm text-gray-600">Reconocimiento regional 2023</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Próximas Metas</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Certificación ISO 14001 completa</li>
                <li>• Reducción 20% huella de carbono</li>
                <li>• Programa de becas estudiantiles</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Juntos construimos un futuro sostenible</h3>
          <p className="text-lg mb-6 opacity-90">
            Nuestro compromiso con la responsabilidad social y ambiental es fundamental para el desarrollo de la región
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Ver Informe de Sostenibilidad
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300">
              Únete a Nuestras Iniciativas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;