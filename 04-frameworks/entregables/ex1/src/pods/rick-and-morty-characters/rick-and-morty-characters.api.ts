import { CharacterFilterOptionsEntity } from "./rick-and-morty-characters.vm";

export function getCharacters(params: CharacterFilterOptionsEntity) {
	const urlParams = new URLSearchParams();

	for (const [key, value] of Object.entries(params)) {
		if ((key === "status" && value === "all") || (key === "gender" && value === "all")) {
			continue;
		}
		urlParams.append(key, value);
	}

	const url = `https://rickandmortyapi.com/api/character?${urlParams.toString()}`;
	return fetch(url);
}
