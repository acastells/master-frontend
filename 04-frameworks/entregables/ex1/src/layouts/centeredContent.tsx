import { Box, Paper } from "@mui/material";
import React from "react";

export const CenteredContent: React.FC<React.PropsWithChildren> = ({ children }) => (
	<Box
		sx={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100vh",
		}}>
		<Paper sx={{ padding: 4 }}>{children}</Paper>
	</Box>
);
