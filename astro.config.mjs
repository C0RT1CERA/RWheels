import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

//netlify wala https://www.netlify.com/blog/astro-ssr/
//import netlify from '@astrojs/netlify/functions'; saind astro.js website
import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()]
});

