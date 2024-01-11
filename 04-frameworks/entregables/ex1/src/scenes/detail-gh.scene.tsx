import { getUser } from "@/api";
import { CenteredContent } from "@/layout";
import { routes } from "@/router";
import { MemberEntity } from "@/vm";
import { Avatar } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailGHScene: React.FC = () => {
	const { id } = useParams();

	const [user, setUser] = React.useState<MemberEntity>(null);

	React.useEffect(() => {
		getUser(id)
			.then((response) => response.json())
			.then(setUser);
	}, [id]);

	return (
		<CenteredContent>
			{user ? (
				<>
					<h3 style={{ textAlign: "center" }}>{id}</h3>
					<Avatar src={user.avatar_url} sx={{ width: 128, height: 128, mb: 3 }} />
					<Link to={routes.github.list}>Back to list page</Link>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</CenteredContent>
	);
};
