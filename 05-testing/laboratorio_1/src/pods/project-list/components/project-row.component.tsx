import React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { Project } from '../project-list.vm';

type Props = RowRendererProps<Project>;

export const ProjectRowComponent: React.FunctionComponent<Props> = ({
  row,
  onEdit,
  onDelete,
}) => {
  return (
    <RowComponent aria-label={row.name}>
      <CellComponent>
        <Checkbox checked={row.isActive} disabled />
      </CellComponent>
      <CellComponent>{row.code}</CellComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.lastDateIncurred}</CellComponent>
      <CellComponent>
        {row.creationDate}
        <IconButton aria-label="Edit project" onClick={() => onEdit(row.id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete project" onClick={() => onDelete(row)}>
          <DeleteIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
