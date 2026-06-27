# Donde el Capi — Frontend

Sitio web mobile-first para **Donde el Capi**. Next.js 16 + Tailwind v4. Menú y contenido en archivos locales (sin base de datos).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar menú y precios

Todo está en **[`src/lib/data/catalog.ts`](src/lib/data/catalog.ts)**:

- **`CATEGORIES`** — Todos, Antojitos, Tamales, Especiales
- **`PRODUCTS`** — nombre, descripción, precio, categoría, destacado
- **`SITE_CONFIG`** — WhatsApp, textos del hero, catering, redes
- **`SOCIAL_LINKS`** — URLs de Instagram, TikTok, Facebook

### Agregar un producto

1. Sube la imagen a `src/images/products/` (JPG o PNG recomendado)
2. Importa la imagen al inicio de `catalog.ts`
3. Añade un objeto en `PRODUCTS` con `category_id` correcto

### Agregar papas (u otro antojito)

Cuando tengas la foto, ponla en `src/images/products/` y agrégala en `PRODUCTS` con `category_id: "cat-antojitos"`.

## Imágenes

```
src/images/
├── categories/   # Todos, Antojitos, Tamales, Especiales
├── products/     # Una foto por producto
└── logos/        # Logo a color y blanco/negro
```

| Uso | Ratio recomendado |
|---|---|
| Productos | 1:1 o 4:5 |
| Categorías | 16:9 o 3:2 |
| Hero | 16:9 |

> **Nota:** `tamales.avif` funciona, pero JPG/PNG se optimizan mejor con Next.js.

## WhatsApp

Cambia `whatsapp_number` en `SITE_CONFIG` (solo dígitos, ej. `15551234567`).

## Deploy

Vercel: conectar repo y deploy. No requiere variables de entorno para el menú.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
