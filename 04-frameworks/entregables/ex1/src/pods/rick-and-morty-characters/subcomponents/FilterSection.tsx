import { TextField, Grid, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from "react";

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
