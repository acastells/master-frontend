import { Box, CardActionArea, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterEntityVm } from '../character-collection.vm';
import { linkRoutes } from 'core/router';

interface Props {
  character: CharacterEntityVm;
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
              {character.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.origin}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.species}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
