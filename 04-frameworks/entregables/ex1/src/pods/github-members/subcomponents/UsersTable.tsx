import { routes } from "@/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
