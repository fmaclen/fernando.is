import type { Picture } from 'vite-imagetools';

const imageModules = import.meta.glob<{ default: Picture }>(
	'/src/lib/assets/projects/*.{png,jpg,jpeg,webp,avif}',
	{
		eager: true,
		query: {
			enhanced: true
		}
	}
);

export function getProjectImage(filename: string): Picture | undefined {
	const key = `/src/lib/assets/projects/${filename}`;
	return imageModules[key]?.default;
}
