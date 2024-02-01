import { ToolbarLayout } from "@/layout/ToolbarLayout";
import { GithubMembersContainer } from "@/pods/github-members";
import React from "react";

export const ListGHScene: React.FC = () => {
	return (
		<ToolbarLayout>
			<GithubMembersContainer />
		</ToolbarLayout>
	);
};
