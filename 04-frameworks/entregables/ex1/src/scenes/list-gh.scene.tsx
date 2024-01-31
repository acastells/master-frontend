
import { FilterContext } from "@/core/providers/filter";
import React from "react";

import { Button, Container, Stack } from "@mui/material";

import { routes } from "@/core/router";

import { MemberEntity } from "@/pods/vm";
import { useNavigate } from "react-router-dom";
import { getUsers } from "@/pods/github-members/api";
import { FilterForm, UsersTable } from "@/pods/github-members/github";

export const ListGHScene: React.FC = () => {
	const navigate = useNavigate();

	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const { orgName, perPage, page } = React.useContext(FilterContext);

	React.useEffect(() => {
		filterMembers();
	}, []);

	const filterMembers = () => {
		getUsers(orgName, perPage, page)
			.then((response) => (response.status === 200 ? response.json() : []))
			.then(setMembers)
			.catch((e) => {
				console.error(e);
				setMembers([]);
			});
	};

	const handleLogout = () => {
		navigate(routes.login);
	};

	return (
		<Container maxWidth="sm" sx={{pb:4}}>
			<Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
				<Button onClick={handleLogout}>Logout</Button>
			</Stack>

			<FilterForm filterMembers={filterMembers} />
			<UsersTable members={members} />
		</Container>
	);
};
