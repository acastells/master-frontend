import { routes } from "@/core/router";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../github-members/github-members.vm";

interface Props {
	member: MemberEntity;
}

export const GithubMemberDetailsComponent = (props: Props) => {
	const { member } = props;

	return (
		<>
			{member ? (
				<>
					<h3 style={{ textAlign: "center" }}>{member.id}</h3>
					<Avatar src={member.avatar_url} sx={{ width: 128, height: 128, mb: 3 }} />
					<Link to={routes.github.list}>Back to list page</Link>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</>
	);
};
