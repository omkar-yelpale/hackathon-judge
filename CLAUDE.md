# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**hackathon-judge** is a React + TypeScript + Vite application for judging hackathon submissions. Currently in initial development phase with standard Vite template structure.

## Development Commands

### Essential Commands
```bash
# Install dependencies
yarn install

# Start development server (port 3000)
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linter
yarn lint
```

### TypeScript Commands
```bash
# Type check without building
yarn tsc -b

# Type check specific file
yarn tsc --noEmit src/App.tsx
```

## Architecture Overview

### Tech Stack
- **React 19.1.0** - UI framework with latest features
- **TypeScript 5.8.3** - Type safety with strict mode enabled
- **Vite 7.0.0** - Fast build tool with HMR
- **ESLint** - Code quality with TypeScript integration
- **Mantine** - UI components library (ONLY for inputs, modals, buttons, select dropdowns)
- **Tailwind CSS** - Utility-first CSS framework for styling
- **TanStack Query** - Data fetching and caching library

### Project Structure
```
src/
├── main.tsx          # Application entry point - mounts React to #root
├── App.tsx           # Root React component
├── App.css           # Component-specific styles
├── index.css         # Global styles with Tailwind directives
├── vite-env.d.ts     # Vite TypeScript declarations
├── assets/           # Static assets (images, etc.)
└── hooks/            # Custom React hooks (e.g., useExampleQuery.ts)
```

### TypeScript Configuration
- **Multi-project setup** with separate configs for app and node environments
- **Strict mode enabled** - all strict type checking flags active
- **Target ES2022** with bundler module resolution
- **React JSX** configured for automatic runtime

### Build Process
1. TypeScript compilation check (`tsc -b`)
2. Vite bundles and optimizes for production
3. Output to `dist/` directory

## Key Development Patterns

### Component Development
- Functional components with TypeScript interfaces
- CSS modules or component-specific CSS files
- Assets imported as ES modules

### UI Component Usage Guidelines
**IMPORTANT: Mantine Usage Restrictions**
- Use Mantine ONLY for:
  - Form inputs (TextInput, NumberInput, Textarea, etc.)
  - Buttons
  - Modals
  - Select dropdowns and similar form controls
  - Notifications/Toasts
- Use standard HTML tags with Tailwind CSS for:
  - Layout components (div, section, main, etc.)
  - Typography (h1-h6, p, span, etc.)
  - Cards and containers
  - Lists and navigation
  - Any other UI elements not listed above

Example:
```tsx
// ✅ Good - Using HTML with Tailwind for layout
<div className="container mx-auto px-4">
  <h1 className="text-2xl font-bold mb-4">Title</h1>
  <div className="bg-white rounded-lg shadow p-6">
    <Button onClick={handleClick}>Submit</Button> {/* Mantine for button */}
  </div>
</div>

// ❌ Bad - Using Mantine for layout
<Container>
  <Title>Title</Title>
  <Card>
    <Button onClick={handleClick}>Submit</Button>
  </Card>
</Container>
```

### State Management
- TanStack Query for server state management
- Local state with React hooks (useState, useReducer)
- Consider adding Zustand or Context API for complex client state

### Routing
- No routing solution currently implemented
- Consider React Router for multi-page functionality

## Testing Strategy

**Note: Testing not yet configured**

Recommended setup:
```bash
# Unit/Component Testing
yarn add -D vitest @testing-library/react @testing-library/jest-dom

# E2E Testing
yarn add -D playwright @playwright/test
```

## Future Considerations

### For Hackathon Judge Functionality
- API integration for submission data
- Authentication system
- Judge dashboard components
- Scoring/evaluation system
- Real-time updates (consider WebSockets)

### Performance Optimization
- Code splitting with React.lazy()
- Vite's automatic chunk optimization
- TanStack Query for efficient data fetching and caching

### Production Readiness
- Enable stricter ESLint rules (see README.md)
- Add pre-commit hooks (husky + lint-staged)
- Environment variable management (.env files)
- Error boundary implementation
- Logging and monitoring setup