import { CenteredContent } from "@/layouts";
import { GithubMembersDetailContainer } from "@/pods/github-member-details";
import React from "react";

export const DetailGHScene: React.FC = () => {
	return (
		<CenteredContent>
			<GithubMembersDetailContainer />
		</CenteredContent>
	);
};
