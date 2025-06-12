import { motion } from 'framer-motion';
import { FaHandshake, FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';

const timeline = [
  {
    year: '1983',
    icon: <FaIndustry />,
    text: 'UCIM nace para acompañar a las pequeñas y medianas empresas de Monteros.'
  },
  {
    year: '2005',
    icon: <FaHandshake />,
    text: 'Se fortalece el vínculo entre sectores productivos, comerciales y educativos.'
  },
  {
    year: 'Hoy',
    icon: <FaMapMarkerAlt />,
    text: 'Somos el motor del crecimiento industrial y empresarial de la región.'
  }
];

export default function QuienesSomosUCIM() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 px-6 sm:px-12">
      {/* Background texture or pattern */}
      <div className="absolute inset-0 bg-[url('/bg-textura.png')] opacity-10 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="titulo text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight"
        >
          ¿Quiénes somos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
        >
          UCIM es la institución que une a las fuerzas productivas,
          emprendedoras y comerciales de Monteros. No solo representamos,
          impulsamos.
        </motion.p>

        {/* Línea de tiempo */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-xl p-6 max-w-xs w-full border-l-4 border-blue-600 relative"
            >
              <div className="absolute -left-6 top-6 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">
                {item.year}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="/nosotros"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
          >
            Conocé nuestra historia
          </a>
        </motion.div>
      </div>
    </section>
  );
}
