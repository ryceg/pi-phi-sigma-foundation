import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	define: {
	  // Eliminate in-source test code
	  'import.meta.vitest': 'undefined'
	},
	test: {
	  // jest like globals
	  globals: true,
	  environment: 'jsdom',
	  // in-source testing
	  includeSource: ['src/**/*.{js,ts,svelte}'],
	  // Add @testing-library/jest-dom matchers
	  setupFiles: ['./setupTest.js'],
	  // Exclude files in c8
	  coverage: {
		exclude: ['setupTest.js']
	  },
	  
	  deps: {
		// Put Svelte component here, e.g., inline: [/svelte-multiselect/, /msw/]
		inline: []
	  },
	  // Exclude playwright tests folder
	  exclude: ['tests']
	},
	server: {
	  fs: {
		// Allow serving files from one level up to the project root
		allow: ['..'],
	  },
	},
};

export default config;
