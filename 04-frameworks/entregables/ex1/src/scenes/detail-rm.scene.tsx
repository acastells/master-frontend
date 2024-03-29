import { CenteredContent } from "@/layouts";
import { RickAndMortyCharacterDetailsContainer } from "@/pods/rick-and-morty-character-details";
import React from "react";

export const DetailRMScene: React.FC = () => {
	return (
		<CenteredContent>
			<RickAndMortyCharacterDetailsContainer />
		</CenteredContent>
	);
};
