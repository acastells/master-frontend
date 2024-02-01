import * as api from "./api/api";
import { ResultsVM, mapCharacterListToVM } from "./rick-and-morty-characters.mappers";

export const getCharacters = (filterInfo): Promise<ResultsVM> => {
	return api.getCharacters(filterInfo).then(mapCharacterListToVM);
};
