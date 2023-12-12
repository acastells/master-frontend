export function getUsers(orgName: string, perPage: number, page: number) {
	return fetch(`https://api.github.com/orgs/${orgName}/members?per_page=${perPage}&page=${page}`);
}

// Returns a local mockup json of lemoncode users
export function getUsersLocal() {
	return fetch("./mockup.json");
}

export function getCharacters() {
	fetch("https://rickandmortyapi.com/api/character");
}

export function getCharacterDetail(id: number) {
	fetch(`https://rickandmortyapi.com/api/characte/${id}`);
}
