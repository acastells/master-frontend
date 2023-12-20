import { generatePath } from "react-router-dom";

export const switchRoutes = {
	login: "/",
	github: {
		list: "/github/",
		detail: "/github/:id",
	},
	rickandmorty: {
		list: "/rickandmorty/",
		detail: "/rickandmorty/:id",
	},
};

export const routes = {
	...switchRoutes,
	github: {
		...switchRoutes.github,
		detail: (id: string) => generatePath(switchRoutes.github.detail, { id }),
	},
	rickandmorty: {
		...switchRoutes.rickandmorty,
		detail: (id: number) => generatePath(switchRoutes.rickandmorty.detail, { id }),
	},
};
