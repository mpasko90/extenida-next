# 🛠️ Build System Documentation

This document outlines the build system configuration and optimization strategies used in the Extenida Next project.

## 📑 Table of Contents

1. [Vite Configuration](#vite-configuration)
2. [Build Optimizations](#build-optimizations)
3. [Asset Handling](#asset-handling)
4. [Environment Configuration](#environment-configuration)
5. [Development Tools](#development-tools)

## Vite Configuration

The project uses Vite as its build tool, configured in `vite.config.ts`.

### Base Configuration

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Build Optimizations

```typescript
build: {
  // Increase size limit for chunks
  chunkSizeWarningLimit: 800,
  
  rollupOptions: {
    output: {
      manualChunks: {
        // Split vendor chunks
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        'ui-vendor': [
          '@radix-ui/react-alert-dialog',
          '@radix-ui/react-dialog',
          '@radix-ui/react-dropdown-menu',
          // ... other UI components
        ],
        'utils-vendor': ['class-variance-authority', 'clsx', 'tailwind-merge'],
      },
      // Optimize chunk distribution
      experimentalMinChunkSize: 10000,
    }
  },
}
```

## Build Optimizations

### Code Splitting

The project implements several code splitting strategies:

1. **Route-based Splitting**
   - Each route is a separate chunk
   - Loaded on demand when navigating
   - Reduces initial bundle size

2. **Vendor Chunking**
   - Common dependencies grouped together
   - Better caching strategy
   - Reduced download size for updates

3. **Dynamic Imports**
   - Large components loaded on demand
   - Improves initial page load
   - Better resource utilization

### Performance Strategies

1. **Bundle Size Optimization**
   ```typescript
   // Example of dynamic import
   const HeavyComponent = lazy(() => import('./HeavyComponent'));
   ```

2. **Tree Shaking**
   - Dead code elimination
   - Only used code is bundled
   - Smaller final bundle size

3. **Asset Optimization**
   - Automatic image optimization
   - CSS minification
   - JavaScript minification and mangling

## Asset Handling

### Images

Images are automatically optimized during build:
- Converted to modern formats
- Responsive sizes generated
- Lazy loading enabled
- Proper aspect ratio maintained

### Fonts

Font loading is optimized:
- Subset loading
- WOFF2 format preferred
- Preloading critical fonts
- Local font fallbacks

### Video

Video assets are handled efficiently:
- Lazy loading for background videos
- Proper codec selection
- Responsive sources
- Fallback images

## Environment Configuration

### Development Mode

```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
```

### Production Mode

```bash
# .env.production
VITE_API_URL=https://api.example.com
VITE_DEBUG=false
```

### Build Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "build:analyze": "vite build --mode analyze"
  }
}
```

## Development Tools

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### PostCSS Configuration

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {},
  },
}
```

### Development Server Features

1. **Hot Module Replacement (HMR)**
   - Instant feedback
   - State preservation
   - Fast refresh for React components

2. **Error Overlay**
   - Clear error messages
   - Stack traces
   - Source maps support

3. **Build Analysis**
   - Bundle size visualization
   - Dependency graph
   - Performance metrics

## Best Practices

1. **Code Organization**
   - Clear folder structure
   - Modular components
   - Type-safe interfaces

2. **Performance Monitoring**
   - Lighthouse scores
   - Bundle size tracking
   - Loading performance

3. **Development Workflow**
   - Consistent formatting
   - TypeScript strict mode
   - Proper error handling
