import React, { PropsWithChildren, createContext } from "react";
import { FilterContextEntity } from "./filter.vm";

export const FilterContext = createContext<FilterContextEntity>(null);

export const FilterContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
	const [orgName, setOrgName] = React.useState<string>("lemoncode");
	const [perPage, setPerPage] = React.useState<number>(3);
	const [page, setPage] = React.useState<number>(1);

	return (
		<FilterContext.Provider value={{ orgName, perPage, page, setOrgName, setPerPage, setPage }}>
			{children}
		</FilterContext.Provider>
	);
};
