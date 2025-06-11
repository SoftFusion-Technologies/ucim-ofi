import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const menuItems = {
  Institucional: [
    { label: '¿Qué es UCIM?', path: '/que-es-ucim' },
    { label: 'Misión, Visión y Valores', path: '/mision-vision-valores' },
    { label: 'Autoridades', path: '/autoridades' },
    { label: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' }
  ],
  'Áreas / Subcomisiones': [
    { label: 'Administración y Finanzas', path: '/administracion-finanzas' },
    {
      label: 'Eventos, Cultura y Beneficios',
      path: '/eventos-cultura-beneficios'
    },
    {
      label: 'Gremial, Defensa y Relaciones Instit.',
      path: '/gremial-defensa-relaciones'
    },
    { label: 'Prensa y Difusión', path: '/prensa-difusion' },
    {
      label: 'Estudios, Estadísticas y Proyectos',
      path: '/estudios-estadisticas'
    },
    {
      label: 'Mantenimiento, Infraestructura e Innov.',
      path: '/mantenimiento-infraestructura'
    },
    {
      label: 'Responsabilidad Social Empresaria',
      path: '/responsabilidad-social'
    }
  ],
  Socios: [
    { label: 'Beneficios de ser Socio', path: '/beneficios-socio' },
    { label: '¿Cómo Asociarse?', path: '/como-asociarse' },
    { label: 'Empresas Asociadas', path: '/empresas-asociadas' }
  ],
  Servicios: [
    { label: 'Gestiones Gremial Empresaria', path: '/gestiones-gremiales' },
    { label: 'Capacitaciones y Talleres', path: '/capacitaciones' },
    { label: 'Asesoramiento Legal y Contable', path: '/asesoramiento-legal' },
    { label: 'Convenios y Descuentos', path: '/convenios-descuentos' },
    { label: 'Bolsa de Empleos', path: '/bolsa-empleos' },
    { label: 'Coworking', path: '/coworking' }
  ],
  Contacto: [
    { label: 'Formulario de Contacto', path: '/formulario-contacto' },
    { label: 'Datos de Contacto', path: '/datos-contacto' },
    { label: 'Redes Sociales', path: '/redes-sociales' }
  ]
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14 items-center">
              {/* Logo */}
              <Link
                to="/"
                className="text-ucim-dark-blue font-work-sans-italic font-semibold text-xl tracking-wide hover:text-blue-900 transition"
              >
                UCIM
              </Link>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-10 items-center font-work-sans italic text-gray-700">
                {Object.entries(menuItems).map(([title, items]) => (
                  <Menu as="div" className="relative" key={title}>
                    <Menu.Button
                      className="flex items-center text-sm font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition"
                      aria-haspopup="true"
                    >
                      {title}
                      <ChevronRightIcon className="ml-1 h-4 w-4 text-gray-500 group-hover:text-blue-700 transition" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Menu.Items className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-20">
                        {items.map(({ label, path }) => (
                          <Menu.Item key={path}>
                            {({ active }) => (
                              <Link
                                to={path}
                                className={classNames(
                                  active
                                    ? 'bg-blue-100 text-blue-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm transition-colors duration-150'
                                )}
                              >
                                {label}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden border-t border-gray-200 bg-white">
            {Object.entries(menuItems).map(([title, items]) => (
              <Disclosure
                as="div"
                key={title}
                className="border-b border-gray-100"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      aria-expanded={open}
                    >
                      <span className="font-medium">{title}</span>
                      <ChevronRightIcon
                        className={classNames(
                          open
                            ? 'transform rotate-90 text-blue-700'
                            : 'text-gray-400',
                          'h-5 w-5 transition-transform duration-150'
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-white">
                      {items.map(({ label, path }) => (
                        <Link
                          key={path}
                          to={path}
                          className="block px-6 py-2 text-gray-600 hover:text-blue-700 text-sm transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
