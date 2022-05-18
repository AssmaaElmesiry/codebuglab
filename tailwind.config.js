module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blue': '#4EB8F4'
            },
            backgroundImage: {
                'background': "url('./src/assets/background.png')",
                'Packages': "url('./src/assets/section.png')"
            },
            zIndex: {
                '9': '9',
                '99': '99',
                '999': '999',
            }
        },
    },
    plugins: [],
}