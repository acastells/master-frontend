import React from "react";
import { Link } from "react-router-dom";

import {
	Button,
	Box,
	TextField,
	Container,
	Stack,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { getCharacters } from "@/api";
import { useDebounce } from "@/customHooks/useDebounce";

import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { routes } from "@/router";

export interface CharacterEntity {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	origin: CharacterLocationEntity;
	location: CharacterLocationEntity;
	episode: string[];
	url: string;
	created: string;
}

export interface CharacterLocationEntity {
	id: number;
	name: string;
	type: string;
	dimension: string;
}

export interface CharacterFilterOptionsEntity {
	page: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
}

export const ListRMScene: React.FC = () => {
	const navigate = useNavigate();

	const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
	const [characterFilterOptions, setCharacterFilterOptions] =
		React.useState<CharacterFilterOptionsEntity>({
			page: 1,
			status: "all",
			gender: "all",
		});
	const debouncedFilterOptions = useDebounce<CharacterFilterOptionsEntity>(
		characterFilterOptions,
		300
	);

	const [paginationInfo, setPaginationInfo] = React.useState({
		prev: null,
		next: null,
		count: null,
		pages: null,
	});

	React.useEffect(() => {
		getCharacters(debouncedFilterOptions)
			.then((response) => response.json())
			.then((data) => {
				setCharacters(data.results);
				setPaginationInfo(data.info);
			});
	}, [debouncedFilterOptions]);

	const handleLogout = () => {
		navigate(routes.login);
	};

	const handlePrevPage = () => {
		setCharacterFilterOptions({
			...characterFilterOptions,
			page: characterFilterOptions.page - 1,
		});
	};

	const handleNextPage = () => {
		setCharacterFilterOptions({
			...characterFilterOptions,
			page: characterFilterOptions.page + 1,
		});
		console.log();
	};

	const PaginationInfoComponent = () => {
		return (
			<Stack direction="row" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
				<Button
					disabled={paginationInfo.prev === null}
					onClick={handlePrevPage}
					startIcon={<ArrowBackIosNewOutlined />}></Button>
				<p>
					{characterFilterOptions.page}/{paginationInfo.pages} pages,{" "}
					{paginationInfo.count} characters
				</p>
				<Button
					disabled={paginationInfo.next === null}
					onClick={handleNextPage}
					startIcon={<ArrowForwardIosOutlined />}></Button>
			</Stack>
		);
	};

	function FilterSection() {
		return (
			<>
				<TextField
					label="Character Name"
					variant="outlined"
					sx={{ pb: 1 }}
					fullWidth
					value={characterFilterOptions.name}
					onChange={(e) =>
						setCharacterFilterOptions({
							...characterFilterOptions,
							name: e.target.value,
						})
					}
				/>
				<TextField
					label="Species"
					variant="outlined"
					sx={{ pb: 1 }}
					fullWidth
					value={characterFilterOptions.species}
					onChange={(e) =>
						setCharacterFilterOptions({
							...characterFilterOptions,
							species: e.target.value,
						})
					}
				/>
				<TextField
					label="Type"
					variant="outlined"
					sx={{ pb: 2 }}
					fullWidth
					value={characterFilterOptions.type}
					onChange={(e) =>
						setCharacterFilterOptions({
							...characterFilterOptions,
							type: e.target.value,
						})
					}
				/>

				<Grid container>
					<Grid item xs={6}>
						<FormLabel>Status</FormLabel>
						<RadioGroup
							value={characterFilterOptions.status}
							onChange={(e) =>
								setCharacterFilterOptions({
									...characterFilterOptions,
									status: e.target.value,
								})
							}>
							<FormControlLabel value="all" control={<Radio />} label="All" />
							<FormControlLabel value="alive" control={<Radio />} label="Alive" />
							<FormControlLabel value="dead" control={<Radio />} label="Dead" />
							<FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
						</RadioGroup>
					</Grid>

					<Grid item xs={6}>
						<FormLabel>Gender</FormLabel>
						<RadioGroup
							value={characterFilterOptions.gender}
							onChange={(e) =>
								setCharacterFilterOptions({
									...characterFilterOptions,
									gender: e.target.value,
								})
							}>
							<FormControlLabel value="all" control={<Radio />} label="All" />
							<FormControlLabel value="female" control={<Radio />} label="Female" />
							<FormControlLabel value="male" control={<Radio />} label="Male" />
							<FormControlLabel
								value="genderless"
								control={<Radio />}
								label="Genderless"
							/>
							<FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
						</RadioGroup>
					</Grid>
				</Grid>
			</>
		);
	}

	function TableSection() {
		return (
			<>
				<PaginationInfoComponent />

				<Box className="character-list-table" sx={{ mt: 2 }}>
					<span className="list-header">Avatar</span>
					<span className="list-header">Id</span>
					<span className="list-header">Name</span>
					<span className="list-header">Status</span>
					<span className="list-header">Species</span>
					<span className="list-header">Type</span>
					<span className="list-header">Gender</span>
					{characters.map((character) => (
						<React.Fragment key={character.id}>
							<img src={character.image} />
							<span>{character.id}</span>
							<Link to={routes.rickandmorty.detail(character.id)}>
								{character.name}
							</Link>
							<span>{character.status}</span>
							<span>{character.species}</span>
							<span>{character.type}</span>
							<span>{character.gender}</span>
						</React.Fragment>
					))}
				</Box>

				<PaginationInfoComponent />
			</>
		);
	}

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
					<FilterSection />
				</Grid>

				<Grid item xs={8}>
					<TableSection />
				</Grid>
			</Grid>
		</Container>
	);
};
