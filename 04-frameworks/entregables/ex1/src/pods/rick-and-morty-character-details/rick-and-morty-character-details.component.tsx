import { routes } from "@/core/router";
import { Avatar, Container, Grid, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CharacterEntity } from "../rick-and-morty-characters/rick-and-morty-characters.vm";

interface Props {
	character: CharacterEntity;
}

export const RickAndMortyCharacterDetailsComponent = (props: Props) => {
	const { character } = props;

	return (
		<Container maxWidth="lg">
			<Grid container>
				{character ? (
					<>
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
								<img
									src={character.image}
									width={300}
									height={300}
									alt={character.name}
								/>
							</Stack>
						</Grid>
					</>
				) : (
					<h3>Loading...</h3>
				)}
			</Grid>
			<Link to={routes.rickandmorty.list}>Back to list page</Link>
		</Container>
	);
};
