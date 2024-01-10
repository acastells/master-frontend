import React, { useEffect } from "react";
import { getCharacterDetail } from "@/api";
import { Avatar, Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { routes } from "@/router";
import { Link, useParams } from "react-router-dom";
import { CharacterEntity } from "@/vm";

export const DetailRMScene: React.FC = () => {
	const { id } = useParams();

	const [character, setCharacter] = React.useState<CharacterEntity>();

	useEffect(() => {
		getCharacterDetail(Number(id))
			.then((response) => response.json())
			.then((data) => {
				setCharacter(data);
			});
	}, [id]);

	const CharacterDetails = ({ character }) => (
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
	);

	const CharacterDetailsPage = ({ character }) => (
		<Container maxWidth="lg">
			<CharacterDetails character={character} />
			<Link to={routes.rickandmorty.list}>Back to list page</Link>
		</Container>
	);

	const CenteredContent = ({ children }) => (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			<Paper sx={{ padding: 4 }}>{children}</Paper>
		</Box>
	);

	return (
		<CenteredContent>
			{character && <CharacterDetailsPage character={character} />}
		</CenteredContent>
	);
};
