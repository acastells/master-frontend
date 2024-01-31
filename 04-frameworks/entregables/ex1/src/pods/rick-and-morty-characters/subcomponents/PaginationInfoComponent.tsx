import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { Stack, Button } from "@mui/material";
import React from "react";

export const PaginationInfoComponent = ({
	characterFilterOptions,
	setCharacterFilterOptions,
	paginationInfo,
}) => {
	const handlePrevPage = () => {
		setCharacterFilterOptions({
			...characterFilterOptions,
			page: characterFilterOptions.page - 1,
		});
	};

	const handleNextPage = () => {
		setCharacterFilterOptions({
			...characterFilterOptions,
			page: characterFilterOptions.page + 1,
		});
	};

	return (
		<Stack direction="row" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
			<Button
				disabled={paginationInfo.prev === null}
				onClick={handlePrevPage}
				startIcon={<ArrowBackIosNewOutlined />}></Button>
			<p>
				{characterFilterOptions.page}/{paginationInfo.pages} pages, {paginationInfo.count}{" "}
				characters
			</p>
			<Button
				disabled={paginationInfo.next === null}
				onClick={handleNextPage}
				startIcon={<ArrowForwardIosOutlined />}></Button>
		</Stack>
	);
};
