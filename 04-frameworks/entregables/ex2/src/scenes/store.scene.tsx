import { Button, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { LayoutWithCart } from "../layout/layoutWithCart.layout";

export const StoreScene: React.FC = () => {
	return (
		<LayoutWithCart>
			<Grid container flexDirection="row" justifyContent={"center"} sx={{ p: 2 }}>
				<Button component={RouterLink} to="/alpacas">
					Alpacas
				</Button>
				<Button component={RouterLink} to="/calves">
					Calves
				</Button>
			</Grid>
		</LayoutWithCart>
	);
};
