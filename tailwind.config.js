/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			maxWidth: {
				"min-content": "min-content",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
