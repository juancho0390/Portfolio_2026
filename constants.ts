
import { Project, Skill, Testimonial, TimelineItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Servicios UNAD",
    description: "Plataforma informativa optimizada para la gestión de servicios universitarios, priorizando la accesibilidad y la arquitectura de información clara.",
    image: "./assets/Servicios_UNAD.png",
    link: "https://juancho0390.github.io/ServiciosUNAD/#/temario"
  },
  {
    id: 2,
    title: "Deer Barber Shop",
    description: "Despliegue de identidad digital para barbería premium, con un enfoque en UI estilizada y conversión directa de usuarios mediante diseño visual.",
    image: "./assets/Deer_Barber_Shop.png",
    link: "https://juancho0390.github.io/N_Deer_Barber_Shop/"
  },
  {
    id: 3,
    title: "Patitas Felices",
    description: "Interface intuitiva para servicios veterinarios, diseñada para generar confianza y facilitar la navegación crítica en entornos móviles.",
    image: "./assets/Patitas_Felices_VET.png",
    link: "https://juancho0390.github.io/N_Patitas_Felices_Clinica_VET/"
  },
  {
    id: 4,
    title: "AURA Dental Clinic",
    description: "Sitio web dinámico de alta fidelidad para clínica odontológica, integrando micro-interacciones que mejoran la retención del usuario.",
    image: "./assets/Aura_Dental_Clinic.png",
    link: "https://juancho0390.github.io/AURA_Dental_clinic/"
  },
  {
    id: 5,
    title: "Vitalis Veterinary",
    description: "Ecosistema digital minimalista enfocado en la simplicidad operativa y la elegancia visual para servicios de salud animal de lujo.",
    image: "./assets/Vitalis_VET.png",
    link: "https://juancho0390.github.io/Vitalis_VET/"
  },
  {
    id: 6,
    title: "Café El Aroma",
    description: "Experiencia e-commerce artesanal para finca cafetera, resaltando el valor del producto mediante un storytelling visual inmersivo.",
    image: "./assets/Cafe_Aroma.png",
    link: "https://juancho0390.github.io/Cafe_El_Aroma/index.html"
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", iconUrl: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Azure", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana Pérez",
    role: "Fundadora de Café 'El Aroma'",
    content: "Trabajar con Juan fue un proceso excepcional. Entendió perfectamente la visión de la web de mi cafetería y la transformó en un diseño intuitivo y elegante que a nuestros clientes les ha encantado.",
    avatar: "https://placehold.co/100x100/34D399/111827?text=AP"
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    role: "CEO de TecnoSoluciones",
    content: "El profesionalismo y la habilidad técnica de Juan son de primer nivel. Entregó nuestro sitio web corporativo a tiempo y superó nuestras expectativas. ¡Un desarrollador altamente recomendado!",
    avatar: "https://placehold.co/100x100/34D399/111827?text=CR"
  },
  {
    id: 3,
    name: "Laura Gómez",
    role: "Diseñadora en Moda Creativa",
    content: "La colaboración fue fluida y muy creativa. Juan capturó la esencia de nuestra marca de moda y la tradujo en un sitio web visualmente impactante y fácil de navegar. ¡El resultado es simplemente hermoso!",
    avatar: "https://placehold.co/100x100/34D399/111827?text=LG"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2012 - 2014",
    title: "Técnico en Sistemas",
    description: "Dominio de la arquitectura de hardware y protocolos de red, estableciendo las bases lógicas de mi ingeniería."
  },
  {
    year: "2015 - 2020",
    title: "Ingeniería de Sistemas",
    description: "Especialización académica en el diseño de algoritmos, estructuras de datos avanzadas y gestión estratégica de proyectos de software."
  },
  {
    year: "2021 - 2023",
    title: "Especialización Frontend",
    description: "Profundización en el ecosistema React.js, optimización de performance crítica y creación de interfaces interactivas de grado industrial."
  },
  {
    year: "2024 - Presente",
    title: "Innovación & Liderazgo",
    description: "Liderando el desarrollo de soluciones digitales vanguardistas con enfoque en UX emocional, arquitectura escalable y eficiencia bruta.",
    isCurrent: true
  }
];
