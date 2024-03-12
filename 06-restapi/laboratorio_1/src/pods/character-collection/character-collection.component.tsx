import * as React from 'react';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Character } from 'pods/character/character.vm';

interface Props {
  characterCollection: Character[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
