import React from "react";

import { Button, Container, Grid, Stack } from "@mui/material";

import { getCharacters } from "@/api";
import { useDebounce } from "@/customHooks/useDebounce";
import { useNavigate } from "react-router-dom";

import { routes } from "@/router";
import { FilterSection, PaginationInfoComponent, TableSection } from "@/subcomponents";
import { CharacterEntity, CharacterFilterOptionsEntity } from "@/vm";

export const ListRMScene: React.FC = () => {
	const navigate = useNavigate();

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
