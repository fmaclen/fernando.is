import type { Project } from '$lib/data/projects.svelte.js';

let currentProject = $state<Project | null>(null);
let currentIndex = $state(0);

export const gallery = {
	get project() {
		return currentProject;
	},
	get index() {
		return currentIndex;
	},
	get images() {
		return currentProject?.images ?? [];
	},
	open(project: Project, index: number) {
		currentProject = project;
		currentIndex = index;
	},
	close() {
		currentProject = null;
		currentIndex = 0;
	},
	previous() {
		if (!currentProject?.images) return;
		currentIndex = currentIndex === 0 ? currentProject.images.length - 1 : currentIndex - 1;
	},
	next() {
		if (!currentProject?.images) return;
		currentIndex = currentIndex === currentProject.images.length - 1 ? 0 : currentIndex + 1;
	}
};
