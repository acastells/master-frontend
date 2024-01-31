import { CenteredContent } from "@/layout";
import { routes } from "@/core/router";
import { CharacterEntity } from "@/pods/vm";
import { Avatar, Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail } from "@/pods/rick-and-morty-character-details/api";

export const DetailRMScene: React.FC = () => {
	const { id } = useParams();

	const [character, setCharacter] = React.useState<CharacterEntity>();

	useEffect(() => {
		getCharacterDetail(Number(id))
			.then((response) => response.json())
			.then(setCharacter);
	}, [id]);

	const CharacterDetails = ({ character }) => (
		<Container maxWidth="lg">
			<Grid container>
				<Grid item xs={6}>
					<Stack direction="row" gap={2} alignItems="center">
						<Avatar src={character.image} sx={{ width: 56, height: 56 }} />
						<h3>{character.name}</h3>
					</Stack>
					<Stack gap={1}>
						<span>Status: {character.status}</span>
						<span>Species: {character.species}</span>
						<span>Gender: {character.gender}</span>
						{character.type && <span>Type: {character.type}</span>}
						<span>Origin: {character.origin.name}</span>
						<span>Location: {character.location.name}</span>
						<span>Appeared in {character.episode.length} episodes</span>
					</Stack>
				</Grid>

				<Grid item xs={6}>
					<Stack justifyContent="center" alignItems="center">
						<img src={character.image} width={300} height={300} alt={character.name} />
					</Stack>
				</Grid>
			</Grid>
			<Link to={routes.rickandmorty.list}>Back to list page</Link>
		</Container>
	);

	return (
		<CenteredContent>
			{character ? <CharacterDetails character={character} /> : <h3>Loading...</h3>}
		</CenteredContent>
	);
};
