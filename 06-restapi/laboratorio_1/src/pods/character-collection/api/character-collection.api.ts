import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';


export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const url = `${process.env.API_ENDPOINT}/character`
  const response = await axios.get(url);

  const characterCollection: CharacterEntityApi[] = response.data.results;

  return characterCollection;
};