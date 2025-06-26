# 🎨 UI Components Documentation

This document provides detailed information about the main components used in the Extenida Next project.

## 📑 Table of Contents

1. [Hero Section](#hero-section)
2. [Navigation](#navigation)
3. [Forms](#forms)
4. [Cards & Sections](#cards--sections)
5. [UI Components](#ui-components)

## Hero Section

The Hero component (`src/components/sections/Hero.tsx`) is a flexible component that supports both video and image backgrounds.

### Props

```typescript
interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  videoSrc?: string;
  overlay?: boolean;
}
```

### Features

- Video background support with fallback to image
- Gradient overlay option
- Responsive design
- Custom call-to-action buttons
- Automatic video playback optimization

### Usage Example

```tsx
<Hero
  title="Profesjonalne usługi budowlane w Londynie"
  subtitle="Rozbudowy, przebudowy i remonty domów"
  videoSrc="/hero-video.mp4"
  overlay={true}
/>
```

## Navigation

The navigation system consists of two main components:

### Desktop Navigation (`src/components/header/DesktopNavigation.tsx`)

- Responsive navigation menu
- Dropdown support for nested menus
- Integration with shadcn/ui components

### Mobile Menu (`src/components/header/MobileMenu.tsx`)

- Hamburger menu for mobile devices
- Animated transitions
- Nested menu support
- Touch-friendly interactions

## Forms

### Quote Request Form (`src/components/QuoteRequestForm.tsx`)

A comprehensive form for requesting service quotes.

Features:
- Form validation
- File upload support
- Auto-save functionality
- Success/error notifications

### Contact Form (`src/components/forms/ContactForm.tsx`)

A simpler contact form for general inquiries.

Features:
- Email validation
- Anti-spam protection
- Custom error messages
- Success notifications

## Cards & Sections

### Service Cards

```tsx
interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}
```

Used to display service offerings with consistent styling.

### Testimonial Cards

```tsx
interface TestimonialProps {
  author: string;
  content: string;
  rating: number;
  image?: string;
}
```

Displays customer testimonials with ratings and optional images.

## UI Components

All UI components are based on shadcn/ui and customized for our needs. Key components include:

### Button

```tsx
<Button
  variant="primary" | "secondary" | "outline" | "ghost"
  size="sm" | "md" | "lg"
  disabled={boolean}
>
  Content
</Button>
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

### Dialog

```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    Content goes here
  </DialogContent>
</Dialog>
```

## Style Guidelines

1. **Colors**
   - Primary: `extendia-primary`
   - Secondary: `extendia-secondary`
   - Accent: `extendia-accent`
   - Text: `gray-900`
   - Muted Text: `gray-600`

2. **Typography**
   - Headers: `text-2xl` to `text-5xl`
   - Body: `text-base` (`16px`)
   - Small Text: `text-sm` (`14px`)

3. **Spacing**
   - Container: `max-w-7xl mx-auto`
   - Section Padding: `py-12 md:py-24`
   - Component Gap: `gap-4` or `gap-8`

4. **Responsive Design**
   - Mobile First
   - Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
   - Flexible layouts using CSS Grid and Flexbox
