/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Warna Identitas
				'coco-dark': '#0D3B2E', // Deep Forest Green (Dominan)
				'coco-gold': '#C5A059', // Muted Gold (Aksen Mewah)
				'coco-light': '#F4F4F4', // Light Grey (Background bersih)
				'coco-black': '#1A1A1A', // Teks utama (Bukan hitam pekat)
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Gunakan font tegas, install di head nanti
			}
		},
	},
	plugins: [],
}