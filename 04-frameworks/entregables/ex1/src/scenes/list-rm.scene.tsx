import React from "react";
import { ToolbarLayout } from "@/layout/ToolbarLayout";
import { RickAndMortyCharactersContainer } from "@/pods/rick-and-morty-characters";

export const ListRMScene: React.FC = () => {
	return (
		<ToolbarLayout>
			<RickAndMortyCharactersContainer />
		</ToolbarLayout>
	);
};
