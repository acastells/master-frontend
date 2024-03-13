import { linkRoutes } from 'core/router';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterComponent } from './character.component';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromGraphQLToVm,
} from './character.mappers';
import { Character } from './character.vm';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    const APIOption = localStorage.getItem('APIOption');
    if (APIOption === 'REST') {
      const apiCharacter = await api.getCharacter(Number(id));
      setCharacter(mapCharacterFromApiToVm(apiCharacter));
    } else if (APIOption === 'GraphQL') {
      const apiCharacter = await api.getCharacterGraphQL(Number(id));
      setCharacter(mapCharacterFromGraphQLToVm(apiCharacter));
    } else {
      throw `APIOption: ${APIOption} not implemented`;
    }
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const success = await api.saveCharacter(character);
    if (success) {
      navigate(linkRoutes.root);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
