import React, { PropsWithChildren, createContext } from "react";

interface FilterContextEntity {
	filter: string;
	setFilter: (filter: string) => void;
}

export const FilterContext = createContext<FilterContextEntity>(null);

export const FilterContextProvider: React.FC<PropsWithChildren<{}>> = ({
	children,
}) => {
	const [filter, setFilter] = React.useState<string>("lemoncode");

	return (
		<FilterContext.Provider
			value={{ filter: filter, setFilter: setFilter }}
		>
			{children}
		</FilterContext.Provider>
	);
};
