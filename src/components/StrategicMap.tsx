import React, { useState } from 'react';

const cameOptions: Record<string, { category: string; description: string }> = {
  // EXPLORAR (Oportunidades)
  'E1': {
    category: 'explorar',
    description: '(FOE1) Expandir estratégicamente la presencia y oferta de servicios en zonas de crecimiento económico regional, apalancándose en la agilidad de la dirección centralizada.'
  },
  'E2': {
    category: 'explorar',
    description: '(FOE2)Desarrollar una estrategia de expansión de servicios con valor agregado que capitalice el crecimiento regional y la demanda de operaciones fuera del horario habitual'
  },
  'E3': {
    category: 'explorar',
    description: '(FOE3) Desarrollar y comunicar un modelo de gestión minero-regional responsable que destaque la eficiencia operativa y formalización, respondiendo a la sensibilidad ambiental y social.'
  },
  'E4': {
    category: 'explorar',
    description: '(DOE4) Negociar con el proveedor principal (o explorar alternativas) para beneficiarse del fondo de estabilización, reduciendo la vulnerabilidad ante la dependencia y volatilidad de precios.'
  },
  'E5': {
    category: 'explorar',
    description: '(FOE5) Establecer un marco integral de aseguramiento de la calidad y la transparencia en las operaciones logísticas a través de la digitalización y la trazabilidad avanzada.'
  },
  'E6': {
    category: 'explorar',
    description: '(FOE6) Fortalecer la relación con los miembros y clientes mediante la adopción de ecosistemas digitales que brinden experiencias personalizadas y refuercen la identidad cooperativa.'
  },
  'E7': {
    category: 'explorar',
    description: '(FOE7) Anticiparse y adaptarse proactivamente a la reforma de la Ley de Hidrocarburos, destacando el estricto cumplimiento normativo actual y la versatilidad de la oferta de productos.'
  },
  'E8': {
    category: 'explorar',
    description: '(FOE8) Optimizar la planificación del suministro y gestión de precios con las cooperativas, utilizando el fondo de estabilización para ofrecer mayor eficiencia y previsibilidad en costos.'
  },
  'E9': {
    category: 'explorar',
    description: '(FOE9) Desarrollar y potenciar las capacidades técnicas y digitales del capital humano para asegurar la eficiencia operativa y la precisión en toda la cadena de valor logística.'
  },
  'E10': {
    category: 'explorar',
    description: '(FOE10) Fomentar un modelo de co-creación de valor y mejora continua de servicios, apalancándose en la participación activa de los miembros y el espíritu cooperativo a través de plataformas colaborativas.'
  },
  'E11': {
    category: 'explorar',
    description: '(FOE11) Automatizar procesos clave en la cadena de suministro para el sector minero-regional, capitalizando la eficiencia y formalización para ofrecer un servicio más ágil y fiable.'
  },
  // AFRONTAR (Amenazas)
  'A1': {
    category: 'afrontar',
    description: '(FAE1) Mantener una comunicación proactiva y centralizada con los Gerentes y autoridades para anticipar y navegar periodos de inestabilidad política y conflictos sociales.'
  },
  'A2': {
    category: 'afrontar',
    description: '(FAE2) Asegurar y comunicar el estricto cumplimiento normativo con OSNERGMIN como un escudo ante futuras modificaciones regulatorias, garantizando adaptabilidad y continuidad operativa.'
  },
  'A3': {
    category: 'afrontar',
    description: '(FAE3) Fortalecer la coordinación con cooperativas para optimizar la gestión de inventarios y compras, mitigando el impacto de la volatilidad de precios internacionales.'
  },
  'A4': {
    category: 'afrontar',
    description: '(FAE4) Mantener la eficiencia operativa y formalización en el sector minero-regional para seguir siendo un proveedor competitivo y resiliente, a pesar de la dependencia económica.'
  },
  'A5': {
    category: 'afrontar',
    description: '(FAE5) Retener y desarrollar al personal técnico calificado a través de programas de incentivos y crecimiento, contrarrestando la fuga de talento juvenil.'
  },
  'A6': {
    category: 'afrontar',
    description: '(FAE6) Reforzar la capacidad de respuesta y soporte técnico en condiciones climáticas adversas (El Niño) para asegurar la continuidad de las recargas nocturnas y el servicio en general.'
  },
  'A7': {
    category: 'afrontar',
    description: '(DAE6)Invertir urgentemente en sistemas de integración digital y monitoreo de flota para mejorar la respuesta operativa y logística durante fenómenos climáticos adversos como El Niño.'
  },
  'A8': {
    category: 'afrontar',
    description: '(FAE8) Reforzar los mecanismos de transparencia y control interno basados en los valores de responsabilidad y compromiso, para cumplir proactivamente con la supervisión de la UIF.'
  },
  'A9': {
    category: 'afrontar',
    description: '(FAE7) Asegurar la consistencia y documentación de la política de calidad para superar exitosamente fiscalizaciones ambientales y auditorías, demostrando cumplimiento riguroso.'
  },
  'A10': {
    category: 'afrontar',
    description: '(FAE10) Potenciar el modelo cooperativo como factor diferenciador para fortalecer la fidelización de clientes, creando barreras a la entrada de nuevos competidores.'
  },
  'A11': {
    category: 'afrontar',
    description: '(DAE11) Establecer alianzas estratégicas o diversificar proveedores para reducir el riesgo de ser afectado por modificaciones regulatorias que puedan impactar a tu proveedor principal.'
  },
  'A12': {
    category: 'afrontar',
    description: '(FAE11) Fortalecer la cultura organizacional cooperativa para fomentar la lealtad y el compromiso de los clientes, reduciendo su poder de negociación a través de una relación de pertenencia.'
  },
  // MANTENER (Fortalezas)
  'F4': {
    category: 'mantener',
    description: '(FOE4) Posicionarse como socio estratégico para la gestión de contingencias ambientales, destacando los valores de responsabilidad y compromiso cooperativo.'
  },
  'F6': {
    category: 'mantener',
    description: '(FOE6) Fortalecer la relación con los miembros y clientes mediante la adopción de ecosistemas digitales que brinden experiencias personalizadas y refuercen la identidad cooperativa.'
  },
  'F10': {
    category: 'mantener',
    description: '(FAE10) Potenciar el modelo cooperativo como factor diferenciador para fortalecer la fidelización de clientes, creando barreras a la entrada de nuevos competidores.'
  },
  'F12': {
    category: 'mantener',
    description: '(FOE12) Comunicar activamente las iniciativas de responsabilidad social y ambiental de la cooperativa, alineándose con la creciente sensibilidad ambiental y la presión social.'
  },
  // CORREGIR (Debilidades)
  'D1': {
    category: 'corregir',
    description: '(DOE1) Desarrollar un plan de expansión gradual y estratégico hacia nuevas zonas mineras en Puno, capitalizando el crecimiento económico regional para superar la limitación territorial.'
  },
  'D2': {
    category: 'corregir',
    description: '(DOE2) Aprovechar las nuevas plataformas digitales para crear servicios de valor añadido o una experiencia de cliente diferenciada que mejore la competitividad frente a grifos privados.'
  },
  'D3': {
    category: 'corregir',
    description: '(DOE3) Diseñar estrategias de promoción innovadoras (más allá del volumen) que capten la atención de nuevos clientes en un contexto de crecimiento económico regional.'
  },
  'D4': {
    category: 'corregir',
    description: '(DAE4) Explorar y negociar con proveedores alternativos o diversificar la cadena de suministro para reducir la dependencia y mitigar el riesgo de volatilidad de precios.'
  },
  'D5': {
    category: 'corregir',
    description: '(DAE5) Acelerar el proceso de digitalización integral de la empresa para cumplir eficientemente con la obligación de implementar SIGER y evitar sanciones.'
  },
  'D6': {
    category: 'corregir',
    description: '(DOE6) Establecer un ecosistema digital integral que unifique las operaciones, el monitoreo de flotas y la gestión general, apalancándose en la última tecnología de plataformas para optimizar la toma de decisiones.'
  }
};

const categoryNames: Record<string, string> = {
  'explorar': 'EXPLORAR (Oportunidades)',
  'afrontar': 'AFRONTAR (Amenazas)',
  'mantener': 'MANTENER (Fortalezas)',
  'corregir': 'CORREGIR (Debilidades)'
};

const categoryIcons: Record<string, string> = {
  'explorar': '🚀',
  'afrontar': '🛡️',
  'mantener': '💪',
  'corregir': '🔧'
};

// Objetivos por perspectiva (estructura simplificada para el ejemplo)
const perspectives = [
  {
    name: 'PERSPECTIVA FINANCIERA',
    icon: '💰',
    color: 'from-yellow-400 to-yellow-300',
    objectives: [
      { codes: ['E2', 'E8'], title: 'Crecimiento Sostenible', tags: ['explorar'], description: 'Desarrollar estrategia de expansión de servicios con valor agregado. Optimizar planificación del suministro y gestión de precios con cooperativas para mayor eficiencia.' },
      { codes: ['E4', 'A4'], title: 'Estabilización Financiera', tags: ['explorar', 'afrontar'], description: 'Negociar con proveedores para diversificar fuentes y reducir dependencia. Mantener eficiencia operativa para seguir siendo competitivo ante nuevos competidores.' },
      { codes: ['A8', 'A11'], title: 'Gestión de Riesgos Financieros', tags: ['afrontar'], description: 'Reforzar mecanismos de transparencia y control interno. Establecer alianzas estratégicas para reducir riesgo de modificaciones regulatorias.' },
    ]
  },
  {
    name: 'PERSPECTIVA DEL CLIENTE',
    icon: '👥',
    color: 'from-green-700 to-green-500',
    objectives: [
      { codes: ['E1', 'E3'], title: 'Expansión con Propósito', tags: ['explorar'], description: 'Expandir presencia en zonas de crecimiento regional comunicando modelo de gestión responsable que destaque eficiencia y compromiso ambiental.' },
      { codes: ['E9', 'F4'], title: 'Diferenciación Competitiva', tags: ['explorar', 'mantener'], description: 'Desarrollar imagen de marca "verde" aprovechando valores de responsabilidad cooperativa para gestión de contingencias ambientales.' },
      { codes: ['A1', 'A10'], title: 'Comunicación Estratégica', tags: ['afrontar'], description: 'Mantener comunicación proactiva con autoridades y stakeholders para navegar períodos de inestabilidad política y fortalecer relaciones cooperativas.' },
      { codes: ['A12', 'F12'], title: 'Cultura Organizacional Sólida', tags: ['afrontar', 'mantener'], description: 'Mantener cultura cooperativa comunicando actividades de responsabilidad social para diferenciarse y fomentar lealtad de clientes.' },
    ]
  },
  {
    name: 'PERSPECTIVA DE PROCESOS INTERNOS',
    icon: '⚙️',
    color: 'from-blue-700 to-cyan-600',
    objectives: [
      { codes: ['E5', 'E6'], title: 'Digitalización Integral', tags: ['explorar'], description: 'Establecer marco de aseguramiento de calidad y trazabilidad. Fortalecer relación con miembros mediante ecosistemas digitales colaborativos.' },
      { codes: ['E7', 'A2'], title: 'Adaptabilidad Normativa', tags: ['explorar', 'afrontar'], description: 'Anticiparse a reformas regulatorias manteniendo flexibilidad operativa como escudo ante futuras modificaciones, garantizando continuidad.' },
      { codes: ['E11', 'A3'], title: 'Optimización Operativa', tags: ['explorar', 'afrontar'], description: 'Automatizar procesos clave fortaleciendo coordinación con cooperativas para optimizar gestión de inventarios y mitigar volatilidad de precios.' },
      { codes: ['A7', 'A9'], title: 'Excelencia Operacional', tags: ['afrontar'], description: 'Garantizar operatividad en condiciones climáticas adversas y asegurar consistencia en políticas de calidad para superar fiscalizaciones ambientales.' },
    ]
  },
  {
    name: 'PERSPECTIVA DE APRENDIZAJE Y CRECIMIENTO',
    icon: '🎓',
    color: 'from-amber-900 to-amber-500',
    objectives: [
      { codes: ['E9', 'A5'], title: 'Desarrollo de Talento', tags: ['explorar', 'afrontar'], description: 'Potenciar capacidades técnicas y digitales del capital humano. Retener personal calificado a través de programas de incentivos ante fuga de talento.' },
      { codes: ['E10', 'F10'], title: 'Colaboración Cooperativa', tags: ['explorar', 'mantener'], description: 'Fomentar co-creación de valor mediante participación activa de miembros y potenciar modelo cooperativo como factor diferenciador.' },
      { codes: ['A6', 'F6'], title: 'Capacidad Técnica Resiliente', tags: ['afrontar', 'mantener'], description: 'Reforzar capacidad técnica para condiciones climáticas adversas y reforzar relación con miembros mediante experiencias personalizadas.' },
      { codes: ['D1', 'D2'], title: 'Corrección de Vulnerabilidades', tags: ['corregir'], description: 'Desarrollar plan de expansión estratégico hacia nuevas zonas mineras y aprovechar nuevas plataformas/tecnologías para diferenciarse de competidores.' },
      { codes: ['D3', 'D4'], title: 'Innovación en Promoción', tags: ['corregir'], description: 'Diseñar estrategias promocionales innovadoras y explorar diversificación de proveedores para reducir dependencia y mitigar riesgos de volatilidad.' },
      { codes: ['D5', 'D6'], title: 'Modernización Digital', tags: ['corregir'], description: 'Acelerar digitalización integral y establecer ecosistema digital que unifique operaciones, monitoreo de flotas y gestión general.' },
    ]
  }
];

const legend = [
  {
    color: 'border-red-700',
    icon: '🔧',
    label: 'CORREGIR (Debilidades)',
    description: 'Expansión territorial limitada, promociones básicas, digitalización incompleta, dependencia de proveedores'
  },
  {
    color: 'border-yellow-600',
    icon: '🛡️',
    label: 'AFRONTAR (Amenazas)',
    description: 'Inestabilidad política, cambios normativos, volatilidad de precios, fuga de talento, riesgos climáticos'
  },
  {
    color: 'border-green-700',
    icon: '💪',
    label: 'MANTENER (Fortalezas)',
    description: 'Gestión ambiental, valores cooperativos, experiencias personalizadas, cultura organizacional'
  },
  {
    color: 'border-blue-700',
    icon: '🚀',
    label: 'EXPLORAR (Oportunidades)',
    description: 'Crecimiento regional, expansión de servicios, digitalización, ecosistemas colaborativos, marca verde'
  }
];

const StrategicMap: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCodes, setModalCodes] = useState<string[]>([]);

  const openModal = (codes: string[]) => {
    setModalCodes(codes);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-400 py-8 px-2">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-900 to-green-700 text-white text-center py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">MAPA ESTRATÉGICO INTEGRADO</h1>
          <p className="text-lg md:text-xl font-medium">MULTISERVICIOS CECOMSAP</p>
        </div>
        <div className="p-6 md:p-12 bg-gray-50">
          {perspectives.map((persp, idx) => (
            <div key={persp.name} className="mb-10">
              <div className={`rounded-t-xl text-white text-center py-4 text-xl font-bold shadow-md bg-gradient-to-r ${persp.color}`}>{persp.icon} {persp.name}</div>
              <div className="bg-white rounded-b-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {persp.objectives.map((obj, i) => (
                  <div
                    key={i}
                    className="relative border-2 border-gray-200 rounded-lg p-5 bg-gradient-to-br from-white to-gray-100 hover:shadow-xl transition-all cursor-pointer group"
                    onClick={() => openModal(obj.codes)}
                  >
                    <div className="mb-2 flex flex-wrap gap-2">
                      {obj.codes.map(code => (
                        <span key={code} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold border border-blue-300 group-hover:bg-blue-200 transition">{code}</span>
                      ))}
                    </div>
                    <div className="font-semibold text-gray-800 mb-1">{obj.title} {obj.tags.map(tag => (
                      <span key={tag} className={`ml-2 px-2 py-1 rounded-full text-xs font-bold uppercase border ${tag === 'corregir' ? 'bg-red-100 text-red-700 border-red-300' : tag === 'afrontar' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' : tag === 'mantener' ? 'bg-green-100 text-green-700 border-green-300' : 'bg-blue-100 text-blue-700 border-blue-300'}`}>{tag}</span>
                    ))}</div>
                    <div className="text-gray-600 text-sm">{obj.description}</div>
                  </div>
                ))}
              </div>
              {idx < perspectives.length - 1 && (
                <div className="flex justify-center my-4">
                  <span className="text-3xl animate-bounce text-blue-600">⬇</span>
                </div>
              )}
            </div>
          ))}
          {/* Leyenda */}
          <div className="mt-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-6 border-2 border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">🎯 Matriz CAME Integrada en el Mapa Estratégico</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {legend.map((item, i) => (
                <div key={i} className={`bg-white rounded-lg p-4 border-l-8 ${item.color}`}>
                  <div className="font-bold mb-2">{item.icon} {item.label}</div>
                  <div className="text-gray-700 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 animate-fadeIn">
            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-700 to-blue-900 rounded-t-2xl">
              <h2 className="text-lg md:text-2xl font-bold text-white">Detalle CAME: {modalCodes.join(' + ')}</h2>
              <button onClick={closeModal} className="text-white text-2xl font-bold hover:text-yellow-300">&times;</button>
            </div>
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {modalCodes.map(code => {
                const option = cameOptions[code];
                if (!option) return null;
                return (
                  <div key={code} className={`rounded-lg p-4 border-l-8 mb-2 ${option.category === 'corregir' ? 'border-red-700' : option.category === 'afrontar' ? 'border-yellow-600' : option.category === 'mantener' ? 'border-green-700' : 'border-blue-700'}`}>
                    <div className="flex items-center mb-2">
                      <span className={`font-bold text-lg mr-2`}>{code}</span>
                      <span className="text-sm font-semibold">{categoryIcons[option.category]} {categoryNames[option.category]}</span>
                    </div>
                    <div className="text-gray-700 text-sm">{option.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Fondo para cerrar modal al hacer click fuera */}
          <div className="fixed inset-0 z-40" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default StrategicMap; 