import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.tsx',
    'contents/**/*.mdx',
    '!contents/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx'
  ]);

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
    <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
      ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('contents', '')
          .replace('.tsx', '')
          .replace('.mdx', '');
        const route = path === '/index' ? '' : path;

        return `
            <url>
              <loc>${`https://opakholis.space${route}`}</loc>
              <changefreq>daily</changefreq>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `;
      })
      .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  writeFileSync('public/sitemap.xml', formatted);
}

generate();
