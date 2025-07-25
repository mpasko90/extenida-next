import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},			extend: {
				fontFamily: {
					inter: ['Inter', 'sans-serif'],
					sans: ['Inter', 'sans-serif'],
				},
				textShadow: {
					DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.2)',
					sm: '0 1px 1px rgba(0, 0, 0, 0.1)',
					md: '0 2px 4px rgba(0, 0, 0, 0.2)',
					lg: '0 4px 8px rgba(0, 0, 0, 0.2)',
				},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Extendia Custom Colors
				extendia: {
					primary: 'hsl(var(--extendia-primary))',
					secondary: 'hsl(var(--extendia-secondary))',
					accent: 'hsl(var(--extendia-accent))',
					'accent-dark': 'hsl(var(--extendia-accent-dark))',
					card: 'hsl(var(--extendia-card))',
					'text-primary': 'hsl(var(--extendia-text-primary))',
					'text-secondary': 'hsl(var(--extendia-text-secondary))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'border-spin': 'border-spin 7s linear infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
