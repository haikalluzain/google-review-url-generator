import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                sans: ['ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji']
            },
        },
        colors: {
            ...colors,
            'hd-primary': {
                original: "#0F132F",
                '50': '#DDE0F4',
                '100': '#BBC2E9',
                '200': '#99A3DF',
                '300': '#7785D4',
                '400': '#5466C9',
                '500': '#3A4DB7',
                '600': '#2F3E95',
                '700': '#243073',
                '800': '#192251',
                '900': '#0F132F',
                '950': '#0D122A'
            },
            'hd-secondary': {
                original: "#7DC2CA",
                '50': '#F2F9FA',
                '100': '#E5F3F4',
                '200': '#CBE7EA',
                '300': '#B1DADF',
                '400': '#97CED4',
                '500': '#7DC2CA',
                '600': '#4EACB7',
                '700': '#39838B',
                '800': '#26575D',
                '900': '#132C2E',
                '950': '#091617'
            },
            'hd-neutral': {
                original: "#80A0B3",
                '50': '#F2F5F7',
                '100': '#E6ECF0',
                '200': '#CCD9E0',
                '300': '#B3C6D1',
                '400': '#99B3C2',
                '500': '#80A0B3',
                '600': '#5C8399',
                '700': '#456273',
                '800': '#2E414D',
                '900': '#172126',
                '950': '#0B1013'
            },
            'hd-accent-one': {
                original: "#CE9592",
                '50': '#FAF4F4',
                '100': '#F5EAE9',
                '200': '#EBD5D3',
                '300': '#E2BFBE',
                '400': '#D8AAA8',
                '500': '#CE9592',
                '600': '#B86661',
                '700': '#924541',
                '800': '#612E2C',
                '900': '#311716',
                '950': '#180C0B'
            },
            'hd-accent-two': {
                original: "#D0B3AF",
                '50': '#FAF7F7',
                '100': '#F6F0EF',
                '200': '#ECE0DF',
                '300': '#E3D1CF',
                '400': '#D9C2BF',
                '500': '#D0B3AF',
                '600': '#B4857E',
                '700': '#915C55',
                '800': '#603D39',
                '900': '#301F1C',
                '950': '#180F0E'
            },
            'hd-base': {
                original: "#FAFAF5",
                '50': '#FDFDFB',
                '100': '#FAFAF5',
                '200': '#E8E8D5',
                '300': '#D6D6B5',
                '400': '#C5C595',
                '500': '#B3B375',
                '600': '#A0A058',
                '700': '#808046',
                '800': '#606035',
                '900': '#404023',
                '950': '#202012'
            },
        }
    },

    plugins: [forms],
};
