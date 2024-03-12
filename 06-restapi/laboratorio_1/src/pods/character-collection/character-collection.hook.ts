import * as React from 'react';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { Character } from 'pods/character/character.vm';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<Character[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};
