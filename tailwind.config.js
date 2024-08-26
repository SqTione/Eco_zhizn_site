/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            white: '#ffffff',
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
            '7xl': '6rem',          // 96px
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

