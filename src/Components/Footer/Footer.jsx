import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const redes = [
  { icon: <FaFacebookF />, label: "Facebook", url: "#" },
  { icon: <FaInstagram />, label: "Instagram", url: "#" },
];

const enlaces = [
  { label: "Inicio", url: "#" },
  { label: "¿Qué es UCIM?", url: "#" },
  { label: "Misión, Visión y Valores", url: "#" },
  { label: "Autoridades", url: "#" },
  { label: "Preguntas Frecuentes", url: "#" },
];

const contactos = [
  { icon: <FaWhatsapp />, label: "¡Chatea con nosotros!", url: "#" },
  {
    icon: <FaMapMarkerAlt />,
    label: "25 de mayo 264, Monteros 4142",
    url: "#",
  },
  {
    icon: <FaEnvelope />,
    label: "info@ucim.gob.ar",
    url: "mailto:info@ucim.gob.ar",
  },
];

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <footer
      className="bg-gradient-to-br from-[#232b36] to-[#0e1013] text-white pt-12 pb-4 px-4 md:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1 */}
        <div data-aos={isMobile ? "fade-up" : "fade-right"}>
          <h2 className="text-3xl font-bold text-blue-400 mb-2">UCIM</h2>
          <p className="mb-4 text-gray-300">
            Institución que nuclea al sector empresarial de Monteros.
          </p>
          <div>
            <span className="font-semibold text-white border-b-2 border-blue-400 pb-1">
              Visita nuestras redes
            </span>
            <div className="flex gap-3 mt-3">
              {redes.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#232b36] hover:bg-blue-500 transition-colors p-2 rounded-lg text-xl"
                  aria-label={r.label}
                >
                  {r.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Columna 2 */}
        <div data-aos="fade-up">
          <h3 className="font-bold text-lg mb-2 border-b-2 border-blue-400 inline-block">
            Enlaces Rápidos
          </h3>
          <ul className="mt-3 space-y-2 text-gray-200">
            {enlaces.map((e, i) => (
              <li key={i}>
                <a
                  href={e.url}
                  className="hover:text-blue-400 transition-colors"
                >
                  • {e.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Columna 3 */}
        <div data-aos={isMobile ? "fade-up" : "fade-left"}>
          <h3 className="font-bold text-lg mb-2 border-b-2 border-blue-400 inline-block">
            Contáctanos
          </h3>
          <ul className="mt-3 space-y-3">
            {contactos.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="bg-blue-500 text-white p-2 rounded-lg text-xl">
                  {c.icon}
                </span>
                <a href={c.url} className="hover:underline text-gray-200">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <span>© 2025 UCIM. Todos los derechos reservados.</span>
        <a
          href="https://softfusion.com.ar/"
          className="text-blue-400 hover:underline mt-2 md:mt-0"
        >
          Desarrollado por SoftFusion
        </a>
      </div>
    </footer>
  );
};

export default Footer;
