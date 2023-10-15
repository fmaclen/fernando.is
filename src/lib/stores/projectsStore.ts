import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const GITHUB_API_BASE_URL = 'https://api.github.com/repos';
const LOCAL_STORAGE_PROJECTS_KEY = 'projects';
const LOCAL_STORAGE_LAST_CHECK_KEY = 'lastCheck';
const ONE_HOUR_IN_MS = 60 * 60 * 1000; // Number of milliseconds in an hour

export interface Project {
	title: string;
	description: string;
	url: string;
	repo?: string;
	updatedAt?: string;
	theme?: string;
	images?: string[];
}

let projects: Project[] = [
	{
		title: 'fernando.is',
		description: 'This very website',
		url: 'https://fernando.is',
		repo: 'fmaclen/fernando.is',
		theme: 'fernando-is'
	},
	{
		title: 'Canutin',
		description: 'A personal finance application for macOS, Windows & Linux',
		url: 'https://canutin.com',
		repo: 'fmaclen/canutin-desktop',
		theme: 'canutin',
		images: [
			'canutin-dashboard.png',
			'canutin-balance-sheet.png',
			'canutin-data.png',
			'canutin-trends.png',
			'canutin-transactions.png',
			'canutin-dashboard-dark.png'
		]
	},
	{
		title: 'svelte-currency-input',
		description: 'A form input that converts numbers to localized currency formats as you type',
		url: 'https://npmjs.com/package/@canutin/svelte-currency-input',
		repo: 'fmaclen/svelte-currency-input',
		theme: 'svelte-currency-input'
	},
	{
		title: 'Julia Sanfrancisco',
		description: 'A web-based detective game largely generated by AI',
		url: 'https://julia.strictoaster.com',
		repo: 'fmaclen/julia-sanfrancisco',
		theme: 'julia-sanfrancisco',
		images: [
			'julia-sanfrancisco-splash.png',
			'julia-sanfrancisco-montreal.png',
			'julia-sanfrancisco-street-merchant.png',
			'julia-sanfrancisco-messenger.png',
			'julia-sanfrancisco-rome.png',
			'julia-sanfrancisco-singapore.png',
			'julia-sanfrancisco-baghdad.png',
			'julia-sanfrancisco-paris.png',
			'julia-sanfrancisco-stevedore.png',
			'julia-sanfrancisco-house-detective.png',
			'julia-sanfrancisco-headquarters.png'
		]
	},
	{
		title: 'auto-garden',
		description: 'Moisture monitor and irrigation system for my plants',
		url: 'https://github.com/fmaclen/auto-garden',
		repo: 'fmaclen/auto-garden',
		theme: 'auto-garden'
	},
	{
		title: 'Promptspree',
		description: 'Chat-based AI article generator and editor',
		url: 'https://promptspree.com',
		repo: 'fmaclen/promptspree',
		theme: 'promptspree',
		images: [
			'promptspree-homepage.png',
			'promptspree-article.png',
			'promptspree-footer.png',
			'promptspree-chat.png',
			'promptspree-completion.png'
		]
	},
	{
		title: 'rule-of-three',
		description: 'A tiny direct proportion calculator for macOS',
		url: 'https://github.com/fmaclen/rule-of-three',
		repo: 'fmaclen/rule-of-three',
		theme: 'rule-of-three',
		images: ['rule-of-three-default.png']
	},
	{
		title: 'Oak Hall',
		description: 'A historic family-run estate located in Northport, Maine',
		url: 'https://oakhallestate.org/',
		updatedAt: '2021-08-06T00:00:00Z',
		theme: 'oak-hall',
		images: [
			'oak-hall-cover.png',
			'oak-hall-library.png',
			'oak-hall-gardens.png',
			'oak-hall-footer.png'
		]
	}
];

// Being nice to the Github API by caching the results for an hour
const localStorageLastChecked = browser
	? window.localStorage.getItem(LOCAL_STORAGE_LAST_CHECK_KEY)
	: null;

const shouldGetLastProjectUpdate =
	!localStorageLastChecked ||
	new Date().getTime() - new Date(localStorageLastChecked).getTime() > ONE_HOUR_IN_MS;

const localStorageProjects = browser ? window.localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY) : [];
const projectsStore = writable<Project[]>([]);

async function getLastProjectUpdate(project: Project) {
	try {
		const response = await fetch(`${GITHUB_API_BASE_URL}/${project.repo}`);
		if (!response.ok) return project;

		const data = await response.json();
		return {
			...project,
			updatedAt: data.pushed_at ? data.pushed_at : undefined
		};
	} catch (_) {
		return project;
	}
}

async function fetchAllProjectsUpdates(projects: Project[]) {
	const updatedProjects = await Promise.all(projects.map(getLastProjectUpdate));
	projectsStore.set(updatedProjects);
}

if (shouldGetLastProjectUpdate) {
	fetchAllProjectsUpdates(projects);
} else {
	if (typeof localStorageProjects === 'string') {
		projects = JSON.parse(localStorageProjects) as Project[];
		projectsStore.set(projects);
	}
}

projectsStore.subscribe((projects) => {
	// Sort the projects by last updated
	projects.sort((a, b) => {
		if (!a.updatedAt) return 1;
		if (!b.updatedAt) return -1;
		return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
	});

	// Cache the projects with the `updatedAt` value to local storage
	if (!browser) return;
	if (shouldGetLastProjectUpdate) {
		window.localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
		window.localStorage.setItem(LOCAL_STORAGE_LAST_CHECK_KEY, new Date().toISOString());
	}
});

export default projectsStore;
