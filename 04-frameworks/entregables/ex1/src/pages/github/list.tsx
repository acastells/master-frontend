import React from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../api";
import { FilterContext } from "../../contexts/providers/filter";

import { Button, Box, TextField, Container, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { routes } from "../../app";

interface MemberEntity {
	id: string;
	login: string;
	avatar_url: string;
}

export const ListPage: React.FC = () => {
	const navigate = useNavigate();

	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const { orgName, setOrgName } = React.useContext(FilterContext);
	const { perPage, setPerPage } = React.useContext(FilterContext);
	const { page, setPage } = React.useContext(FilterContext);

	React.useEffect(() => {
		handleFilter();
	}, []);

	const handleButtonClick = (event) => {
		event.preventDefault();
		handleFilter();
	};

	const handleFilter = () => {
		getUsers(orgName, perPage, page)
			.then((response) => (response.status === 200 ? response.json() : []))
			.then((json) => setMembers(json))
			.catch((e) => {
				console.error(e);
				setMembers([]);
			});
	};

	const handleLogout = () => {
		navigate(routes.login);
	};

	return (
		<Container maxWidth="sm">
			<Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
				<Button onClick={handleLogout}>Logout</Button>
			</Stack>
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

			<Box className="list-user-list-container">
				<span className="list-header">Avatar</span>
				<span className="list-header">Id</span>
				<span className="list-header">Name</span>
				{members.map((member) => (
					<React.Fragment key={member.id}>
						<img src={member.avatar_url} />
						<span>{member.id}</span>
						<Link to={`/detail/${member.login}`}>{member.login}</Link>
					</React.Fragment>
				))}
			</Box>
		</Container>
	);
};
