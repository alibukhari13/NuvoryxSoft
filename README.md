# Nuvoryx frontend

Frontend-only Next.js App Router site built from the supplied `agency-pages` HTML. The application runs locally at [http://localhost:3000](http://localhost:3000).

## Folder guide

- `app/` contains the real URL routes. Each `page.jsx` is a small routing file with route metadata and the shared layout.
- `pages/` contains the page compositions. For example, `pages/services/cloud-infrastructure/cloud-migration/page.jsx` calls that page's section components.
- `components/<route>/` contains the editable sections for that page. Route folders follow the URL path; for example, `components/services/cloud-infrastructure/cloud-migration/`.
- `components/landing/` contains the 20 landing page sections.
- `components/layout/` contains the shared site header, footer, mobile menu, floating actions, global interactions and `PageShell`.
- `components/templates/` contains reusable layouts for linked pages whose individual HTML was not supplied.
- `public/agency-assets/` contains locally stored images extracted from the supplied HTML.

The source folder includes 38 standalone non-landing HTML pages. Routes without their own saved HTML still have an explicit `app/` route and `pages/` composition, using a matching reusable template where needed.

## Run and update

```bash
npm install
npm run dev
```

To regenerate the imported pages from the adjacent `agency-pages` folder:

```bash
npm run import:agency-pages
```

Make regular page changes in `pages/<route>/page.jsx` and `components/<route>/`. Shared header or footer changes belong in `components/layout/`. Regenerating replaces generated page components from source HTML.
