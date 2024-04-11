import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
        tailwind(),    
		starlight({
			title: 'CapyDocs',
			social: {
				github: 'https://github.com/GuilleCF/capydocs',
			},
			sidebar: [
				{
					label: 'Unidad 1: Método Científico',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'El Método Científico', link: '/method/method/' },
					],
				},
			],
		}),
	],
});