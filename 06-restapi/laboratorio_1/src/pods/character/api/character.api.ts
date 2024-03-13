import axios from 'axios';
import { GraphQLClient, gql } from 'graphql-request';
import * as vmModel from '../character.vm';
import * as apiModel from './character.api-model';
import * as graphQLModel from './character.graphql-model';

export const getCharacter = async (id: number): Promise<apiModel.Character> => {
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
  const character: apiModel.Character = response.data;
  return character;
};

export const saveCharacter = async (
  character: vmModel.Character
): Promise<boolean> => {
  const url = `${process.env.JSON_SERVER_ENDPOINT}/character/${character.id}`;
  await axios.patch(url, character);
  return true;
};

export const getCharacterGraphQL = async (
  characterId: number
): Promise<graphQLModel.Character> => {
  const url = process.env.PUBLIC_GRAPHQL_ENPOINT;
  const graphQLClient = new GraphQLClient(url);

  const query = gql`
    query GetCharacter($characterId: ID!) {
      character(id: $characterId) {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
          name
          type
          dimension
        }
        image
        created
      }
    }
  `;

  interface CharactersGraphQLResponse {
    character: graphQLModel.Character;
  }

  const response = await graphQLClient.request<CharactersGraphQLResponse>(
    query,
    { characterId }
  );

  return response.character;
};
