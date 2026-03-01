/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                'heading': ['Space Grotesk', 'Montserrat', 'sans-serif'],
                'display': ['Montserrat', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                xl: 'calc(var(--radius) + 4px)',
                '2xl': 'calc(var(--radius) + 8px)',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    glow: 'hsl(var(--primary-glow))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))'
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    foreground: 'hsl(var(--warning-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            boxShadow: {
                'sm': 'var(--shadow-sm)',
                'md': 'var(--shadow-md)',
                'lg': 'var(--shadow-lg)',
                'xl': 'var(--shadow-xl)',
                'glow': 'var(--shadow-glow)',
                'card': 'var(--shadow-card)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px hsl(190 71% 46% / 0.3)' },
                    '50%': { boxShadow: '0 0 40px hsl(190 71% 46% / 0.5)' }
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-in-left': {
                    from: { opacity: '0', transform: 'translateX(-30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                'slide-in-right': {
                    from: { opacity: '0', transform: 'translateX(30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' }
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.95)' },
                    to: { opacity: '1', transform: 'scale(1)' }
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out infinite 2s',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.6s ease-out forwards',
                'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
                'scale-in': 'scale-in 0.5s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'shimmer': 'shimmer 2s infinite linear'
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, hsl(190 71% 20%) 0%, hsl(190 71% 35%) 100%)',
                'gradient-accent': 'linear-gradient(135deg, hsl(190 71% 35%) 0%, hsl(190 71% 46%) 100%)',
                'gradient-hero': 'linear-gradient(135deg, hsl(190 71% 12%) 0%, hsl(190 71% 20%) 50%, hsl(190 60% 25%) 100%)',
                'gradient-subtle': 'linear-gradient(180deg, hsl(190 20% 98%) 0%, hsl(190 30% 96%) 100%)',
                'gradient-card': 'linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(190 30% 98%) 100%)',
                'gradient-overlay': 'linear-gradient(180deg, rgba(12, 77, 91, 0.95) 0%, rgba(12, 77, 91, 0.8) 100%)',
                'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem',
            },
            fontSize: {
                '2xs': ['0.65rem', { lineHeight: '1rem' }],
                'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
                'display-sm': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
