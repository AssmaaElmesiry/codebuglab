module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blue': '#4EB8F4',
                'colorfrom': 'rgba(78, 184, 244, 0) 0%',
                'colorto': 'rgba(78, 184, 244, 1) 75%',
                'gray': '#F2F2F2',
                'Pcolor': '#A3A3A3',
            },
            backgroundImage: {
                'background': "url('./src/assets/background.png')",
                'Packages': "url('./src/assets/section.png')",
            },
            backgroundColor: {
                'bgPackages': 'linear-gradient(to bottom, rgba(78, 184, 244, 0) 0%, rgba(78, 184, 244, 0.8) 75%)',
            },
            zIndex: {
                '9': '9',
                '99': '99',
                '999': '999',
            },
            height: {
                'HSection': '42.438rem',
                'HSectionSm': '60.438rem',
            },
        },
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    },
    plugins: [],
}