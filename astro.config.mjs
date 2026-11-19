// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { fotosPublicas, ogImage } from './src/data/imagenes.ts';

// https://astro.build/config
export default defineConfig({
  // URL real de la web. Canónica, sitemap, robots.txt, og:image y JSON-LD salen de aquí.
  site: 'https://monteville.org.pe',
  integrations: [
    sitemap({
      // La portada lleva sus imágenes en el sitemap: la de redes y las fotos de producto.
      serialize(item) {
        if (new URL(item.url).pathname !== '/') return item;
        const images = [
          { src: ogImage.src, title: ogImage.title, caption: ogImage.alt },
          ...fotosPublicas.map((foto) => ({ src: foto.src, title: `${foto.lugar} · Monteville`, caption: foto.alt })),
        ];
        return { ...item, img: images.map(({ src, ...rest }) => ({ url: new URL(src, item.url).href, ...rest })) };
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Hina Mincho',
      cssVariable: '--font-hina',
      fallbacks: ['serif'],
      options: {
        variants: [{ src: ['./src/assets/fonts/hina-mincho-latin-400.woff2'], weight: 400, style: 'normal' }],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Zen Kaku Gothic New',
      cssVariable: '--font-zen',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          { src: ['./src/assets/fonts/zen-kaku-gothic-new-latin-400.woff2'], weight: 400, style: 'normal' },
          { src: ['./src/assets/fonts/zen-kaku-gothic-new-latin-500.woff2'], weight: 500, style: 'normal' },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});