import { defineConfig } from '@playwright/test';
import { loadEnv } from 'vite';

const env = loadEnv('test', process.cwd(), '');

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: Number(env.PREVIEW_PORT) || 4173
	},
	use: { screenshot: 'on' },
	testDir: 'e2e'
});
