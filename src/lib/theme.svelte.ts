import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createTheme() {
	let current = $state<Theme>(getInitialTheme());

	function getInitialTheme(): Theme {
		if (!browser) return 'dark';

		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored) return stored;

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function apply(theme: Theme) {
		if (!browser) return;
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
	}

	if (browser) {
		apply(current);
	}

	return {
		get current() {
			return current;
		},
		toggle() {
			current = current === 'dark' ? 'light' : 'dark';
			apply(current);
		}
	};
}

export const theme = createTheme();
