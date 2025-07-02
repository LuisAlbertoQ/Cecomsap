import React from 'react';
import { Users, Target, Award, Lightbulb, Heart, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Compromiso",
      description: "Dedicados al éxito de nuestros socios y clientes"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Transparencia",
      description: "Operaciones claras y comunicación honesta"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Calidad y Seguridad",
      description: "Estándares superiores en todos nuestros servicios"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovación",
      description: "Tecnología avanzada para mejores resultados"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Solidaridad",
      description: "Apoyo mutuo entre cooperativas"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sostenibilidad",
      description: "Compromiso con el medio ambiente"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosotros</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una empresa cooperativa sólida con más de una década de experiencia en el sector energético minero
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-blue-600 font-bold mb-2">2013</div>
                <p className="text-gray-700">Inicio como consumidor directo cooperativo en el sector minero de Ananea</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <div className="text-yellow-600 font-bold mb-2">2019</div>
                <p className="text-gray-700">Fundación formal como MULTISERVICIOS CECOMSAP S.A. con capital inicial de S/ 100,000</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <div className="text-green-600 font-bold mb-2">2022</div>
                <p className="text-gray-700">Evolución a estación de servicio completa para atender mejor a nuestros socios</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Modelo Empresarial</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Sociedad anónima de base cooperativa única en la región</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Formada por 10 cooperativas mineras de la Central CECOMSAP</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Enfoque en el desarrollo sostenible del sector minero</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Compromiso con la comunidad minera de Puno</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Documentos Institucionales</h4>
              <div className="flex space-x-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium">MOF (PDF)</button>
                <button className="text-blue-600 hover:text-blue-800 font-medium">ROF (PDF)</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas de Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Misión */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Misión</h3>
            <p className="text-gray-700 mb-4">
              "Abastecer de combustibles y servicios complementarios de manera segura, eficiente y responsable a las unidades mineras y clientes de la región de Puno, promoviendo el desarrollo sostenible, la formalización del sector energético y el bienestar de nuestras cooperativas mineras asociadas y comunidades."
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li><span className="font-semibold">¿Qué necesidades satisface?</span> Abastecer de combustibles y servicios complementarios de manera segura.</li>
              <li><span className="font-semibold">¿A quiénes satisface la necesidad?</span> A las unidades mineras y clientes de la región de Puno.</li>
              <li><span className="font-semibold">¿Cómo satisface esas necesidades?</span> Promoviendo el desarrollo sostenible, la formalización del sector y el bienestar de nuestras cooperativas mineras asociadas.</li>
            </ul>
          </div>
          {/* Visión */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-500">
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Visión</h3>
            <p className="text-gray-700 mb-4">
              "Ser la estación de servicio líder en el sur del Perú vinculada al sector minero, reconocida por su eficiencia operativa, innovación tecnológica, responsabilidad ambiental y compromiso social, consolidando un modelo empresarial cooperativo que inspire progreso y confianza."
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li><span className="font-semibold">Inspiradora:</span> Expresa un propósito trascendente: ser líder en el sur del Perú, no solo en términos de negocio, sino también como referente en responsabilidad social, ambiental e innovación tecnológica.</li>
              <li><span className="font-semibold">Clara y concisa:</span> Es clara en cuanto a su sector de acción (servicio de combustibles y minería) y su ámbito geográfico (sur del Perú). Enumera sus pilares estratégicos: eficiencia, innovación, sostenibilidad y compromiso social, integrando además su identidad como modelo cooperativo.</li>
              <li><span className="font-semibold">Ambiciosa pero realista:</span> Plantea una meta ambiciosa pero alcanzable: liderazgo regional, eficiencia, innovación y sostenibilidad dentro del sector minero-energético. Estos objetivos son factibles considerando que CECOMSAP ya cuenta con una base operativa sólida, una red cooperativa establecida y un enfoque organizacional enfocado en la mejora continua.</li>
              <li><span className="font-semibold">Relevante y adaptativa:</span> Su modelo cooperativo responde a una necesidad de equidad, inclusión y desarrollo sostenible en regiones como Puno. Esto la convierte en una visión alineada a las tendencias modernas y adaptable a los cambios sociales, normativos y tecnológicos del sector energético y minero.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Organigrama Empresarial</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Nivel Estratégico</h4>
              <p className="text-sm">Junta Directiva & Gerencia General</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Nivel Táctico</h4>
              <p className="text-sm">Gerencias Operativas & Coordinaciones</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Nivel Operativo</h4>
              <p className="text-sm">Personal de Campo & Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;