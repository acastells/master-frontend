export function getUsers(orgName: string, perPage: number, page: number) {
	return fetch(
		`https://api.github.com/orgs/${orgName}/members?per_page=${perPage}&page=${page}`
	);
}

export function getUsersLocal() {
	return fetch("./mockup.json"); // to return a local mockup json of lemoncode users
}
