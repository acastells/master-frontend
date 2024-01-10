import { CharacterFilterOptionsEntity } from "./vm";

export function getUsers(orgName: string, perPage: number, page: number) {
	return fetch(`https://api.github.com/orgs/${orgName}/members?per_page=${perPage}&page=${page}`);
}

export function getUser(id: string) {
	return fetch(`https://api.github.com/users/${id}`);
}

export function getCharacters(params: CharacterFilterOptionsEntity) {
	let urlFilter = "";
	for (const [key, value] of Object.entries(params)) {
		if (key === "status" && value === "all") {
		} else if (key === "gender" && value === "all") {
		} else {
			urlFilter = `${urlFilter}&${key}=${value}`;
		}
	}
	return fetch(`https://rickandmortyapi.com/api/character?${urlFilter}`);
}

export function getCharacterDetail(id: number) {
	return fetch(`https://rickandmortyapi.com/api/character/${id}`);
}
