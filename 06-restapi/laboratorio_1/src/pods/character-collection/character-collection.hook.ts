import { mapToCollection } from 'common/mappers';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromGraphQLToVm,
} from 'pods/character/character.mappers';
import { Character } from 'pods/character/character.vm';
import * as React from 'react';
import { getCharacterCollection, getCharacterCollectionGraphQL } from './api';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    Character[]
  >([]);

  const loadCharacterCollection = () => {
    const APIOption = localStorage.getItem('APIOption');

    if (APIOption === 'REST') {
      getCharacterCollection().then((result) =>
        setCharacterCollection(mapToCollection(result, mapCharacterFromApiToVm))
      );
    } else if (APIOption === 'GraphQL') {
      getCharacterCollectionGraphQL().then((result) =>
        setCharacterCollection(
          mapToCollection(result, mapCharacterFromGraphQLToVm)
        )
      );
    } else {
      localStorage.setItem('APIOption', 'REST');
      loadCharacterCollection();
    }
  };

  return { characterCollection, loadCharacterCollection };
};
