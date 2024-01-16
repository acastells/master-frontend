import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NoCartLayout } from "../layout/NoCartLayout.layout";

export const PaymentSuccess: React.FC = () => {
	const navigate = useNavigate();

	return (
		<NoCartLayout>
			<Grid
				container
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				textAlign={"center"}
				gap={8}>
				<Typography variant="h2" color="success">
					Payment done
				</Typography>
				<Typography variant="h2" color="success">
					You will shortly receive the images in your mailbox
				</Typography>
				<Typography variant="h2" color="success">
					Thanks!{" "}
				</Typography>
				<Button onClick={() => navigate("/")}>Keep Buying</Button>
			</Grid>
		</NoCartLayout>
	);
};
