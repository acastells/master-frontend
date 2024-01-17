import { AppBar, CssBaseline, Grid, Toolbar } from "@mui/material";
import React from "react";

export const CenteredLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<CssBaseline />
			<AppBar>
				<Toolbar></Toolbar>
			</AppBar>
			<Grid
				container
				flexDirection={"column"}
				sx={{ p:"80px"}}
				>
				{children}
			</Grid>
		</>
	);
};
