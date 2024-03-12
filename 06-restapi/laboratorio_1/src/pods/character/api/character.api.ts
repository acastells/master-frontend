import axios from 'axios';
import { Character } from './character.api-model';

export const getCharacter = async (id: number): Promise<Character> => {
  const url = `${process.env.API_ENDPOINT}/character`;
  const response = await axios.get(`${url}/${id}`);

  const character: Character = response.data;

  return character;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
