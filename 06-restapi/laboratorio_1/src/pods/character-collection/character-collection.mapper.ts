import * as apiModel from 'pods/character/api/character.api-model';
import * as viewModel from 'pods/character/character.vm';

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  location: character.location,
  image: character.image,
  episode: character.episode,
  bestSentences: character.bestSentences || []
});
