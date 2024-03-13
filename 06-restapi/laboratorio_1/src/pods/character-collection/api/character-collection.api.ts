import axios from 'axios';
import * as graphQLModel from 'pods/character/api/character.graphql-model';
import { GraphQLClient, gql } from 'graphql-request';
import * as apiModel from 'pods/character/api/character.api-model';

export const getCharacterCollection = async (): Promise<
  apiModel.Character[]
> => {
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
  return process.env.API_ENDPOINT === 'public_api'
    ? response.data.results
    : response.data;
};

export const getCharacterCollectionGraphQL = async (): Promise<
  graphQLModel.Character[]
> => {
  const url = 'https://rickandmortyapi.com/graphql';

  const graphQLClient = new GraphQLClient(url);

  const query = gql`
    query {
      characters(page: 0) {
        results {
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
    }
  `;

  interface CharactersGraphQLResponse {
    characters: {
      results: graphQLModel.Character[];
    };
  }

  const response = await graphQLClient.request<CharactersGraphQLResponse>(
    query
  );
  return response.characters.results
};
