import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from './character.vm';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const navigate = useNavigate();

  if (character) {
    return (
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <img src={character.image} />
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell>{character.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Status</b>
                </TableCell>
                <TableCell>{character.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Species</b>
                </TableCell>
                <TableCell>{character.species}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Type</b>
                </TableCell>
                <TableCell>{character.type ? character.type : '?'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Gender</b>
                </TableCell>
                <TableCell>{character.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Origin</b>
                </TableCell>
                <TableCell>{character.origin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Location</b>
                </TableCell>
                <TableCell>{character.location}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            color="primary"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            color="primary"
            onClick={() => onSave(character)}
          >
            Save
          </Button>
        </Box>
      </Container>
    );
  } else {
    return <>Loading...</>;
  }
};
