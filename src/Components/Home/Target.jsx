import React from "react";

import {
  FaRegNewspaper,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaHandshake,
  FaBriefcase,
  FaBullhorn,
  FaInfoCircle,
  FaImages,
  FaBuilding,
  FaUserPlus,
} from "react-icons/fa";

const iconMap = [
  <FaRegNewspaper className="text-5xl text-white" />,
  <FaChalkboardTeacher className="text-5xl text-white" />,
  <FaCalendarAlt className="text-5xl text-white" />,
  <FaHandshake className="text-5xl text-white" />,
  <FaBriefcase className="text-5xl text-white" />,
  <FaBullhorn className="text-5xl text-white" />,
  <FaInfoCircle className="text-5xl text-white" />,
  <FaImages className="text-5xl text-white" />,
  <FaBuilding className="text-5xl text-white" />,
  <FaUserPlus className="text-5xl text-white" />,
];

const Target = () => {
const targetIcons = [
  {
    item: "Noticias y novedades",
    background_image:
      "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Noticias, prensa, gobierno
    hover_label: "Ver Noticias",
  },
  {
    item: "Talleres y Capacitaciones",
    background_image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Talleres, capacitación
    hover_label: "Ver Talleres",
  },
  {
    item: "Eventos",
    background_image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80", // Evento público, auditorio
    hover_label: "Ver Eventos",
  },
  {
    item: "Convenios y Beneficios",
    background_image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80", // Apretón de manos, acuerdo
    hover_label: "Ver Convenios",
  },
  {
    item: "Bolsa de Trabajo",
    background_image:
      "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?auto=format&fit=crop&w=800&q=80", // Entrevista, búsqueda laboral
    hover_label: "Ver Ofertas",
  },
  {
    item: "Comunicados de Prensa",
    background_image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", // Conferencia de prensa
    hover_label: "Ver Comunicados",
  },
  {
    item: "Información Util",
    background_image:
      "https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Documentos, info útil
    hover_label: "Ver Información",
  },
  {
    item: "Galería de Fotos",
    background_image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Galería, fotos institucionales
    hover_label: "Ver Galería",
  },
  {
    item: "Empresas Asociadas",
    background_image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", // Empresas, networking
    hover_label: "Ver Empresas",
  },
  {
    item: "Asociarse",
    background_image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", // Formulario, registro institucional
    
    hover_label: "Asociarse",
  },
];
  return (
    <div className="w-full px-5 lg:px-10 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {targetIcons.map((target, idx) => (
          <div
            key={idx}
            className="relative rounded-xl shadow-lg overflow-hidden flex flex-col justify-between h-[300px] xl:h-[500px] group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            data-aos="fade-up"
          >
            <div
              className="absolute inset-0 w-full h-full bg-center bg-cover z-0 transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${target.background_image})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-blue-800/30 to-blue-900/50 z-0 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-blue-800/50 to-blue-900/70 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <div className="absolute top-3 left-3 text-white text-xl font-bold opacity-80 z-10">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 flex items-center justify-center z-10">
              {React.cloneElement(iconMap[idx], {
                className:
                  "text-5xl text-white transition-all duration-300 group-hover:scale-125 group-hover:brightness-125",
              })}
            </div>
            <div className="p-6 flex items-end justify-start z-10">
              <span className="text-white text-xl font-bold leading-tight drop-shadow transition-all duration-300 opacity-100 group-hover:opacity-0 absolute">
                {target.item}
              </span>
              <span className="text-white text-xl font-bold leading-tight drop-shadow transition-all duration-300 opacity-0 group-hover:opacity-100 relative">
                {target.hover_label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Target;
