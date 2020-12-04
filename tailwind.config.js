module.exports = {
    theme: {
        extend: {
            colors: {
                'main': '#7149F9',
                'ym-grey': '#e3e3e9',
                'ym-blue': '#1cb4ff',
                'ym-light-blue': '#A1C6EA',
                'ym-black': '#0C0C0C',
                'ym-light-black': '#232323',
            },
            spacing: {
                '96': '24rem',
                '144': '36rem',
            },
        },
        borderColor: ['active']
    },
    variants: {
        borderStyle: ['responsive'],
    },
    plugins: [require("@tailwindcss/custom-forms")]
}