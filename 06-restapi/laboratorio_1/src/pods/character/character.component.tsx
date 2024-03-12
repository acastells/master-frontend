import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from './character.vm';
import { BestSentencesComponent } from './components/bestSentences.component';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const navigate = useNavigate();
  const [bestSentences, setBestSentences] = React.useState([]);

  React.useEffect(() => {
    if (character) {
      setBestSentences(character.bestSentences);
    }
  }, [character]);

  const [saveStatus, setSaveStatus] = React.useState({
    disabled: process.env.API_ENDPOINT !== 'json_server',
    reason:
      process.env.API_ENDPOINT !== 'json_server'
        ? 'Can not save on public API. Change endpoint to json server.'
        : '',
  });

  const handleOnSave = () => {
    character.bestSentences = bestSentences;
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
                  <BestSentencesComponent
                    intialSentences={character.bestSentences}
                    onSentencesChange={setBestSentences}
                  />
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
