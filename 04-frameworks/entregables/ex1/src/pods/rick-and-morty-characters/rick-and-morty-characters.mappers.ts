import * as am from "./api/api.model";
import { PaginationInfo, CharacterEntity } from "./rick-and-morty-characters.vm";

export interface ResultsVM {
	info?: PaginationInfo,
	results?: CharacterEntity[],
	error?: string
}

export const mapCharacterListToVM = (data: am.ResultAPI): ResultsVM => {
	if (data.error) {
		return ({error:data.error})
	}
	
	const paginationInfo: PaginationInfo = {
		count: data.info.count,
		pages: data.info.pages,
		next: data.info.next,
		prev: data.info.prev
	}
	const characters: CharacterEntity[] = data.results.map((item) => {
		return {
			id: item.id,
			name: item.name,
			status: item.status,
			species: item.species,
			type: item.type,
			gender: item.gender,
			image: item.image,
			origin: item.origin,
			location: item.location,
			episode: item.episode,
			url: item.url,
			created: item.created
		}
	})

	return ({
		info: {...paginationInfo},
		results: [...characters]
	})
}
