/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0d131f', // Dark blue background
                primary: '#007BFF',    // Bright blue accents
                card: '#161d2b',       // Slightly lighter dark blue for cards
                border: '#2e3b52'      // Lighter blue/gray for borders
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'], // Professional sans-serif
            }
        },
    },
    plugins: [],
}
