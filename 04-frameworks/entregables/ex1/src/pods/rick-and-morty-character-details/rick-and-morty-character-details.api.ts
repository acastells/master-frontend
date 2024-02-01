export function getCharacterDetail(id: number) {
	return fetch(`https://rickandmortyapi.com/api/character/${id}`);
}
