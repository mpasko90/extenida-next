# Extendia Next

## Overview

Modern, accessible, and SEO-optimized bathroom renovation website built with Vite and React.

## Documentation

### Development

- [Clean Code Guidelines](./docs/CLEAN_CODE.md) - Best practices and coding standards
- [Accessibility (WCAG 2.1)](./docs/WCAG.md) - Accessibility implementation guide
- [SEO & AI SEO](./docs/SEO.md) - SEO best practices and AI optimization

### Quick Start

1. Install dependencies:

```bash
npm install
```

1. Start development server:

```bash
npm run dev
```

1. Build for production:

```bash
npm run build
```

1. Preview production build:

```bash
npm run preview
```

## Features

- 🚀 Vite + React for lightning-fast development
- 🎨 Tailwind CSS for utility-first styling
- 🌐 SEO-optimized with AI-friendly markup
- ♿ WCAG 2.1 compliant accessibility
- 📱 Responsive mobile-first design
- 🔧 Modern dev tooling and optimization

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Code Quality & Linting

This project uses **ESLint** for code quality and consistency, with configuration for Next.js, TypeScript, React Hooks, and React Refresh. Linting is enforced for all `.ts` and `.tsx` files.

### How to run ESLint

```bash
npm run lint
```

### ESLint configuration highlights

- **Next.js**: Uses `next/core-web-vitals` and `next/typescript` rules (see `eslint.config.mjs`)
- **TypeScript**: Uses `@typescript-eslint` recommended rules
- **React Hooks**: Enforces best practices for hooks
- **React Refresh**: Warns if a file exports more than just a component (for Fast Refresh compatibility)
- **Globals**: Browser globals enabled
- **Custom rules**:
  - `@typescript-eslint/no-unused-vars`: off (handled by TS)
  - `react-refresh/only-export-components`: warn (allows constant export)

### Example config (see `eslint.config.js`)

```js
export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
```

For Next.js App Router projects, you can also use `eslint.config.mjs` with `next/core-web-vitals` and `next/typescript` for stricter rules.
