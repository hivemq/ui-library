const buildEnvironment = process.env.BUILD_ENV || 'library'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx,vue}', './node_modules/@hivemq/ui-component-library/dist/*.js'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    fontFamily: {
      body: ['Roboto', 'Segoe UI', 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', 'Arial', 'sans-serif', 'system-ui', '-apple-system'],
      display: ['Raleway', 'Roboto', 'Segoe UI', 'sans-serif'],
      monospace: ['IntelOne Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.032em',
      normal: '0',
      wide: '.032em',
      wider: '.05em',
      widest: '.1em'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--hivemq-yellow-400))'
        },
        typo: {
          muted: 'hsl(var(--hivemq-stone-600))',
          link: 'hsl(var(--hivemq-yellow-600))'
        },
        stone: {
          100: 'hsl(var(--hivemq-stone-100))',
          600: 'hsl(var(--hivemq-stone-600))',
          900: 'hsl(var(--hivemq-stone-900))'
        },
        overlay: {
          DEFAULT: 'rgb(116, 93, 2)'
        },
        // other
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          300: 'hsl(var(--destructive-300))',
          200: 'hsl(var(--destructive-200))',
          foreground: 'hsl(var(--destructive-foreground))'
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))'
      },
      transitionProperty: {
        color_bg: 'color, background-color',
        outline_bg: 'outline, background-color'
      },
      borderRadius: {
        lg: 'calc(var(--radius) + 2px)',
        md: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  corePlugins: {
    preflight: buildEnvironment === 'storybook'
  }
}
