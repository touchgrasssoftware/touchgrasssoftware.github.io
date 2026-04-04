# AGENTS.md

## Commands

- `bun run dev` - Start dev server
- `bun run build` - Build static site
- `bun run check` - TypeScript/Svelte type checking

## Architecture

SvelteKit static site (GitHub Pages) using adapter-static with UnoCSS for
styling.

- `src/routes/` - SvelteKit pages (+page.svelte, +layout.svelte)
- `src/lib/components/` - Reusable Svelte components (lowercase naming)
- `src/lib/assets/` - Static assets imported via $lib
- `static/` - Public static files

## Code Style

- **Formatting**: Prettier with no semicolons, single quotes, 2-space indent,
  trailing commas
- **Components**: Lowercase filenames (e.g., `hero.svelte`), Svelte 5 syntax
- **Imports**: Use `$lib` alias for lib imports; iconify icons via
  `@iconify-json/*`
- **Styling**: UnoCSS (Tailwind-compatible via preset-wind3); use `clsx` for
  conditional classes
- **TypeScript**: Strict mode enabled; prefer typed props
