// Imágenes con URL fija en public/. Este archivo no importa nada de astro:assets porque también lo lee
// astro.config.mjs para añadir las imágenes al sitemap.

export const ogImage = {
  src: '/og-image.jpg',
  title: 'Monteville · Helados gourmet para hoteles, restaurantes y cafeterías en Cusco',
  alt: 'Monteville: alta heladería gourmet artesanal en Cusco para el canal HoReCa',
};

// Fotos en JPG con URL fija en public/photos para el sitemap de imágenes y el JSON-LD.
export const fotosPublicas = [
  {
    src: '/photos/0-entrada.jpg',
    lugar: 'El origen',
    alt: 'Monteville: alta heladería gourmet elaborada en Cusco para la hospitalidad de prestigio',
  },
  {
    src: '/photos/1-lateral-entrada.jpg',
    lugar: 'La materia prima',
    alt: 'Selección de cacao fino de Quillabamba, frutas de estación e ingredientes naturales',
  },
  {
    src: '/photos/2-mesa-especial.jpg',
    lugar: 'La textura',
    alt: 'Helado gourmet Monteville con cremosidad equilibrada y estabilidad térmica para servicio en mesa',
  },
  {
    src: '/photos/3-mesas.jpg',
    lugar: 'Los sabores',
    alt: 'Carta de helados y sorbetes artesanales diseñada para hoteles y restaurantes de alto prestigio',
  },
  {
    src: '/photos/4-barra.jpg',
    lugar: 'El servicio HoReCa',
    alt: 'Formatos profesionales de 2.5 L y 5 L para cocina, vitrina y cafeterías de especialidad',
  },
  {
    src: '/photos/5-barra-lateral.jpg',
    lugar: 'Cadena de frío',
    alt: 'Control térmico y despachos programados en Cusco y el Valle Sagrado',
  },
  {
    src: '/photos/6-vinos.jpg',
    lugar: 'La degustación',
    alt: 'Cata privada para chefs ejecutivos, baristas y gerentes de alimentos y bebidas',
  },
];