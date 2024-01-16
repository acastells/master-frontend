import { PictureInfo } from "@/vm/vm";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	AppBar,
	Badge,
	Box,
	Button,
	Container,
	CssBaseline,
	Drawer,
	Grid,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../core/providers/cart/cartContext";

export const LayoutWithCart = ({ children }: React.PropsWithChildren) => {
	const navigate = useNavigate();
	const { cart, removeImageFromCart, emptyCart } = React.useContext(CartContext);
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	const SidebarContent = () => {
		return (
			<Box sx={{ width: 450, p: 2 }} component="div" role="presentation">
				<Typography variant="h4" gutterBottom>
					<ShoppingCartIcon /> Cart
				</Typography>
				{cart.map((image: PictureInfo) => (
					<React.Fragment key={image.id}>
						<Grid container alignItems="center" spacing={2}>
							<Grid item>
								<img src={image.picUrl} alt={image.title} width={150} />
							</Grid>
							<Grid item>
								<Typography variant="subtitle1">{image.title}</Typography>
							</Grid>
							<Grid item>
								<IconButton onClick={() => removeImageFromCart(image)}>
									<DeleteIcon />
								</IconButton>
							</Grid>
						</Grid>
					</React.Fragment>
				))}

				{cart.length > 0 && (
					<>
						<Button sx={{ m: 2 }} color="error" onClick={emptyCart}>
							Empty Cart
						</Button>
						<Button sx={{ m: 2 }} color="success" onClick={() => navigate("/checkout")}>
							Checkout and Pay
						</Button>
					</>
				)}
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
						<Badge badgeContent={cart.length} color="error">
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
