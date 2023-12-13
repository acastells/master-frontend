import React from "react";
import { Link } from "react-router-dom";

import { Button, Box, TextField, Container, Stack, FormLabel, RadioGroup, FormControl, FormControlLabel, Radio } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { getCharacters } from "../../api";
import { useDebounce } from "../../customHooks/useDebounce";

interface CharacterEntity {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	origin: object;
	location: object;
	episode: string[];
	url: string;
	created: string;
}

export interface CharacterFilterOptionsEntity {
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
}

export const ListPage: React.FC = () => {
	const navigate = useNavigate();

	const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
	const [characterFilterOptions, setCharacterFilterOptions] =
		React.useState<CharacterFilterOptionsEntity>({
			status: "all",
			gender:"all"
		});
	const debouncedFilterOptions = useDebounce<CharacterFilterOptionsEntity>(characterFilterOptions, 500)


	React.useEffect(() => {
		getCharacters(debouncedFilterOptions)
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, [debouncedFilterOptions]);

	const handleLogout = () => {
		navigate("/");
	};

	return (
		<Container maxWidth="md">
			<Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
				<Button onClick={handleLogout}>Logout</Button>
			</Stack>
			<Stack>
			<h2>Rick and Morty characters</h2>
			<TextField label="Character Name" variant="outlined" value={characterFilterOptions.name} onChange={(e) => setCharacterFilterOptions({...characterFilterOptions, name: e.target.value})}/>
			<TextField label="Species" variant="outlined" value={characterFilterOptions.species} onChange={(e) => setCharacterFilterOptions({...characterFilterOptions, species: e.target.value})}/>
			<TextField label="Type" variant="outlined" value={characterFilterOptions.type} onChange={(e) => setCharacterFilterOptions({...characterFilterOptions, type: e.target.value})}/>

			<FormControl>
			<FormLabel>Status</FormLabel>
			<RadioGroup
				row
				value={characterFilterOptions.status}
				onChange={(e) => setCharacterFilterOptions({...characterFilterOptions, status: e.target.value})}
			>
				<FormControlLabel value="all" control={<Radio />} label="All" />
				<FormControlLabel value="alive" control={<Radio />} label="Alive" />
				<FormControlLabel value="dead" control={<Radio />} label="Dead" />
				<FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
			</RadioGroup>
			</FormControl>

			<FormControl>
			<FormLabel>Gender</FormLabel>
			<RadioGroup
				row
				value={characterFilterOptions.gender}
				onChange={(e) => setCharacterFilterOptions({...characterFilterOptions, gender: e.target.value})}
			>
				<FormControlLabel value="all" control={<Radio />} label="All" />
				<FormControlLabel value="female" control={<Radio />} label="Female" />
				<FormControlLabel value="male" control={<Radio />} label="Male" />
				<FormControlLabel value="genderless" control={<Radio />} label="Genderless" />
				<FormControlLabel value="unknown" control={<Radio />} label="Unknown" />
			</RadioGroup>
			</FormControl>
			</Stack>

			<Box className="character-list-table" sx={{mt:2}}>
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
						<Link to={`/rickandmorty/detail/${character.id}`}>{character.name}</Link>
						<span>{character.status}</span>
						<span>{character.species}</span>
						<span>{character.type}</span>
						<span>{character.gender}</span>
					</React.Fragment>
				))}
			</Box>
		</Container>
	);
};
