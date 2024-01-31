import { CharacterFilterOptionsEntity } from "../vm";

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