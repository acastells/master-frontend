import React, { PropsWithChildren, createContext } from "react";

interface FilterContextEntity {
	orgName: string;
	perPage: number;
	page: number;
	setOrgName: (filter: string) => void;
	setPerPage: (perPage: number) => void;
	setPage: (page: number) => void;
}

export const FilterContext = createContext<FilterContextEntity>(null);

export const FilterContextProvider: React.FC<PropsWithChildren<{}>> = ({
	children,
}) => {
	const [orgName, setOrgName] = React.useState<string>("lemoncode");
	const [perPage, setPerPage] = React.useState<number>(3);
	const [page, setPage] = React.useState<number>(1);

	return (
		<FilterContext.Provider
			value={{ orgName, perPage, page, setOrgName, setPerPage, setPage }}
		>
			{children}
		</FilterContext.Provider>
	);
};
