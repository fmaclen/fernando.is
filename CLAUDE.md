# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev --host` - Start development server with host binding for network access
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run Svelte type checking in watch mode

### Code Quality

- `npm run lint` - Run prettier and eslint checks
- `npm run format` - Format code with prettier

## Architecture

### Framework & Deployment

- **SvelteKit** with Svelte 5 runes for reactivity
- **Static site generation** using Cloudflare adapter
- **TypeScript** with strict mode enabled
- **SCSS** styling with Open Props CSS library

### Project Structure

- `src/routes/+layout.svelte` - Main layout with theme system and sidebar
- `src/routes/+page.svelte` - Portfolio grid using projects store
- `src/lib/stores/projectsStore.ts` - Central data store for projects with GitHub API integration
- `src/lib/components/ProjectCard.svelte` - Project cards with image galleries
- `src/lib/components/icons/` - Custom SVG icon system
- `src/lib/mixins.scss` - Responsive design mixins and breakpoints

### Key Systems

#### Theme System

- Dark/light mode toggle implemented in `+layout.svelte`
- Theme persistence via localStorage (`fernando.is-colorTheme`)
- CSS custom properties for theming in `:global(html[data-theme])`

#### Projects Store

- Fetches GitHub API data for `updatedAt` timestamps
- Hourly caching via localStorage (`fernando.is-projects`, `fernando.is-lastCheck`)
- Automatic sorting by last updated (except fernando.is repo moves to end)

#### Image Gallery

- **Embla Carousel** for image browsing within project cards
- **Modal dialog system** for full-screen image viewing
- Keyboard navigation (arrow keys) and responsive design

#### Icon System

- Custom SVG components in `src/lib/components/icons/`
- Enum-based icon selection (`Icons` enum)
- Theme modifiers (`IconModifier` enum): `themable`, `in-dialog`, `dark-mode`, `light-mode`

#### Responsive Design

- Breakpoints defined in `mixins.scss`: xl(1440px), lg(1024px), md(768px), sm(480px)
- Layout mixins: `layout-padding-inline` and `layout-padding-block`
- Grid system: 2-column on desktop, 1-column on mobile

### Styling Conventions

- SCSS modules with `@import '$lib/mixins'`
- Open Props CSS variables for consistent spacing/colors
- Custom CSS properties for theme variables
- Smooth transitions for theme switching (150ms-500ms)

### Static Assets

- Project images in `static/projects/` directory
- Favicon and other static files in `static/`
- Background pattern SVG for dialog backdrop
