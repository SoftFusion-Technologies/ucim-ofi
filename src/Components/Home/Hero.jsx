import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  BuildingOffice2Icon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import bgHero from '../../Images/Hero/bgHero.svg';

const icons = [
  { Icon: BuildingOffice2Icon, label: 'Industria' },
  { Icon: ShoppingCartIcon, label: 'Comercio' },
  { Icon: Cog6ToothIcon, label: 'Producción' },
  { Icon: SparklesIcon, label: 'Servicios' }
];

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-center relative overflow-hidden"
      aria-label="Unión Comercial e Industrial de Monteros - Hero Section"
    >
      {/* Fondo Hero SVG visible con menos opacidad del fondo blanco */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgHero}
          alt="Fondo Hero"
          className="w-full h-full object-cover opacity-90 mix-blend-multiply"
        />
      </div>

      {/* Contenido principal */}
      <motion.h1
        className="titulo text-3xl md:text-5xl font-semibold uppercase mb-4 font-work-sans-italic text-blue-800 drop-shadow-lg z-10 text-outline-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Unión Comercial e Industrial de Monteros
      </motion.h1>

      <motion.p
        className="font-work-sans-italic max-w-xl text-gray-300 text-lg mb-10 drop-shadow z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Institución que nuclea al sector empresarial de Monteros.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-12 relative z-10"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {icons.map(({ Icon, label }) => (
          <motion.div
            key={label}
            className="titulo flex flex-col items-center space-y-3 cursor-pointer"
            variants={item}
            whileHover={{
              scale: 1.15,
              rotate: 4,
              textShadow: '0 0 8px rgb(59,130,246)'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className="w-20 h-20 text-blue-600 drop-shadow-md" />
            <span className="font-medium text-gray-200 text-lg">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        className="mt-16 inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-neon transition-colors duration-300 drop-shadow-lg z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        whileHover={{ boxShadow: '0 0 15px 3px #2563eb' }}
      >
        Conócenos
      </motion.a>

      <style jsx>{`
        .shadow-neon {
          box-shadow: 0 0 8px #3b82f6;
        }
        .text-outline-white {
          text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
            1px 1px 0 white;
        }
      `}</style>
    </section>
  );
}
