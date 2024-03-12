import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
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

  const [saveStatus, setSaveStatus] = React.useState({
    disabled: process.env.API_ENDPOINT !== 'json_server',
    reason:
      process.env.API_ENDPOINT !== 'json_server'
        ? "Can not save on public API. Change endpoint to json server."
        : '',
  });

  const [newBestSentence, setNewBestSentence] = React.useState('');

  const handleOnSave = () => {
    if (newBestSentence) {
      character.bestSentences.push(newBestSentence);
    }
    onSave(character);
  };

  if (character) {
    return (
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <img src={character.image} height={150} />
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
                <TableCell>{character.origin.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Location</b>
                </TableCell>
                <TableCell>{character.location.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Best sentences</b>
                </TableCell>
                <TableCell>
                  {character.bestSentences.map((s) => {
                    return <p>{s}</p>;
                  })}
                  <TextField
                    value={newBestSentence}
                    onChange={(e) => setNewBestSentence(e.target.value)}
                  ></TextField>
                </TableCell>
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
          <Tooltip title={saveStatus.reason}>
            <span>
              <Button
                disabled={saveStatus.disabled}
                variant="contained"
                sx={{ mt: 2 }}
                color="primary"
                onClick={handleOnSave}
              >
                Save
              </Button>
            </span>
          </Tooltip>
        </Box>
      </Container>
    );
  } else {
    return <>Loading...</>;
  }
};
