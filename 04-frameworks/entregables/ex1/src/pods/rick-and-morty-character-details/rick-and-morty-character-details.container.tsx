import React, { useEffect } from "react"
import { RickAndMortyCharacterDetailsComponent } from "./rick-and-morty-character-details.component"
import { useParams } from "react-router-dom";
import { CharacterEntity } from "../rick-and-morty-characters/rick-and-morty-characters.vm";
import { getCharacterDetail } from "./rick-and-morty-character-details.api";

export const RickAndMortyCharacterDetailsContainer = () => {
	const { id } = useParams();
	const [character, setCharacter] = React.useState<CharacterEntity>();

	useEffect(() => {
		getCharacterDetail(Number(id))
			.then((response) => response.json())
			.then(setCharacter);
	}, [id]);
	
	return <RickAndMortyCharacterDetailsComponent character={character} />
}