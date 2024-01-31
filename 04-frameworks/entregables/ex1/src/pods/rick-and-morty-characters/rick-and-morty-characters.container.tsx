import { useDebounce } from "@/core/customHooks/useDebounce";
import React from "react";
import { getCharacters } from "./rick-and-morty-characters.api";
import { RickAndMortyCharactersComponent } from "./rick-and-morty-characters.component";
import { CharacterEntity, CharacterFilterOptionsEntity } from "./rick-and-morty-characters.vm";

export const RickAndMortyCharactersContainer = () => {
	const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
	const [characterFilterOptions, setCharacterFilterOptions] =
		React.useState<CharacterFilterOptionsEntity>({
			page: 1,
			name: "",
			status: "all",
			species: "",
			type: "",
			gender: "all",
		});
	const debouncedFilterOptions = useDebounce<CharacterFilterOptionsEntity>(
		characterFilterOptions,
		1000
	);

	const emptyPaginationInfo = {
		prev: null,
		next: null,
		count: null,
		pages: null,
	};
	const [paginationInfo, setPaginationInfo] = React.useState(emptyPaginationInfo);

	React.useEffect(() => {
		getCharacters(debouncedFilterOptions)
			.then((response) => response.json())
			.then((json) => {
				if (json.error) {
					console.error(json.error);
					setCharacters([]);
					setPaginationInfo(emptyPaginationInfo);
				} else {
					setCharacters(json.results);
					setPaginationInfo(json.info);
				}
			})
			.catch((e) => {
				console.error(e);
				setCharacters([]);
				setPaginationInfo(emptyPaginationInfo);
			});
	}, [debouncedFilterOptions]);

	return (
		<RickAndMortyCharactersComponent
			characters={characters}
			characterFilterOptions={characterFilterOptions}
			setCharacterFilterOptions={setCharacterFilterOptions}
			paginationInfo={paginationInfo}
		/>
	);
};
