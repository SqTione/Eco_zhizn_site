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
        }
    },
    plugins: [],
}

