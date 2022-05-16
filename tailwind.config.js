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
                'background': "url('./src/assets/background.png')"
            }
        },
    },
    plugins: [],
}