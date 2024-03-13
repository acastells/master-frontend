import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './app.layout.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [APIOption, setAPIOption] = React.useState(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('APIOption', event.target.value);
    navigate(0);
  };

  React.useEffect(() => {
    const value = localStorage.getItem('APIOption');

    if (value) {
      setAPIOption(value);
    } else {
      setAPIOption('REST');
      localStorage.setItem('APIOption', 'REST');
    }
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>

          <FormControl
            sx={{ backgroundColor: '#fff', p: 1, color: 'rgba(0, 0, 0, 0.87)' }}
          >
            <RadioGroup
              row
              name="controlled-radio-buttons-group"
              value={APIOption}
              onChange={handleChange}
            >
              <FormControlLabel
                value="REST"
                control={<Radio />}
                label="REST"
                labelPlacement="top"
              />
              <FormControlLabel
                value="GraphQL"
                control={<Radio />}
                label="GraphQL"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
