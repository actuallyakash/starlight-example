import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Wordpress Engineering Handbook',
			social: {
				github: 'https://github.com/Travelopia/wordpress-engineering-handbook',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Pages',
					autogenerate: { directory: 'pages' },
				},
			],
		}),
	],
});
