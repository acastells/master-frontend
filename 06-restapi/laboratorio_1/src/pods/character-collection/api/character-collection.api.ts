import axios from 'axios';
import { GraphQLClient, gql } from 'graphql-request';
import * as apiModel from 'pods/character/api/character.api-model';
import * as graphQLModel from 'pods/character/api/character.graphql-model';

export const getCharacterCollection = async (
  page: number
): Promise<apiModel.Character[]> => {
  const endpoint =
    process.env.API_ENDPOINT === 'public_api'
      ? process.env.PUBLIC_API_ENDPOINT
      : process.env.JSON_SERVER_ENDPOINT;
  const url = `${endpoint}/character?page=${page}`;

  try {
    const response = await axios.get(url);
    return process.env.API_ENDPOINT === 'public_api'
      ? response.data.results
      : response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCharacterCollectionGraphQL = async (
  page: number
): Promise<graphQLModel.Character[]> => {
  const url = process.env.PUBLIC_GRAPHQL_ENPOINT;
  const graphQLClient = new GraphQLClient(url);

  const query = gql`
    query GetCharacters($page: Int) {
      characters(page: $page) {
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

  try {
    const response = await graphQLClient.request<{
      characters: {
        results: graphQLModel.Character[];
      };
    }>(query, { page });
    return response.characters.results;
  } catch (e) {
    console.log(e);
    return [];
  }
};
