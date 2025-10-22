# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a pirate-themed Angular demo application showcasing Angular's `httpResource` feature. The app displays a list of ships with detail views and a shopping cart, using in-memory web API for data persistence.

## Development Commands

```bash
# Start development server
npm start

# Build the application
npm run build

# Build with watch mode for development
npm run watch

# Run tests
npm test
```

## Architecture

### Core Patterns

**httpResource Pattern**: This app demonstrates Angular's `httpResource` function, which provides reactive data fetching with signals. Key example in `src/app/ships/ship.service.ts`:
- Resources are created with `httpResource<T>()` and provide `value()` and `error()` signals
- Resources automatically re-fetch when their dependency signals change (see `FilmService` which refetches when selected ship changes)
- Always provide a `defaultValue` to avoid undefined states

**Zoneless Change Detection**: The app uses `provideZonelessChangeDetection()` in `app.config.ts`, meaning it relies entirely on signals for reactivity rather than Zone.js.

**linkedSignal Pattern**: Used extensively to derive state from other signals while preserving identity:
- `ShipService.selectedShip` maintains selection when ships resource refreshes
- `CartService.quantity` resets when selected ship changes
- The computation receives both the source value and previous result

### Application Structure

**In-Memory Web API**: The app uses `angular-in-memory-web-api` with mock data:
- `AppData` class in `src/app/app-data.ts` provides the in-memory database
- Data is defined in `ShipData` and `FilmData` static classes
- Configured with 1000ms delay to simulate network requests

**Routing**: Uses lazy loading for the ships module:
- Main routes: `/home`, `/ships`
- Ships feature is lazy loaded via `loadComponent`
- Component prefix: `pss` (defined in angular.json)

**Shell Component Pattern**: The ships feature uses a shell component (`ShipShell`) that composes three child components:
- `ShipList`: Displays list of ships
- `ShipDetail`: Shows selected ship details and films
- `CartTotal`: Displays shopping cart calculations

**State Management**: Entirely signal-based:
- `ShipService` owns the ships resource and selected ship
- `CartService` manages cart state with computed signals for pricing
- `FilmService` reactively fetches films for the selected ship

### TypeScript Configuration

Strict mode is enabled with comprehensive type checking:
- All strict compiler options are enabled
- Angular strict templates and injection parameters
- Experimental decorators enabled for Angular compatibility
