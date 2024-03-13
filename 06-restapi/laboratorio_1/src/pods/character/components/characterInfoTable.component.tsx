import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Character } from '../character.vm';
import { BestSentencesComponent } from './bestSentences.component';

interface Props {
  character: Character;
  saveStatus: { disabled: boolean; reason: string };
  setBestSentences: React.Dispatch<React.SetStateAction<any[]>>;
}

export const CharacterInfoTable = (props: Props) => {
  const { character, saveStatus, setBestSentences } = props;

  return (
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
        {saveStatus.disabled === false && (
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
        )}
      </TableBody>
    </Table>
  );
};
