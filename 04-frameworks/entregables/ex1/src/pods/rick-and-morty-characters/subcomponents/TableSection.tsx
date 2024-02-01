import { routes } from "@/core/router";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const TableSection = ({ characters }) => {
	return (
		<>
			<Box className="character-list-table">
				<span className="list-header">Avatar</span>
				<span className="list-header">Id</span>
				<span className="list-header">Name</span>
				<span className="list-header">Status</span>
				<span className="list-header">Species</span>
				<span className="list-header">Type</span>
				<span className="list-header">Gender</span>
				{characters.map((character) => (
					<React.Fragment key={character.id}>
						<img src={character.image} />
						<span>{character.id}</span>
						<Link to={routes.rickandmorty.detail(character.id)}>{character.name}</Link>
						<span>{character.status}</span>
						<span>{character.species}</span>
						<span>{character.type}</span>
						<span>{character.gender}</span>
					</React.Fragment>
				))}
			</Box>
		</>
	);
};