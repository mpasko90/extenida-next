# 🚀 Development Guide

This guide provides detailed information for developers working on the Extenida Next project.

## 📑 Table of Contents

1. [Development Setup](#development-setup)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Testing](#testing)
5. [Code Style](#code-style)
6. [Performance Guidelines](#performance-guidelines)

## Development Setup

### Prerequisites

- Node.js 18.0 or higher
- npm 8.0 or higher
- Git

### Initial Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/extenida-next.git
   cd extenida-next
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create local environment file:

   ```bash
   cp .env.example .env.local
   ```

4. Start development server:

   ```bash
   npm run dev
   ```

## Project Structure

```plaintext
extenida-next/
├── docs/            # Project documentation
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── ui/     # shadcn/ui components
│   │   ├── header/ # Navigation components
│   │   └── forms/  # Form components
│   ├── hooks/      # Custom React hooks
│   ├── lib/        # Utilities and helpers
│   ├── pages/      # Route components
│   └── types/      # TypeScript types
├── tests/          # Test files
└── config/         # Configuration files
```

## Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Emergency fixes

### Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or fixing tests
- `build:` - Build system changes
- `ci:` - CI configuration changes
- `chore:` - Other changes

### Example Commit Messages

```bash
feat: add video background to hero section
fix: resolve mobile menu animation issue
docs: update component documentation
style: improve button hover states
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

### Test File Structure

```plaintext
__tests__/
├── components/
│   ├── Hero.test.tsx
│   └── Navigation.test.tsx
├── hooks/
│   └── useMobile.test.tsx
└── utils/
    └── format.test.ts
```

### Testing Guidelines

1. **Component Tests**

   ```typescript
   import { render, screen } from '@testing-library/react';
   import userEvent from '@testing-library/user-event';
   import { Hero } from '@/components/Hero';

   describe('Hero', () => {
     it('renders with default props', () => {
       render(<Hero />);
       expect(screen.getByRole('heading')).toBeInTheDocument();
     });

     it('handles video playback', () => {
       render(<Hero videoSrc="/test.mp4" />);
       const video = screen.getByTestId('hero-video');
       expect(video).toBeInTheDocument();
     });
   });
   ```

2. **Hook Tests**

   ```typescript
   import { renderHook, act } from '@testing-library/react';
   import { useMobile } from '@/hooks/useMobile';

   describe('useMobile', () => {
     it('returns correct value on resize', () => {
       const { result } = renderHook(() => useMobile());
       act(() => {
         window.innerWidth = 400;
         window.dispatchEvent(new Event('resize'));
       });
       expect(result.current).toBe(true);
     });
   });
   ```

## Code Style

### TypeScript Best Practices

1. **Use TypeScript Features**

   ```typescript
   // Use interfaces for objects
   interface UserProps {
     id: string;
     name: string;
     email?: string;
   }

   // Use type for unions/intersections
   type ButtonVariant = 'primary' | 'secondary' | 'outline';

   // Use generics when appropriate
   function getFirst<T>(array: T[]): T | undefined {
     return array[0];
   }
   ```

2. **Component Props**

   ```typescript
   interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: ButtonVariant;
     isLoading?: boolean;
     children: React.ReactNode;
   }
   ```

### Styling Guidelines

1. **Tailwind Classes Organization**

   ```tsx
   <div
     className={cn(
       // Layout
       "grid grid-cols-1 md:grid-cols-2",
       // Spacing
       "gap-4 p-4 md:p-6",
       // Typography
       "text-gray-900 text-lg",
       // Visual
       "bg-white rounded-lg shadow-md",
       // States
       "hover:shadow-lg transition-shadow",
       // Custom classes
       className
     )}
   />
   ```

2. **CSS Variables**

   ```css
   :root {
     --extendia-primary: #0066cc;
     --extendia-secondary: #2d3748;
     --extendia-accent: #ed8936;
   }
   ```

## Performance Guidelines

### Component Optimization

1. **Use Memoization**

   ```typescript
   import { memo } from 'react';

   interface ExpensiveComponentProps {
     data: ComplexData;
     onUpdate: (id: string) => void;
   }

   export const ExpensiveComponent = memo(
     ({ data, onUpdate }: ExpensiveComponentProps) => {
       // Component logic
     },
     (prev, next) => prev.data.id === next.data.id
   );
   ```

2. **Lazy Loading**

   ```typescript
   const HeavyComponent = lazy(() => import('./HeavyComponent'));

   function App() {
     return (
       <Suspense fallback={<Loading />}>
         <HeavyComponent />
       </Suspense>
     );
   }
   ```

### Image Optimization

1. **Use Responsive Images**

   ```tsx
   <img
     src="/image.jpg"
     srcSet="/image-400.jpg 400w, /image-800.jpg 800w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Description"
     loading="lazy"
   />
   ```

2. **Video Optimization**

   ```tsx
   <video
     autoPlay
     muted
     loop
     playsInline
     poster="/poster.jpg"
     className="object-cover"
   >
     <source src="/video.webm" type="video/webm" />
     <source src="/video.mp4" type="video/mp4" />
   </video>
   ```

### Build Optimization

1. **Dynamic Imports**
2. **Tree Shaking**
3. **Code Splitting**
4. **Asset Optimization**

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
