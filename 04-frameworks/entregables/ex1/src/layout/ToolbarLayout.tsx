import { routes } from "@/core/router";
import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ToolbarLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate(routes.login);
	};

	return (
		<Container maxWidth="lg" sx={{ pb: 4 }}>
			<Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
				<Button onClick={handleLogout}>Logout</Button>
			</Stack>
			{children}
		</Container>
	);
};
