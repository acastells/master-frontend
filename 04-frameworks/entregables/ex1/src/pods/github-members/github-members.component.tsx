import { routes } from "@/core/router";
import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MemberEntity } from "./github-members.vm";
import { FilterForm, UsersTable } from "./subcomponents";

interface Props {
	members: MemberEntity[],
	filterMembers: () => void
}

export const GithubMembersComponent = (props: Props) => {
	const {members, filterMembers} = props
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate(routes.login);
	};

	return (
		<Container maxWidth="sm" sx={{ pb: 4 }}>
			<Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
				<Button onClick={handleLogout}>Logout</Button>
			</Stack>

			<FilterForm filterMembers={filterMembers} />
			<UsersTable members={members} />
		</Container>
	);
}