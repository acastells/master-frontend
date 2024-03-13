import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm } from './character.mappers';
import { Character } from './character.vm';
import { linkRoutes } from 'core/router';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(Number(id));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
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
