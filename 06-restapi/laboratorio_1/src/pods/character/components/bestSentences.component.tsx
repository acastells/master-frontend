import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
	IconButton,
	List,
	ListItem,
	ListItemText,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';

export const BestSentencesComponent = (props) => {
  const { intialSentences, onSentencesChange } = props;

  const [strings, setStrings] = useState(intialSentences || []);
  const [currentEditValue, setCurrentEditValue] = useState('');

  const handleAddString = () => {
    if (currentEditValue.trim()) {
      setStrings([...strings, currentEditValue.trim()]);
      setCurrentEditValue('');
      onSentencesChange([...strings, currentEditValue.trim()]); // Update parent state
    }
  };

  const handleDeleteString = (index) => {
    const newStrings = strings.filter((_, i) => i !== index);
    setStrings(newStrings);
    onSentencesChange(newStrings); // Update parent state
  };

  return (
    <>
      <TextField
        label="New sentence"
        value={currentEditValue || ''}
        onChange={(event) => setCurrentEditValue(event.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            handleAddString();
          }
        }}
      />

      <IconButton onClick={handleAddString}>
        <AddIcon />
      </IconButton>

      <List>
        {strings.map((string, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton onClick={() => handleDeleteString(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={string} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
