// Importar todas las imágenes
import testimonial1 from '../images/comentarios/1.jpg';
import testimonial2 from '../images/comentarios/2.jpg';
import testimonial3 from '../images/comentarios/3.jpg';
import testimonial4 from '../images/comentarios/4.jpg';
import testimonial5 from '../images/comentarios/5.jpg';
import testimonial6 from '../images/comentarios/6.jpg';
import testimonial7 from '../images/comentarios/7.jpg';
import testimonial8 from '../images/comentarios/8.jpg';
import testimonial9 from '../images/comentarios/9.jpg';
import testimonial10 from '../images/comentarios/10.jpg';
import testimonial11 from '../images/comentarios/11.jpg';
import testimonial12 from '../images/comentarios/12.jpg';
import testimonial13 from '../images/comentarios/13.jpg';
import testimonial14 from '../images/comentarios/14.jpg';
import testimonial15 from '../images/comentarios/15.jpg';
import type { ImageMetadata } from 'astro';

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  event: string;
  image: ImageMetadata;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Mundo Recreativo hizo que la fiesta de mi hijo fuera inolvidable. Los niños se divirtieron muchísimo con los juegos inflables y los personajes animados.",
    author: "Laura Martínez",
    event: "Fiesta de Cumpleaños",
    image: testimonial1
  },
  {
    id: 2,
    text: "Excelente servicio y organización. El cañón de espuma fue el éxito de nuestra fiesta corporativa. ¡Mundo Recreativo superó nuestras expectativas!",
    author: "Juan Pérez",
    event: "Evento Corporativo",
    image: testimonial2
  },
  {
    id: 3,
    text: "La mejor experiencia para el baby shower de mi bebé. Todo fue perfecto y los invitados quedaron encantados.",
    author: "María González",
    event: "Baby Shower",
    image: testimonial3
  },
  {
    id: 4,
    text: "Increíble atención y profesionalismo. Los juegos inflables fueron un éxito total en la fiesta de mi hija.",
    author: "Carlos Rodríguez",
    event: "Fiesta Infantil",
    image: testimonial4
  },
  {
    id: 5,
    text: "La mejor organización para eventos infantiles. Los personajes animados hicieron que la fiesta fuera mágica.",
    author: "Ana Sánchez",
    event: "Fiesta Temática",
    image: testimonial5
  },
  {
    id: 6,
    text: "El cañón de espuma fue la sensación de nuestra fiesta de verano. ¡Todos los niños lo amaron!",
    author: "Roberto López",
    event: "Fiesta de Verano",
    image: testimonial6
  },
  {
    id: 7,
    text: "Excelente servicio para nuestro evento corporativo. La máquina de snacks fue un éxito total.",
    author: "Patricia Gómez",
    event: "Evento Empresarial",
    image: testimonial7
  },
  {
    id: 8,
    text: "Los juegos de feria fueron el toque perfecto para nuestra fiesta. ¡Premios para todos!",
    author: "Miguel Torres",
    event: "Fiesta de Comunidad",
    image: testimonial8
  },
  {
    id: 9,
    text: "El karaoke fue la sensación de la noche. Todos nuestros invitados quedaron encantados con la calidad del sonido y la amplia selección de canciones.",
    author: "Carolina Ruiz",
    event: "Fiesta de Cumpleaños 30",
    image: testimonial9
  },
  {
    id: 10,
    text: "El servicio de fotografía instantánea con el fotomatón hizo que nuestro evento fuera inolvidable. Los props y el libro de recuerdos fueron geniales.",
    author: "Roberto Mendoza",
    event: "Boda Familiar",
    image: testimonial10
  },
  {
    id: 11,
    text: "Contratamos un taller de arte para adultos mayores y fue maravilloso ver cómo todos participaban con entusiasmo. Gran idea para fomentar la creatividad.",
    author: "Marta Jiménez",
    event: "Taller de Arte para Mayores",
    image: testimonial11
  },
  {
    id: 12,
    text: "La trivia interactiva fue un éxito en nuestro evento corporativo. Logró que todos se involucraran y se divirtieran mientras aprendían.",
    author: "Esteban Vargas",
    event: "Trivia Corporativa",
    image: testimonial12
  },
  {
    id: 13,
    text: "El club de lectura organizado por Mundo Recreativo fue el espacio perfecto para compartir y descubrir nuevas historias en comunidad.",
    author: "Lucía Fernández",
    event: "Club de Lectura",
    image: testimonial13
  },
  {
    id: 14,
    text: "La fiesta temática retro superó nuestras expectativas. Todos los detalles estuvieron cuidados y la ambientación fue espectacular.",
    author: "Javier Salinas",
    event: "Fiesta Temática Retro",
    image: testimonial14
  },
  {
    id: 15,
    text: "El paseo en la naturaleza y picnic organizado para nuestro grupo fue relajante y divertido. La atención del equipo fue excelente.",
    author: "Sofía Ramírez",
    event: "Picnic y Paseo al Aire Libre",
    image: testimonial15
  }
];
