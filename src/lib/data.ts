export interface Persona {
  nombre: string;
  cargo: string;
  bio: string;
  iniciales: string;
}

export interface Testimonio {
  cita: string;
  nombre: string;
  programa: string;
  ano: number;
  iniciales: string;
}

export interface Hito {
  ano: number;
  evento: string;
}

export interface Noticia {
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
}

export interface Beca {
  nombre: string;
  cobertura: string;
  requisitos: string;
}

export interface FechaAdmision {
  evento: string;
  fecha: string;
}

export const ACREDITACIONES = [
  { nombre: "SUNEDU", ano: 2015 },
  { nombre: "SINEACE", ano: 2018 },
  { nombre: "CONEAU", ano: 2019 },
  { nombre: "RIACES", ano: 2020 },
  { nombre: "CLADEA", ano: 2021 },
];

export const DIRECTIVOS: Persona[] = [
  {
    nombre: "Dra. María Elena Rodríguez",
    cargo: "Decana",
    bio: "Doctora en Educación por la Universidad de Barcelona. Más de 25 años de experiencia en gestión académica y dirección de programas de posgrado.",
    iniciales: "MR",
  },
  {
    nombre: "Dr. Carlos Alberto Mendoza",
    cargo: "Vicedecano de Investigación",
    bio: "PhD en Ingeniería por la Universidad de Stanford. Investigador principal en políticas de ciencia y tecnología.",
    iniciales: "CM",
  },
  {
    nombre: "Dra. Patricia Llanos Vargas",
    cargo: "Directora Académica",
    bio: "Doctora en Ciencias Sociales por la Universidad de Buenos Aires. Especialista en diseño curricular y evaluación educativa.",
    iniciales: "PL",
  },
  {
    nombre: "Mg. Fernando Ruiz Cornejo",
    cargo: "Secretario Académico",
    bio: "Magíster en Administración de Empresas. Experto en gestión universitaria y aseguramiento de calidad.",
    iniciales: "FR",
  },
];

export const TESTIMONIOS: Testimonio[] = [
  {
    cita: "La maestría me dio las herramientas para liderar proyectos de innovación en mi organización. El nivel de los docentes es excepcional.",
    nombre: "Andrea Velásquez",
    programa: "Maestría en Gestión de la Innovación",
    ano: 2023,
    iniciales: "AV",
  },
  {
    cita: "El doctorado superó mis expectativas. La mentoría personalizada y el acceso a redes de investigación internacional marcaron la diferencia.",
    nombre: "Jorge Huamán",
    programa: "Doctorado en Ciencias de la Computación",
    ano: 2022,
    iniciales: "JH",
  },
  {
    cita: "Estudiar mientras trabajaba parecía imposible, pero la modalidad semipresencial y el acompañamiento de los tutores lo hicieron realidad.",
    nombre: "Carmen Tafur",
    programa: "Maestría en Educación Superior",
    ano: 2024,
    iniciales: "CT",
  },
  {
    cita: "Mi tesis doctoral fue publicada en una revista indexada Q1 gracias al apoyo de mi asesor y al rigor del programa.",
    nombre: "Luis Paredes",
    programa: "Doctorado en Ingeniería Ambiental",
    ano: 2023,
    iniciales: "LP",
  },
];

export const HITOS: Hito[] = [
  { ano: 1974, evento: "Fundación de la Escuela de Posgrado como unidad académica independiente." },
  { ano: 1980, evento: "Creación de la primera maestría en Ciencias de la Educación." },
  { ano: 1988, evento: "Lanzamiento del programa de Doctorado en Ciencias Sociales." },
  { ano: 1995, evento: "Inauguración del campus de posgrado con laboratorios y biblioteca especializada." },
  { ano: 2003, evento: "Primera acreditación internacional por parte del Consejo de Evaluación." },
  { ano: 2010, evento: "Inicio de los programas en modalidad semipresencial." },
  { ano: 2018, evento: "Lanzamiento de la plataforma virtual propia para programas a distancia." },
  { ano: 2023, evento: "Más de 5000 graduados y alianzas con 20 universidades internacionales." },
];

export const NOTICIAS: Noticia[] = [
  {
    titulo: "Escuela de Posgrado firma convenio con Université Paris-Saclay",
    fecha: "15 de junio, 2025",
    categoria: "Internacionalización",
    resumen: "El acuerdo permitirá el intercambio de estudiantes de doctorado y la co-dirección de tesis entre ambas instituciones.",
  },
  {
    titulo: "Investigadora de la escuela recibe premio nacional de ciencia",
    fecha: "3 de mayo, 2025",
    categoria: "Investigación",
    resumen: "La Dra. Patricia Llanos fue reconocida por su contribución al estudio de políticas educativas en América Latina.",
  },
  {
    titulo: "Abierta la convocatoria 2025 para becas de excelencia académica",
    fecha: "20 de abril, 2025",
    categoria: "Admisión",
    resumen: "Hasta el 30 de julio, los postulantes pueden aplicar a becas que cubren hasta el 100% de la matrícula.",
  },
];

export const BECAS: Beca[] = [
  {
    nombre: "Beca de Excelencia Académica",
    cobertura: "Hasta 100% de la matrícula.",
    requisitos: "Promedio de pregrado igual o superior a 16. Carta de recomendación de docente universitario.",
  },
  {
    nombre: "Beca por Convenio Institucional",
    cobertura: "Hasta 50% de la matrícula.",
    requisitos: "Ser trabajador o egresado de una institución con convenio vigente con la Escuela de Posgrado.",
  },
  {
    nombre: "Beca de Estímulo a la Investigación",
    cobertura: "Hasta 75% de la matrícula.",
    requisitos: "Presentar un plan de tesis viable y contar con un asesor asignado del claustro docente.",
  },
];

export const FECHAS_ADMISION: FechaAdmision[] = [
  { evento: "Inicio de convocatoria", fecha: "1 de marzo, 2025" },
  { evento: "Cierre de inscripciones", fecha: "30 de julio, 2025" },
  { evento: "Entrevistas y evaluación", fecha: "Agosto — Septiembre 2025" },
  { evento: "Publicación de resultados", fecha: "Octubre 2025" },
  { evento: "Matrícula", fecha: "Noviembre — Diciembre 2025" },
  { evento: "Inicio de clases", fecha: "Marzo 2026" },
];

export const ALIADOS = [
  "Universidad de Barcelona",
  "Stanford University",
  "Université Paris-Saclay",
  "Universidad de Buenos Aires",
  "Tecnológico de Monterrey",
];

export const VALORES = [
  { titulo: "Excelencia", descripcion: "Buscamos el más alto nivel en cada programa, docente y estudiante.", icono: "star" },
  { titulo: "Innovación", descripcion: "Impulsamos metodologías activas y tecnología aplicada a la educación.", icono: "lightbulb" },
  { titulo: "Compromiso social", descripcion: "Formamos investigadores y profesionales que transformen la sociedad.", icono: "heart" },
  { titulo: "Integridad", descripcion: "Actuamos con ética, transparencia y responsabilidad académica.", icono: "shield" },
  { titulo: "Colaboración", descripcion: "Fomentamos el trabajo en red entre disciplinas, instituciones y países.", icono: "users" },
  { titulo: "Diversidad", descripcion: "Valoramos perspectivas múltiples como fuente de creatividad y rigor.", icono: "globe" },
];

import type { TipoPrograma } from "./types";

export const TIPOS_FALLBACK: TipoPrograma[] = [
  { id: 1, nombreTipoPrograma: "Maestría", slug: "maestria" },
  { id: 2, nombreTipoPrograma: "Doctorado", slug: "doctorado" },
];

export interface RectorData {
  nombre: string;
  cargo: string;
  iniciales: string;
  mensaje: string;
  ano: number;
}

export const RECTOR: RectorData = {
  nombre: "Dr. Andrés Velásquez Morales",
  cargo: "Rector",
  iniciales: "AV",
  mensaje:
    "Nuestra Escuela de Posgrado representa el compromiso con la excelencia académica y la formación de profesionales capaces de transformar la sociedad. Cada programa está diseñado para cultivar el pensamiento crítico, la investigación rigurosa y la innovación que el país necesita. Los invitamos a ser parte de esta comunidad académica donde la tradición se encuentra con el futuro.",
  ano: 2025,
};
