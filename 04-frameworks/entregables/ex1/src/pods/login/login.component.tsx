import { routes } from "@/core/router";
import { Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { AuthInfo } from "./login.vm";

interface Props {
	authInfo: AuthInfo;
	setAuthInfo: React.Dispatch<React.SetStateAction<AuthInfo>>;
	attempAuthTo: (path: string) => void;
}

export const LoginComponent = (props: Props) => {
	const { authInfo, setAuthInfo, attempAuthTo } = props;

	return (
		<Container maxWidth="sm">
			<h1>Login</h1>
			<Stack direction="row" justifyContent={"center"} sx={{ mt: 2 }}>
				<div>
					<TextField
						label="Username"
						variant="outlined"
						onChange={(e) => setAuthInfo({ ...authInfo, username: e.target.value })}
						value={authInfo.username}
						sx={{ mb: 3 }}
						fullWidth
					/>
					<TextField
						label="Password"
						variant="outlined"
						onChange={(e) => setAuthInfo({ ...authInfo, password: e.target.value })}
						value={authInfo.password}
						sx={{ mb: 3 }}
						fullWidth
						type="password"
					/>
				</div>
			</Stack>

			<Stack sx={{ mt: 2 }}>
				<Button
					type="submit"
					variant="outlined"
					onClick={() => attempAuthTo(routes.github.list)}>
					Login to Github Users API
				</Button>
				<Button
					type="submit"
					variant="outlined"
					onClick={() => attempAuthTo(routes.rickandmorty.list)}>
					Login to Rick and Morty API
				</Button>
			</Stack>
		</Container>
	);
};
