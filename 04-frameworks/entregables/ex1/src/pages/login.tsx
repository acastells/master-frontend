import { Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../app";

export const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleNavigation = (path: string) => {
		if (username === "admin" && password === "test") {
			navigate(path);
		} else {
			alert("User / password not valid, psst... admin / test");
		}
	};

	return (
		<Container maxWidth="sm">
			<h1>Login</h1>
			<Stack direction="row" justifyContent={"center"} sx={{ mt: 2 }}>
				<div>
					<TextField
						label="Username"
						variant="outlined"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						sx={{ mb: 3 }}
						fullWidth
					/>
					<TextField
						label="Password"
						variant="outlined"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						sx={{ mb: 3 }}
						fullWidth
						type="password"
					/>
				</div>
			</Stack>

			<Stack sx={{ mt: 2 }}>
				<Button type="submit" variant="outlined" onClick={() => handleNavigation(routes.github.list)}>
					Login to Github Users API
				</Button>
				<Button
					type="submit"
					variant="outlined"
					onClick={() => handleNavigation(routes.rickandmorty.list)}>
					Login to Rick and Morty API
				</Button>
			</Stack>
		</Container>
	);
};
