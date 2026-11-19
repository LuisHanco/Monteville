import type { APIRoute } from 'astro';
import { contacto, experiencias, faqs, links, maridaje, seo } from '../data/arko';

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Falta site en astro.config.mjs');
  const home = new URL('/', site).href;
  const experienceLines = experiencias
    .map((exp) => `- ${exp.nombre}: ${exp.precio} (${exp.porPersona}). ${exp.descripcion}`)
    .join('\n');
  const questions = faqs.map((faq) => `### ${faq.pregunta}\n\n${faq.respuesta}`).join('\n\n');
  const body = `# Monteville

> ${seo.description}

Alta heladería gourmet artesanal en Cusco, diseñada exclusivamente para cafeterías, hoteles y restaurantes de alto prestigio.

## Datos

- Ubicación: ${contacto.calle}, ${contacto.ciudad} (${contacto.barrio})
- Horario: ${contacto.horario}. ${contacto.cocina}.
- Teléfono: ${contacto.telefono}
- Email: ${contacto.email}
- Modelo: Venta exclusiva B2B (canal HoReCa).
${experienceLines}
- ${maridaje.nombre}: ${maridaje.precio}. ${maridaje.descripcion}
- Carta de sabores: ${links.carta}
- Solicitar degustación: ${links.reservar}
- Catálogo HoReCa: ${links.regalar}
- Instagram: ${links.instagram}
- Página: ${home}

## Preguntas frecuentes

${questions}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};