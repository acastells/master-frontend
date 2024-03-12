import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
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

  const response = await axios.get(url);
  return process.env.API_ENDPOINT === 'public_api' ? response.data.results : response.data;
};