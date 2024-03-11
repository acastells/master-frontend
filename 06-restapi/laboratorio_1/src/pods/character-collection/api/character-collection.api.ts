import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = "https://rickandmortyapi.com/api/character"

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await axios.get(url);

  const characterCollection: CharacterEntityApi[] = response.data.results;

  return characterCollection;
};