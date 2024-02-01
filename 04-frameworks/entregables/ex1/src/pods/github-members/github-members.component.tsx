import { FilterContext } from "@/core/providers/filter";
import { Grid } from "@mui/material";
import React from "react";
import { MemberEntity } from "./github-members.vm";
import { FilterForm, UsersTable } from "./subcomponents";

interface Props {
	members: MemberEntity[];
	filterMembers: () => void;
}

export const GithubMembersComponent = (props: Props) => {
	const { members, filterMembers } = props;
	const { orgName } = React.useContext(FilterContext);

	return (
		<>
			<h2
				style={{
					textAlign: "center",
					backgroundColor: "#0aafc8",
					padding: 8,
					borderRadius: 8,
				}}>
				{orgName} members
			</h2>
			<Grid container spacing={8}>
				<Grid item xs={4}>
					<FilterForm filterMembers={filterMembers} />
				</Grid>
				<Grid item xs={8}>
					<UsersTable members={members} />
				</Grid>
			</Grid>
		</>
	);
};
