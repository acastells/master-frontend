import { FilterContext } from "@/core/providers/filter";
import { Button, TextField } from "@mui/material";
import React from "react";

export const FilterForm = ({ filterMembers }) => {
	const { orgName, setOrgName } = React.useContext(FilterContext);
	const { perPage, setPerPage } = React.useContext(FilterContext);
	const { page, setPage } = React.useContext(FilterContext);

	const handleButtonClick = (event) => {
		event.preventDefault();
		filterMembers();
	};

	return (
		<>
			<h2>{orgName} users</h2>
			<form onSubmit={handleButtonClick}>
				<TextField
					label="Org Name"
					variant="outlined"
					onChange={(event) => setOrgName(event.target.value)}
					value={orgName}
					sx={{ mb: 3 }}
					fullWidth
				/>
				<TextField
					label="Per Page"
					variant="outlined"
					type="number"
					onChange={(event) => setPerPage(Number(event.target.value))}
					value={perPage}
					sx={{ mb: 3 }}
					fullWidth
				/>
				<TextField
					label="Page"
					variant="outlined"
					type="number"
					onChange={(event) => setPage(Number(event.target.value))}
					value={page}
					sx={{ mb: 3 }}
					fullWidth
				/>
				<Button variant="contained" type="submit" fullWidth sx={{ mb: 3 }}>
					Filtrar
				</Button>
			</form>
		</>
	);
};
