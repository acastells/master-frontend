import { Box, Container, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from './character.vm';
import { CharacterInfoTable } from './components/characterInfoTable.component';

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

  const [saveStatus, _setSaveStatus] = React.useState({
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
          <CharacterInfoTable
            character={character}
            saveStatus={saveStatus}
            setBestSentences={setBestSentences}
          />
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
    return <h5>Loading...</h5>;
  }
};
