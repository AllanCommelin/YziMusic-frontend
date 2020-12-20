module.exports = {
    theme: {
        borderWidth: {
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '7': '7px',
        },
        extend: {
            inset: {
                '-20': '-5rem',
                '-22': '-5.5rem',
                '-24': '-6rem',
                '-25': '-6.5rem',
            },
            colors: {
                'main': '#7149F9',
                'ym-grey': '#e3e3e9',
                'ym-blue': '#1cb4ff',
                'ym-light-blue': '#A1C6EA',
                'ym-black': '#0C0C0C',
                'ym-light-black': '#232323',
            },
            spacing: {
                '19': '4.77rem',
                '28': '7.5rem',
                '52': '13rem',
                '72': '18rem',
                '96': '24rem',
                '144': '36rem',
            },
        }
    },
    variants: {
        extend: {
            borderColor: ['active']
        },
        borderStyle: ['responsive'],
    },
    plugins: [require("@tailwindcss/custom-forms")]
}