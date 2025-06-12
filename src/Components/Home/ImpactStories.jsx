import React, { useState } from 'react';

const milestones = [
  {
    year: '1983',
    event: 'Fundación de UCIM',
    detail:
      'Nace UCIM para acompañar a las pequeñas y medianas empresas de Monteros.'
  },
  {
    year: '1995',
    event: 'Primer convenio regional',
    detail:
      'Acuerdo con autoridades locales para promover el desarrollo económico.'
  },
  {
    year: '2005',
    event: 'Expansión empresarial',
    detail: 'Se incorporan 25 nuevas empresas al asociarse con UCIM.'
  },
  {
    year: '2015',
    event: 'Red de 50 empresas',
    detail: 'La red alcanza 50 empresas asociadas y empieza la digitalización.'
  },
  {
    year: '2023',
    event: 'Impulso a la innovación',
    detail:
      'Lanzamiento de programas de innovación y sostenibilidad empresarial.'
  }
];

const testimonials = [
  {
    name: 'Ana Pérez',
    company: 'Textiles Monteros',
    quote: 'UCIM me ayudó a expandir mi negocio y conectar con socios clave.'
  },
  {
    name: 'Carlos López',
    company: 'López Construcciones',
    quote:
      'Gracias a los talleres y capacitaciones, mejoramos nuestra productividad.'
  },
  {
    name: 'María Gómez',
    company: 'Servicios Monteros',
    quote: 'Los convenios con proveedores nos dieron ventajas competitivas.'
  },
  {
    name: 'Lucía Fernández',
    company: 'Innovatech',
    quote: 'La digitalización nos permitió ser más competitivos en el mercado.'
  },
  {
    name: 'Jorge Martínez',
    company: 'EcoEmpresas',
    quote:
      'Los programas de innovación han transformado nuestro modelo de negocio.'
  }
];

const countersData = [
  { label: 'Empresas Asociadas', value: 50 },
  { label: 'Años de Historia', value: 40 },
  { label: 'Empleos Generados', value: 1200 },
  { label: 'Convenios Firmados', value: 30 }
];

const Counter = ({ value, label }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = Math.ceil(value / (duration / 30));

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counterInterval);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(counterInterval);
  }, [value]);

  return (
    <div className="text-center px-4 min-w-[110px]">
      <div className="text-5xl font-extrabold">
        {count}
        {label !== 'Años de Historia' ? '+' : ''}
      </div>
      <div className="uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
};

const ImpactStories = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-10 text-center drop-shadow-lg">
          Historias de Impacto
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Timeline horizontal */}
          <div className="md:w-3/5">
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-blue-500">
              {milestones.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setActive(idx)}
                  className={`cursor-pointer p-4 rounded-lg min-w-[140px] transition-transform duration-300 focus:outline-none
                    ${
                      active === idx
                        ? 'bg-blue-600 shadow-lg scale-110'
                        : 'bg-blue-800/70 hover:bg-blue-700'
                    }`}
                  aria-current={active === idx ? 'true' : 'false'}
                >
                  <div className="text-xl font-semibold">{m.year}</div>
                  <div className="text-sm mt-1">{m.event}</div>
                </button>
              ))}
            </div>
            {/* Detalle debajo */}
            <div className="mt-6 bg-blue-800/60 p-6 rounded-lg shadow-inner max-w-xl mx-auto md:mx-0">
              <h3 className="text-2xl font-bold mb-2">
                {milestones[active].event}
              </h3>
              <p className="text-base leading-relaxed">
                {milestones[active].detail}
              </p>
            </div>
          </div>

          {/* Testimonial a la derecha */}
          <div className="md:w-2/5 bg-blue-800/70 p-8 rounded-lg shadow-inner flex flex-col justify-center">
            <p className="italic text-lg mb-6 leading-relaxed">
              &ldquo;{testimonials[active]?.quote}&rdquo;
            </p>
            <p className="font-semibold text-xl">
              {testimonials[active]?.name}
            </p>
            <p className="text-sm opacity-80">
              {testimonials[active]?.company}
            </p>
          </div>
        </div>

        {/* Contadores */}
        <div className="flex flex-wrap justify-around mt-14 gap-8">
          {countersData.map(({ label, value }) => (
            <Counter key={label} label={label} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
