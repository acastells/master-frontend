export interface FilterContextEntity {
	orgName: string;
	perPage: number;
	page: number;
	setOrgName: (filter: string) => void;
	setPerPage: (perPage: number) => void;
	setPage: (page: number) => void;
}