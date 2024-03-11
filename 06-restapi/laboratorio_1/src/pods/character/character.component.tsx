import React from 'react';
import Button from '@mui/material/Button';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Container, TextField } from '@mui/material';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Container className={classes.root}>
      <TextField name="name" label="Name" />
      <TextField
        name="description"
        label="Description"
        multiline={true}
        rows={3}
      />
      <Button variant="contained" color="primary" onClick={() => onSave(character)}>
        Save
      </Button>
    </Container>
  );
};
