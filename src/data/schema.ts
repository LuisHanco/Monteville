import { contacto, experiencias, faqs, links, maridaje, platos, seo } from './arko';
import { fotosPublicas, ogImage } from './imagenes';

const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export interface PageImage {
  loc: string;
  title: string;
  caption: string;
}

function abs(site: URL, path: string) {
  return new URL(path, site).href;
}

function precioNumerico(label: string) {
  const match = label.match(/\d+/);
  if (!match) throw new Error(`Precio sin cifra: ${label}`);
  return match[0];
}

export function pageImages(site: URL): PageImage[] {
  return fotosPublicas.map((foto) => ({
    loc: abs(site, foto.src),
    title: `${foto.lugar} · Monteville`,
    caption: foto.alt,
  }));
}

export function structuredData(site: URL) {
  const home = new URL('/', site).href;
  const businessId = new URL('/#organization', site).href;
  const websiteId = new URL('/#website', site).href;
  const webpageId = new URL('/#webpage', site).href;
  const telephone = links.telefono.replace('tel:', '');
  const shareImage = {
    '@type': 'ImageObject',
    url: abs(site, ogImage.src),
    width: 1200,
    height: 630,
    caption: ogImage.alt,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FoodEstablishment',
        '@id': businessId,
        name: 'Monteville',
        alternateName: ['Monteville Helados Gourmet', 'Monteville Cusco'],
        slogan: 'Alta heladería gourmet exclusiva para la hospitalidad de prestigio',
        description:
          'Helados gourmet artesanales elaborados en Cusco exclusivamente para cafeterías, hoteles y restaurantes de alto prestigio.',
        url: home,
        image: [
          shareImage,
          ...pageImages(site)
            .slice(0, 4)
            .map((photo) => ({ '@type': 'ImageObject', url: photo.loc, caption: photo.caption })),
        ],
        logo: abs(site, '/icon-512.png'),
        telephone,
        email: contacto.email,
        priceRange: '$$$',
        servesCuisine: ['Heladería Gourmet', 'Alta Repostería', 'HoReCa'],
        currenciesAccepted: 'PEN',
        acceptsReservations: true,
        areaServed: [
          { '@type': 'City', name: 'Cusco' },
          { '@type': 'AdministrativeArea', name: 'Valle Sagrado de los Incas' },
        ],
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Hoteles, restaurantes y cafeterías de alto prestigio (HoReCa)',
        },
        menu: links.carta,
        hasMenu: {
          '@type': 'Menu',
          name: 'Carta de Sabores Monteville',
          url: links.carta,
          hasMenuSection: [
            {
              '@type': 'MenuSection',
              name: 'Sabores destacados',
              hasMenuItem: platos.map((plato) => ({
                '@type': 'MenuItem',
                name: plato.nombre,
                ...(plato.detalle ? { description: plato.detalle } : {}),
              })),
            },
            {
              '@type': 'MenuSection',
              name: 'Líneas y formatos HoReCa',
              hasMenuItem: [
                ...experiencias.map((exp) => ({
                  '@type': 'MenuItem',
                  name: exp.nombre,
                  description: `${exp.descripcion} ${exp.porPersona}.`,
                  offers: {
                    '@type': 'Offer',
                    price: precioNumerico(exp.precio),
                    priceCurrency: 'PEN',
                    availability: 'https://schema.org/InStock',
                  },
                })),
                {
                  '@type': 'MenuItem',
                  name: maridaje.nombre,
                  description: maridaje.descripcion,
                  offers: {
                    '@type': 'Offer',
                    price: precioNumerico(maridaje.precio),
                    priceCurrency: 'PEN',
                    availability: 'https://schema.org/InStock',
                  },
                },
              ],
            },
          ],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: contacto.calle,
          postalCode: contacto.codigoPostal,
          addressLocality: contacto.localidad,
          addressRegion: 'Cusco',
          addressCountry: 'PE',
        },
        geo: { '@type': 'GeoCoordinates', latitude: contacto.lat, longitude: contacto.lon },
        hasMap: links.maps,
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: WEEK,
          opens: '08:00',
          closes: '19:00',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone,
          email: contacto.email,
          contactType: 'sales',
          areaServed: 'PE',
          availableLanguage: 'Spanish',
        },
        sameAs: [links.instagram, 'https://monteville.org.pe/'],
        mainEntityOfPage: { '@id': webpageId },
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: links.reservar,
            inLanguage: 'es',
            actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
          },
          result: { '@type': 'Reservation', name: 'Solicitud de degustación B2B en Monteville' },
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: home,
        name: 'Monteville',
        alternateName: 'Monteville Cusco',
        description: seo.description,
        inLanguage: 'es-PE',
        publisher: { '@id': businessId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: home,
        name: seo.title,
        description: seo.description,
        inLanguage: 'es-PE',
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        mainEntity: { '@id': businessId },
        primaryImageOfPage: shareImage,
      },
      {
        '@type': 'FAQPage',
        '@id': new URL('/#faq', site).href,
        url: new URL('/#preguntas', site).href,
        inLanguage: 'es-PE',
        isPartOf: { '@id': webpageId },
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: faq.respuesta },
        })),
      },
    ],
  };
}