import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from 'pods/character/character.vm';

interface Props {
  character: Character;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea
        onClick={() =>
          navigate(linkRoutes.characterDetail(character.id.toString()))
        }
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <img
              src={character.image}
              style={{ width: 150, height: '100%' }}
            ></img>
          </div>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.status} - {character.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.location.name}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
