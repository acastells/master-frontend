import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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
			<h2>Login</h2>
			<div>
				<div>
					<label>Username: </label>
					<input value={username} onChange={(e) => setUsername(e.target.value)} />
				</div>
				<div>
					<label>Password: </label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</div>

			<Stack sx={{ mt: 2 }}>
				<Button type="submit" variant="outlined" onClick={() => handleNavigation("/list")}>
					Login to Github Users API
				</Button>
				<Button
					type="submit"
					variant="outlined"
					onClick={() => handleNavigation("/rickandmorty/list")}>
					Login to Rick and Morty API
				</Button>
			</Stack>
		</Container>
	);
};
