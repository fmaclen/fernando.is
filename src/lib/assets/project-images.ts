import type { Picture } from 'vite-imagetools';

const modules = import.meta.glob<Picture>('./projects/*.png', {
	eager: true,
	import: 'default',
	query: { enhanced: true }
});

const images: Record<string, Picture> = Object.fromEntries(
	Object.entries(modules).map(([path, picture]) => [path.split('/').pop(), picture])
);

export function getProjectImage(filename: string): Picture | undefined {
	return images[filename];
}
