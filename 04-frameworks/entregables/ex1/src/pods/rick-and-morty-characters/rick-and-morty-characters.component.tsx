import { routes } from "@/core/router";
import { Button, Container, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
	CharacterEntity,
	CharacterFilterOptionsEntity,
	PaginationInfo,
} from "./rick-and-morty-characters.vm";
import { FilterSection } from "./subcomponents/FilterSection";
import { PaginationInfoComponent } from "./subcomponents/PaginationInfoComponent";
import { TableSection } from "./subcomponents/TableSection";

interface Props {
	characters: CharacterEntity[];
	characterFilterOptions: CharacterFilterOptionsEntity;
	setCharacterFilterOptions: React.Dispatch<React.SetStateAction<CharacterFilterOptionsEntity>>;
	paginationInfo: PaginationInfo;
}

export const RickAndMortyCharactersComponent = (props: Props) => {
	const { characters, characterFilterOptions, setCharacterFilterOptions, paginationInfo } = props;

	const navigate = useNavigate();

	const handleLogout = () => {
		navigate(routes.login);
	};

	return (
		<Container maxWidth="lg">
			<Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }}>
				<Button onClick={handleLogout}>Logout</Button>
			</Stack>

			<h2
				style={{
					textAlign: "center",
					backgroundColor: "#0aafc8",
					padding: 8,
					borderRadius: 8,
				}}>
				Rick and Morty characters
			</h2>

			<Grid container spacing={8}>
				<Grid item xs={4}>
					<FilterSection
						characterFilterOptions={characterFilterOptions}
						setCharacterFilterOptions={setCharacterFilterOptions}
					/>
				</Grid>

				<Grid item xs={8}>
					<TableSection characters={characters} />
					<PaginationInfoComponent
						characterFilterOptions={characterFilterOptions}
						setCharacterFilterOptions={setCharacterFilterOptions}
						paginationInfo={paginationInfo}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};
