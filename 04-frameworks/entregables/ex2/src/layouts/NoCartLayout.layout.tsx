import { AppBar, Button, Container, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const NoCartLayout = ({ children }: React.PropsWithChildren) => {
	const navigate = useNavigate();
	return (
		<>
			<CssBaseline />
			<AppBar>
				<Toolbar>
					<Button onClick={() => navigate("/")}>Image Marketplace</Button>
					<div style={{ flexGrow: 1 }} />
				</Toolbar>
			</AppBar>
			<Container style={{ marginTop: "80px" }}>{children}</Container>
		</>
	);
};
