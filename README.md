# Extenida Next - Modern Business Website

A modern, high-performance website built with Vite, React, and Tailwind CSS, featuring a beautiful UI and optimized build system.

## 🚀 Features

- **Modern Stack:** Built with Vite, React, and TypeScript
- **Beautiful UI:** Utilizes shadcn/ui components and Tailwind CSS
- **Optimized Build:** Code splitting and chunk management for optimal performance
- **Responsive Design:** Mobile-first approach with clean, modern aesthetics
- **Video Hero:** Dynamic video background with fallback support

## 🛠️ Tech Stack

- **Build Tool:** Vite
- **Framework:** React
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript
- **Routing:** React Router DOM
- **State Management:** React Hooks

## 📦 Project Structure

```plaintext
src/
├── components/     # Reusable UI components
│   ├── ui/        # shadcn/ui components
│   ├── header/    # Navigation components
│   └── sections/  # Page sections
├── pages/         # Route pages
├── hooks/         # Custom React hooks
└── lib/          # Utility functions
```

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/extenida-next.git
   cd extenida-next
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) to view the app

## 🔧 Build

To build for production:

```bash
npm run build
```

This creates an optimized build in the `dist` folder with:

- Code splitting
- Asset optimization
- Chunk management
- Tree shaking

## 🎨 UI Components

We use shadcn/ui components enhanced with Tailwind CSS. Key components:

- **Button:** Primary and secondary variations
- **Navigation:** Responsive header with mobile menu
- **Hero:** Video background with overlay support
- **Cards:** Service and testimonial displays
- **Forms:** Contact and quote request forms

## ⚡ Performance Optimizations

The project includes several performance optimizations:

1. **Code Splitting:**
   - Route-based splitting
   - Vendor chunk separation
   - Dynamic imports for large components

2. **Build Optimizations:**
   - Chunk size management
   - Asset inlining configuration
   - Module preloading

3. **Asset Handling:**
   - Optimized video loading
   - Responsive images
   - Font optimization

## 📝 Configuration Files

- `vite.config.ts` - Vite build configuration
- `postcss.config.js` - PostCSS configuration for Tailwind
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
