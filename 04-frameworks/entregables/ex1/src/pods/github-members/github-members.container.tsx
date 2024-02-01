import { FilterContext } from "@/core/providers/filter";
import React from "react";
import { GithubMembersComponent } from "./github-members.component";
import { getMembers } from "./github-members.repository";
import { MemberEntity } from "./github-members.vm";

export const GithubMembersContainer = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const { orgName, perPage, page } = React.useContext(FilterContext);

	React.useEffect(() => {
		filterMembers();
	}, []);

	const filterMembers = () => {
		getMembers(orgName, perPage, page)
			.then(setMembers)
			.catch((e) => {
				console.error(e);
				setMembers([]);
			});
	};

	return <GithubMembersComponent members={members} filterMembers={filterMembers} />;
};
