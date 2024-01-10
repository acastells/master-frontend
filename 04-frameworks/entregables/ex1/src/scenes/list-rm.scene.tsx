import React from "react";
import { Link } from "react-router-dom";

import {
	Box,
	Button,
	Container,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	Stack,
	TextField,
} from "@mui/material";

import { getCharacters } from "@/api";
import { useDebounce } from "@/customHooks/useDebounce";
import { useNavigate } from "react-router-dom";

import { routes } from "@/router";
import { CharacterEntity, CharacterFilterOptionsEntity } from "@/vm";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";

const FilterSection = ({ characterFilterOptions, setCharacterFilterOptions }) => {
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
};

const TableSection = ({ characters }) => {
	return (
		<>
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
						<Link to={routes.rickandmorty.detail(character.id)}>{character.name}</Link>
						<span>{character.status}</span>
						<span>{character.species}</span>
						<span>{character.type}</span>
						<span>{character.gender}</span>
					</React.Fragment>
				))}
			</Box>
		</>
	);
};

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
					<PaginationInfoComponent />
					<TableSection characters={characters} />
					<PaginationInfoComponent />
				</Grid>
			</Grid>
		</Container>
	);
};
