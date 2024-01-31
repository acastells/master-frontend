import React from "react";
import { useParams } from "react-router-dom";
import { MemberEntity } from "../github-members/github-members.vm";
import { getMember } from "./github-member-details.api";
import { GithubMemberDetailsComponent } from "./github-member-details.component";

export const GithubMembersDetailContainer = () => {
	const { id } = useParams();
	const [member, setMember] = React.useState<MemberEntity>(null);

	React.useEffect(() => {
		getMember(id)
			.then((response) => response.json())
			.then(setMember);
	}, [id]);

	return <GithubMemberDetailsComponent member={member} />;
};
