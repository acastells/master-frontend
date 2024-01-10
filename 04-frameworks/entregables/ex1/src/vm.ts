export interface CharacterEntity {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	origin: CharacterLocationEntity;
	location: CharacterLocationEntity;
	episode: string[];
	url: string;
	created: string;
}

export interface CharacterLocationEntity {
	id: number;
	name: string;
	type: string;
	dimension: string;
}

export interface CharacterFilterOptionsEntity {
	page: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
}

export interface MemberEntity {
	id: string;
	login: string;
	avatar_url: string;
}
