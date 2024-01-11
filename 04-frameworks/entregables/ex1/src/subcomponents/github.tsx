import { Link } from "react-router-dom";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { FilterContext } from "@/core/providers/filter";
import { routes } from "@/router";


export const UsersTable = ({ members }) => (
	<Box className="list-user-list-container">
		<span className="list-header">Avatar</span>
		<span className="list-header">Id</span>
		<span className="list-header">Name</span>
		{members.map((member) => (
			<React.Fragment key={member.id}>
				<img src={member.avatar_url} />
				<span>{member.id}</span>
				<Link to={routes.github.detail(member.login)}>{member.login}</Link>
			</React.Fragment>
		))}
	</Box>
);

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
					onChange={(event) => setPerPage(Number(event.target.value))}
					value={perPage}
					sx={{ mb: 3 }}
					fullWidth
				/>
				<TextField
					label="Per Page"
					variant="outlined"
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