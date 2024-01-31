import { FilterContext } from "@/core/providers/filter";
import React from "react";
import { getUsers } from "./github-members.api";
import { GithubMembersComponent } from "./github-members.component";
import { MemberEntity } from "./github-members.vm";

export const GithubMembersContainer = () => {
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

	return <GithubMembersComponent members={members} filterMembers={filterMembers} />;
};
