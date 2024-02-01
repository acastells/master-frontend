export interface ResultAPI {
	info: InfoResult;
	results: CharacterResult[];
	error?: string
}

interface InfoResult {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

interface CharacterResult {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}
