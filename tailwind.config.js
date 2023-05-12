/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{jsx,js}",
		"./index.html"
	],
	theme: {
		extend: {
			aspectRatio: {
				'4/3': '4/3'
			}
		},
	},
	plugins: [],
}

