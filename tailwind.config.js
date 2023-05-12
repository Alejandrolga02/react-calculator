/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./**/*.{jsx,js,html}",
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

