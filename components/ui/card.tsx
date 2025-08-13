import * as React from "react"

import { cn } from "@/lib/utils"

// New variant types for card styling
const cardVariants = {
  default: "rounded-lg border bg-card text-card-foreground shadow-sm",
  subtle:
    "rounded-lg border border-slate-200 bg-white/70 dark:border-slate-700 dark:bg-slate-900/40 backdrop-blur-sm shadow-sm",
  accent:
    "rounded-lg border border-extendia-accent/40 bg-extendia-accent/10 text-slate-900 dark:text-white shadow-sm",
  highlight:
    "rounded-lg border-2 border-extendia-primary/60 bg-gradient-to-br from-extendia-primary/10 to-extendia-secondary/10 shadow-md",
} as const

type CardVariant = keyof typeof cardVariants

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

const Card = React.forwardRef<
  HTMLDivElement,
  CardProps
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants[variant], className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
