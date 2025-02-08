/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Add Customs Colors Here
				accent: '#6c47ff',
				'bg-color': '#0c0129',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [],
	},
};
