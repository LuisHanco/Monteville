import type { ImageMetadata } from 'astro';
import entrada from '../assets/photos/0-entrada.webp';
import lateralEntrada from '../assets/photos/1-lateral-entrada.webp';
import mesaEspecial from '../assets/photos/2-mesa-especial.webp';
import mesas from '../assets/photos/3-mesas.webp';
import barra from '../assets/photos/4-barra.webp';
import barraLateral from '../assets/photos/5-barra-lateral.webp';
import vinos from '../assets/photos/6-vinos.webp';
import poster1 from '../assets/paseo/paseo-1.webp';
import poster2 from '../assets/paseo/paseo-2.webp';
import poster3 from '../assets/paseo/paseo-3.webp';
import poster4 from '../assets/paseo/paseo-4.webp';
import poster5 from '../assets/paseo/paseo-5.webp';
import poster6 from '../assets/paseo/paseo-6.webp';

// 1. Importa tus nuevas imágenes aquí

import mentaHelado from '../assets/photos/helados/01_Menta.webp';
import chocolateHelado from '../assets/photos/helados/02_Chocolate.webp';
import lucumaHelado from '../assets/photos/helados/03_Lucucma.webp';
import maracuyaHelado from '../assets/photos/helados/04_Maracuya.webp';
import vainillaHelado from '../assets/photos/helados/05_Vainilla.webp';
import ronConPasasHelado from '../assets/photos/helados/06_Ron con pasas.webp';
import carameloHelado from '../assets/photos/helados/07_Caramelo.webp';
import bananaConChicleHelado from '../assets/photos/helados/08_Banana con chicle.webp';
import duraznoHelado from '../assets/photos/helados/09_Durazno.webp';
import naranjaHelado from '../assets/photos/helados/10_Naranja.webp';
import capuchinoHelado from '../assets/photos/helados/11_Capuchino.webp';
import payDeLimonHelado from '../assets/photos/helados/12_Pay de limón.webp';
import cocoHelado from '../assets/photos/helados/13_Coco.webp';
import frutosDelBosqueHelado from '../assets/photos/helados/14_Frutos de Bosque.webp';



export const photos = {
  entrada,
  lateralEntrada,
  mesaEspecial,
  mesas,
  barra,
  barraLateral,
  vinos,
  menta: mentaHelado,
  chocolate: chocolateHelado,
  lucuma: lucumaHelado,
  maracuya: maracuyaHelado,
  vainilla: vainillaHelado,
  ronConPasas: ronConPasasHelado,
  caramelo: carameloHelado,
  bananaConChicle: bananaConChicleHelado,
  durazno: duraznoHelado,
  naranja: naranjaHelado,
  capuchino: capuchinoHelado,
  payDeLimon: payDeLimonHelado,
  coco: cocoHelado,
  frutosDelBosque: frutosDelBosqueHelado,
};

export const seo = {
  title: 'Monteville · Helados gourmet para hoteles, restaurantes y cafeterías en Cusco',
  description:
    'Alta heladería artesanal en Cusco exclusiva para cafeterías, hoteles y restaurantes de alto prestigio. Ingredientes de origen, formatos HoReCa y despacho con cadena de frío.',
};

export type Parada = {
  id: string;
  lugar: string;
  clip: string;
  focus: number;
  poster: ImageMetadata;
  alt: string;
};

export const paseo: { paradas: Parada[] } = {
  paradas: [
    {
      id: 'inicio',
      lugar: 'El origen',
      clip: '/video/paseo-1.mp4',
      focus: 50,
      poster: poster1,
      alt: 'Monteville: alta heladería gourmet elaborada en Cusco para la hospitalidad de prestigio',
    },
    {
      id: 'nikkei',
      lugar: 'La materia prima',
      clip: '/video/paseo-2.mp4',
      focus: 50,
      poster: poster2,
      alt: 'Selección de cacao fino de Quillabamba, frutas de estación e ingredientes naturales de origen',
    },
    {
      id: 'precio',
      lugar: 'La textura',
      clip: '/video/paseo-3.mp4',
      focus: 50,
      poster: poster3,
      alt: 'Cremosidad equilibrada y estabilidad térmica diseñada para el servicio en mesa y vitrina',
    },
    {
      id: 'producto',
      lugar: 'Los sabores',
      clip: '/video/paseo-4.mp4',
      focus: 50,
      poster: poster4,
      alt: 'Presentación de helados gourmet Monteville para cartas de postres y alta gastronomía',
    },
    {
      id: 'shari',
      lugar: 'El servicio HoReCa',
      clip: '/video/paseo-5.mp4',
      focus: 50,
      poster: poster5,
      alt: 'Formatos profesionales de 2.5 L y 5 L para cocina, hoteles y cafeterías de especialidad',
    },
    {
      id: 'como-reservar',
      lugar: 'La degustación',
      clip: '/video/paseo-6.mp4',
      focus: 50,
      poster: poster6,
      alt: 'Cata privada para chefs ejecutivos, baristas y gerentes de alimentos y bebidas',
    },
  ],
};

export const links = {
  reservar:
    'https://wa.me/51986698900?text=Hola%20Monteville%2C%20deseo%20solicitar%20una%20degustaci%C3%B3n%20para%20mi%20establecimiento.',
  regalar:
    'https://wa.me/51986698900?text=Hola%20Monteville%2C%20quisiera%20recibir%20el%20cat%C3%A1logo%20y%20tarifario%20HoReCa.',
  carta: 'https://monteville.org.pe/carta',
  maps: 'https://maps.google.com/?q=Cusco,Peru',
  instagram: 'https://www.instagram.com/monteville.cusco/',
  telefono: 'tel:+51986698900',
  email: 'mailto:monteville.org.pe@gmail.com',
};

export const contacto = {
  calle: 'Cusco, Perú',
  ciudad: '08000 Cusco',
  codigoPostal: '08000',
  localidad: 'Cusco',
  barrio: 'Centro Histórico y Valle Sagrado',
  lat: -13.53195,
  lon: -71.96746,
  telefono: '+51 986 698 900',
  email: 'monteville.org.pe@gmail.com',
  instagram: '@monteville.cusco',
  horario: 'Lunes a sábado, de 08:00 a 19:00',
  cocina: 'Despachos programados con cadena de frío (-18 °C)',
};

export const legal = [
  { label: 'Aviso legal', href: 'https://monteville.org.pe/legal/' },
  { label: 'Privacidad', href: 'https://monteville.org.pe/privacidad/' },
  { label: 'Cookies', href: 'https://monteville.org.pe/cookies/' },
  { label: 'Condiciones B2B', href: 'https://monteville.org.pe/terminos/' },
];

export const nav = [
  { label: 'Propuesta', href: '#nikkei' },
  { label: 'Sabores', href: '#carta' },
  { label: 'Formatos', href: '#experiencias' },
  { label: 'Preguntas', href: '#preguntas' },
];

export const experiencias = [
  {
    nombre: 'Línea Cafetería & Boutique',
    descripcion: 'Formatos ideales para vitrina, affogatos y carta de postres de rotación ágil.',
    precio: 'Desde S/ 120',
    porPersona: 'Cubeta de 2.5 L · Exclusivo B2B',
  },
  {
    nombre: 'Línea Hotel & Alta Cocina',
    descripcion: 'Suministro continuo para restaurantes, banquetes y room service de alto prestigio.',
    precio: 'Desde S/ 220',
    porPersona: 'Cubeta de 5 L · Reposición programada',
    etiqueta: 'Más popular',
  },
];

export const maridaje = {
  nombre: 'Sabores Exclusivos de Autor',
  descripcion: 'Desarrollamos recetas personalizadas junto a tu chef ejecutivo para tu carta.',
  precio: 'Desde S/ 250',
};

export const platos = [
  { nombre: 'Chocolate de Origen 70% Quillabamba', detalle: 'Cacao fino de aroma y textura sedosa' },
  { nombre: 'Vainilla de Tahití & Sal de Maras', detalle: 'Infusión natural en vaina con toque mineral andino' },
  { nombre: 'Pistacho Tostado de Bronte', detalle: 'Pasta pura de pistacho seleccionado sin colorantes' },
  { nombre: 'Lúcuma de Altura y Pecanas', detalle: 'Pulpa seleccionada con crocante artesanal' },
  { nombre: 'Sorbete de Maracuyá y Aguaymanto', detalle: 'Base 100 % fruta natural, libre de lácteos' },
];

export const prensa = {
  medio: 'Hospitalidad & Gastronomía',
  fecha: 'Edición Cusco',
  titular: 'Monteville eleva el estándar del postre en los hoteles y restaurantes más exigentes',
  entradilla:
    'Con formulación precisa, ingredientes de origen y logística en frío, la casa heladera se consolida como el aliado estratégico del sector HoReCa.',
  url: 'https://monteville.org.pe/carta',
};

export type Faq = { pregunta: string; respuesta: string; pending?: string };

export const faqs: Faq[] = [
  {
    pregunta: '¿Qué es Monteville?',
    respuesta:
      'Monteville es una casa de alta heladería gourmet en Cusco dedicada exclusivamente a abastecer a cafeterías, hoteles y restaurantes de alto prestigio.',
  },
  {
    pregunta: '¿Venden al público general?',
    respuesta:
      'No. Nuestra operación es 100 % B2B para el canal HoReCa, garantizando exclusividad, consistencia en cada lote y atención dedicada a nuestros socios comerciales.',
  },
  {
    pregunta: '¿Cómo solicito una degustación para mi negocio?',
    respuesta:
      'Puedes agendar una cata privada para tu equipo de cocina o gerencia escribiéndonos al +51 986 698 900 o a monteville.org.pe@gmail.com.',
  },
  {
    pregunta: '¿Cómo garantizan la cadena de frío?',
    respuesta:
      'Trabajamos con pasteurización controlada, abatimiento rápido y despachos en transporte refrigerado a -18 °C para asegurar textura perfecta al llegar a tu cocina.',
  },
  {
    pregunta: '¿En qué formatos entregan los helados?',
    respuesta:
      'Entregamos en cubetas profesionales de 2.5 L y 5 L listas para servicio en cocina o vitrina, además de formatos especiales según el volumen de tu establecimiento.',
  },
  {
    pregunta: '¿Desarrollan sabores exclusivos para nuestra carta?',
    respuesta:
      'Sí. Colaboramos directamente con chefs y baristas para formular helados y sorbetes de autor pensados para sus postres, cafés o menús degustación.',
  },
  {
    pregunta: '¿Tienen opciones veganas o sin lactosa?',
    respuesta:
      'Sí, contamos con sorbetes 100 % fruta natural y bases vegetales libres de lácteos.',
  },
  {
    pregunta: '¿Cuál es el horario de atención y cobertura?',
    respuesta:
      'Atendemos Cusco ciudad y el Valle Sagrado de lunes a sábado, de 08:00 a 19:00, con despachos programados.',
  },
];

export const faqsPendientes: string[] = [];