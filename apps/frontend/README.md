# Frontend

This application uses Astro for routing and builds, React for UI components,
and TypeScript with strict type checking.

Run commands from the repository root:

| Command                | Action                             |
| :--------------------- | :--------------------------------- |
| `npm install`          | Install workspace dependencies     |
| `npm run dev`          | Start the development server       |
| `npm run build`        | Build the production site          |
| `npm run preview`      | Preview the production build       |
| `npm run test:e2e`     | Run Playwright end-to-end tests    |
| `npm run format`       | Format source files                |
| `npm run format:check` | Check source formatting            |
| `npm run lint`         | Run ESLint                         |
| `npm run typecheck`    | Check Astro and TypeScript sources |

Astro pages and layouts remain in `src/pages` and `src/layouts`. React
components use `.tsx` files in `src/components` and are hydrated from Astro
pages with an appropriate `client:*` directive when they need browser-side
interactivity.
