import { CharacterFilterOptionsEntity } from "./pages/rickymorty/list";

export function getUsers(orgName: string, perPage: number, page: number) {
	return fetch(`https://api.github.com/orgs/${orgName}/members?per_page=${perPage}&page=${page}`);
}

// Returns a local mockup json of lemoncode users
export function getUsersLocal() {
	return fetch("./mockup.json");
}

export function getCharacters(params: CharacterFilterOptionsEntity) {
	let urlFilter = ""
	for (const [key, value] of Object.entries(params)) {
		if (key === "status" && value === "all"){

		} else if (key === "gender" && value === "all"){

		} else {
			urlFilter = `${urlFilter}&${key}=${value}`
		}
		
	}
	return fetch(`https://rickandmortyapi.com/api/character?${urlFilter}`);
}

export function getCharacterDetail(id: number) {
	return fetch(`https://rickandmortyapi.com/api/characte/${id}`);
}
