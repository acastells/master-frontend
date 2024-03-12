import axios from 'axios';
import { Character } from './character.api-model';

export const getCharacter = async (id: number): Promise<Character> => {
  let url: string;

  switch (process.env.API_ENDPOINT) {
    case 'public_api':
      url = `${process.env.PUBLIC_API_ENDPOINT}/character`;
      break;
    case 'json_server':
      url = `${process.env.JSON_SERVER_ENDPOINT}/character`;
      break;
    default:
      throw new Error('API_ENDPOINT unknown');
  }

  const response = await axios.get(`${url}/${id}`);

  const character: Character = response.data;

  return character;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
