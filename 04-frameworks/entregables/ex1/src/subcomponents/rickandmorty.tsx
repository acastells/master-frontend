import React from "react";
import { Link } from "react-router-dom";

import {
	Box,
	Button,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	Stack,
	TextField,
} from "@mui/material";

import { routes } from "@/router";
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";

export const FilterSection = ({ characterFilterOptions, setCharacterFilterOptions }) => {
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

export const TableSection = ({ characters }) => {
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

export const PaginationInfoComponent = ({
	characterFilterOptions,
	setCharacterFilterOptions,
	paginationInfo,
}) => {
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

	return (
		<Stack direction="row" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
			<Button
				disabled={paginationInfo.prev === null}
				onClick={handlePrevPage}
				startIcon={<ArrowBackIosNewOutlined />}></Button>
			<p>
				{characterFilterOptions.page}/{paginationInfo.pages} pages, {paginationInfo.count}{" "}
				characters
			</p>
			<Button
				disabled={paginationInfo.next === null}
				onClick={handleNextPage}
				startIcon={<ArrowForwardIosOutlined />}></Button>
		</Stack>
	);
};
