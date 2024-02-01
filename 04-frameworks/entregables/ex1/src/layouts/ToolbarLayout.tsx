import { routes } from "@/core";
import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ToolbarLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleLogout = () => {
		navigate(routes.login);
	};

	const changeApiPage = () => {
		if (pathname === routes.rickandmorty.list) {
			navigate(routes.github.list);
		} else if (pathname === routes.github.list) {
			navigate(routes.rickandmorty.list);
		}
	};

	return (
		<Container maxWidth="lg" sx={{ pb: 4 }}>
			<Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }} spacing={4}>
				<Button onClick={changeApiPage}>Change API</Button>
				<Button color={"warning"} onClick={handleLogout}>
					Logout
				</Button>
			</Stack>
			{children}
		</Container>
	);
};
