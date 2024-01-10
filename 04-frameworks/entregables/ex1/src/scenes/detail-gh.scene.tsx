import React from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "@/router";
import { Avatar, Box, Paper } from "@mui/material";
import { getUser } from "@/api";
import { MemberEntity } from "@/vm";

export const DetailGHScene: React.FC = () => {
	const { id } = useParams();

	const [character, setCharacter] = React.useState<MemberEntity>(null);

	React.useEffect(() => {
		getUser(id)
			.then((response) => response.json())
			.then((data) => {
				setCharacter(data);
			});
	}, [id]);

	const CenteredContent = ({ children }) => (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}>
			<Paper sx={{ padding: 4 }}>{children}</Paper>
		</Box>
	);

	return (
		<CenteredContent>
			<h3 style={{ textAlign: "center" }}>{id}</h3>
			{character && (
				<Avatar src={character.avatar_url} sx={{ width: 128, height: 128, mb: 3 }} />
			)}
			<Link to={routes.github.list}>Back to list page</Link>
		</CenteredContent>
	);
};
