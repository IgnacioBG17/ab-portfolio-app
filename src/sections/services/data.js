import {SiAdobexd} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiFillAppstore} from 'react-icons/ai'

const data = [
    {
        id: 1, icon: <SiAdobexd/>, title: 'UI/UX Design', desc: "Mis diseños son modernos e intuitivos. Utilizo estándares de la industria para garantizar que tus usuarios disfruten usando tu producto."
    },
    {
        id: 2, icon: <RiReactjsLine/>, title: 'Frontend Development', desc: "Su producto tendrá buen aspecto y será accesible en todos los dispositivos, incluidos teléfonos móviles, tabletas y ordenadores de sobremesa."
    },
    {
        id: 3, icon: <FaServer/>, title: 'Backend Development', desc: "La seguridad de su negocio/producto es una prioridad desde el inicio del proyecto. Me aseguraré de que su sitio web/aplicación esté protegido contra ataques."
    },
    {
        id: 4, icon: <AiFillAppstore/>, title: 'App Development', desc: 'A diferencia de otros desarrolladores del mercado, yo crearé una aplicación que funcione tanto en dispositivos iOS como Android sin ningún coste adicional para usted.'
    }
]

const experiences = [
    {
    id: 1,
    title: 'Proyectos personales • Mejora continua',
    date: 'Julio 2025 — actualidad',
    mode: '',
    details: [
      '- Creacion de proyectos personales que me ayudan a manternerme actualizado con lo ultimo en tecnologia',
    ]
  },
  {
    id: 2,
    title: 'Ingeniero de Desarrollo • Grupo Monge',
    date: 'Mayo 2021 — Junio 2025',
    mode: 'Híbrido',
    details: [
      '• Análisis de requerimientos, diseño de solución y estimación de tareas de desarrollo.',
      '• Elaboración de presentación a Gerencias, Jefaturas y Arquitectura sobre el análisis del proyecto.',
      '• Desarrollo y documentación de pruebas funcionales y técnicas, garantizando calidad y cumplimiento de criterios de aceptación.',
      '• Analizar e informar sobre actividades y resultados de pruebas. Identificar e informar sobre problemas y riesgos.',
      '• Integración y certificación de ambientes (DEV y UAT) y soporte en fase de pruebas (UAT y QA).',
      '• Elaboración de documento de estrategia y minute by minute (paso a paso) de salida a producción, coordinando integración y certificación en ambientes productivos para asegurar despliegues controlados.',
      '• Período de soporte en ambiente productivo (Intensive care) y elaboración de documentación técnica (plan de monitoreo) para su posterior entrega a soporte a la producción.',
      '• Acompañamiento a pasantes y nuevos desarrolladores outsourcing brindando apoyo técnico y metodológico en todas las etapas del ciclo de vida de un proyecto.'
    ]
  },
  {
    id: 3,
    title: 'Pasante de Desarrollo • Grupo Monge',
    date: 'Octubre 2020 — Abril 2021',
    mode: 'Remoto',
    details: [
      'Desarrollé un módulo de anulación de anticipos de clientes como parte de un sistema empresarial. Participando en todo el ciclo: análisis, estimación de tareas, desarrollo, pruebas e integración.',
    ]
  }
]

export default experiences