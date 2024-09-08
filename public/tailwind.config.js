/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            white: {
                100: '#ffffff',
                200: 'rgba(247, 255, 225, 0.4)',
            },
            black: '#000000',
            green: {
                100: '#F7FFE1',
                200: '#C8DC90',
                500: '#A2D01E',
                600: '#82A816',
                1000: '#36440F'
            },
        },
        fontFamily: {
            lato: ['Lato', 'sans-serif'],
            nauryz: ['NauryzRedKeds', 'sans-serif'],
        },
        fontSize: {
            'xs': '0.875rem',       //14px
            'sm': '1rem',           // 16px
            'base': '1.125rem',     // 18px
            'xl': '1.25rem',        // 20px
            '2xl': '1.5rem',        // 24px
            '3xl': '2.25rem',       // 36px
            '4xl': '3rem',          // 48px
            '5xl': '4rem',          // 64px
            '6xl': '5rem',
            '7xl': '6rem',          // 96px
        },
        screens: {
            '3xl': {'max': '1920px'},
            '2xl': {'max': '1366px'},
            'xl': {'max': '1280px'},
            'lg': {'max': '1024px'},
            'md': {'max': '768px'},
            '4sm': {'max' : '700px'},
            '3sm': {'max': '560px'},
            '2sm': {'max': '450px'},
            'sm': {'max': '390px'},
        },
        extend: {
            lineHeight: {
                '18': '4rem',
                '20': '6rem'
            }
        },
    },
    plugins: [],
}

