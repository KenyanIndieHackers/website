/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#45c0ce',
					secondary: '#96c3e3',
					accent: '#6c91d8',
					neutral: '#2b2524',
					'base-100': '#f8fdfd',
					info: '#009bb6',
					success: '#0be66f',
					warning: '#f88000',
					error: '#ff7794'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
