import { Button, Grid, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../core/providers/cart/cartContext";
import { NoCartLayout } from "../layout/NoCartLayout.layout";

export const CheckoutScene: React.FC = () => {
	const navigate = useNavigate();
	const { cart, emptyCart } = React.useContext(CartContext);

	return (
		<NoCartLayout>
			<Typography textAlign={"center"} variant="h5">
				Check your products
			</Typography>
			<Grid container justifyContent={"center"} pb={4}>
				<Button onClick={() => navigate("/")}>Go Back</Button>
			</Grid>
			<ImageList sx={{ width: "100%", height: "100%", p: 4, pt: 0 }}>
				{cart.map((item) => (
					<ImageListItem key={item.picUrl}>
						<img
							srcSet={`${item.picUrl}?w=164&fit=crop&auto=format&dpr=2 2x`}
							src={`${item.picUrl}?w=164&fit=crop&auto=format`}
							alt={item.title}
							loading="lazy"
							width={80}
						/>
						<ImageListItemBar title={item.title} />
					</ImageListItem>
				))}
			</ImageList>

			<Grid container justifyContent={"center"} pb={4}>
				<Button onClick={() => navigate("/")}>Go Back</Button>
				<Button
					color="success"
					onClick={() => {
						emptyCart();
						navigate("/paymentSuccess");
					}}>
					Pay
				</Button>
			</Grid>
		</NoCartLayout>
	);
};
