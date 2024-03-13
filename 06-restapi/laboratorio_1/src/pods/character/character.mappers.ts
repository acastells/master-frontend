import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';
import * as graphQLModel from './api/character.graphql-model';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  bestSentences: character.bestSentences || [],
});

export const mapCharacterFromGraphQLToVm = (
  character: graphQLModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.origin.name,
    url: character.origin.id,
  },
  location: {
    name: `${character.location.name} - ${character.location.type} - ${character.location.dimension}`,
    url: character.location.id,
  },
  bestSentences: [],
});
