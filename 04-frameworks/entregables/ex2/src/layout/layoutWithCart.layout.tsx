// Layout.js
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	AppBar,
	Badge,
	Box,
	Button,
	Container,
	CssBaseline,
	Drawer,
	IconButton,
	Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LayoutWithCart = ({ children }: React.PropsWithChildren) => {
	const navigate = useNavigate();
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	const SidebarContent = () => {
		return (
			<Box sx={{ width: 450, p: 2 }} component="div" role="presentation">
				<h1>Cart</h1>
			</Box>
		);
	};

	return (
		<>
			<CssBaseline />
			<AppBar>
				<Toolbar>
					<Button onClick={() => navigate("/")}>Image Marketplace</Button>
					<div style={{ flexGrow: 1 }} />
					<IconButton onClick={toggleSidebar}>
						<Badge badgeContent={1} color="error">
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer anchor="right" open={isSidebarOpen} onClose={toggleSidebar}>
				<SidebarContent />
			</Drawer>
			<Container style={{ marginTop: "80px" }}>{children}</Container>
		</>
	);
};
