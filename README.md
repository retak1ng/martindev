# Mi Portafolio

Portafolio personal construido con Astro, desplegado en GitHub Pages.

**URL**: [retak1ng.github.io/martindev](https://retak1ng.github.io/martindev/)

## Stack

- **Astro 5** + MDX + Sitemap
- **TypeScript**
- **GitHub Pages** (base path: `/martindev/`)

## Características

- 100/100 Lighthouse
- SEO optimizado: URLs canónicas y OpenGraph
- Sitemap autogenerado
- RSS Feed
- Blog con Markdown/MDX
- Arquitectura Clean Architecture

## Estructura del proyecto

```
src/
├── domain/types/       ← Entidades e interfaces (site.ts, blog.ts, about.ts)
├── data/               ← Configuración y datos estáticos (site.config.ts, about.ts)
├── services/           ← Acceso a datos (blog.service.ts)
├── components/
│   ├── ui/             ← Componentes atómicos (SocialLinks.astro)
│   ├── BaseHead.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── HeaderLink.astro
│   └── FormattedDate.astro
├── layouts/
│   ├── BaseLayout.astro   ← Layout base para todas las páginas
│   └── BlogPost.astro     ← Solo para posts del blog
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   ├── rss.xml.ts
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
├── content/blog/       ← Posts en Markdown/MDX
├── styles/global.css
└── content.config.ts   ← Schema de content collections
```

## Comandos

| Comando         | Acción                                      |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo en `localhost:4321`  |
| `npm run build` | Build de producción en `./dist/`            |
| `npm run preview` | Vista previa del build local             |

## Contacto

- **LinkedIn**: [linkedin.com/in/retak1ng](https://linkedin.com/in/retak1ng)
