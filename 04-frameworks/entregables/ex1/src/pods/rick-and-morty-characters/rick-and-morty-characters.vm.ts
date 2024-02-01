export interface CharacterFilterOptionsEntity {
	page: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
}

export interface CharacterEntity {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	episode: string[];
	url: string;
	created: string;
}

export interface PaginationInfo {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}
