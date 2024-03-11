import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link } from 'react-router-dom';
import { linkRoutes } from 'core/router';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character"></Avatar>}
        title={<Link to={linkRoutes.characterDetail(character.id.toString())}>{character.name}</Link>}
        subheader={"subheader"}
      />
      <CardContent>
        <div className={classes.content}>
          <Typography variant="subtitle1" gutterBottom>
            "character description"
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
