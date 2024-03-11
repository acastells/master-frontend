import axios from 'axios';
import { Character } from './character.api-model';

const url = "https://rickandmortyapi.com/api/character"

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await axios.get(`${url}/${id}`);

  const character: Character = response.data;

  return character
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
