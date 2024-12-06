import React, { useState } from 'react';
import styles from './Contact.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import { useDataCustomHook } from '../../Data/data';

const Contact = () => {
  const data = useDataCustomHook();
  const {
    contact: { header, accessory, stamp, initialState, forms, btnText, brownPaper },
  } = data;
  const [state, setState] = useState(initialState);

  const handleChange = (event, name) => {
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('STATE::::', state);
    setState(initialState);
  };

  return (
    <div className={styles.Contact}>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Box
          sx={{
            width: { xs: 'initial', md: '80vw' },
            m: 'auto',
          }}
        >
          <Box
            sx={{
              backgroundImage: {xs: `url('${brownPaper}')`, md: `url('${accessory}')` },
              backgroundSize: 'contain', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat', 
              width: '100%', 
              height: { xs: '75vh', sm: '75vh', md: '80vh' }, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              position: 'relative', 
              flexDirection: 'column',
              mb: {xs:'8vh', md: '1vh'}
            }}
          >
            {/* Centered content */}
            <Box
              sx={{
                width: { xs: '80%', sm: '50%', md: 350 }, 
                maxWidth: '90%', 
                position: 'relative', 
                padding: 2, 
                textAlign: 'center', 
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  color: '#9c5632',
                  mb: 2, 
                }}
              >
                {header}
              </Typography>

              <Box sx={{
                p: {xs: 2, sm:'initial'}
              }}>
                {forms.map((el, i) =>
                  el.formType === 'input' ? (
                    <Box
                      key={el.name}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'end',
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant='body2'
                        sx={{ mr: 1, fontFamily: 'KollektifBold', color: '#9c5632', }}
                      >
                        {el.label}
                      </Typography>
                      <TextField
                        id='standard-basic'
                        variant='standard'
                        multiline={el.multiline}
                        rows={el.rows}
                        sx={{
                          color: '#9c5632',
                          fontFamily: 'KollektifBold',
                          flexGrow: 1,
                          '& .MuiInput-underline:before': {
                            borderBottomColor: '#9c5632 !important',
                          },
                          '& .MuiInput-underline.Mui-focused:after': {
                            borderBottomColor: '#9c5632 !important',
                          },
                          '& .MuiInputBase-input': {
                            color: '#9c5632 !important',
                          },
                          '& .MuiInputBase-input:focus': {
                            color: '#9c5632 !important',
                          },
                        }}
                        onChange={(event) => handleChange(event, el.name)}
                      />
                    </Box>
                  ) : (
                    <Box
                      key={el.name}
                      sx={{ display: 'flex', flexDirection: 'column', mt: 4 }}
                    >
                      <Typography
                        variant='body2'
                        sx={{
                          mt: 1,
                          fontFamily: 'KollektifBold',
                          textAlign: 'center',
                          color: '#9c5632',
                        }}
                      >
                        {el.label}
                      </Typography>
                      <FormControl
                        variant='standard'
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <Select
                          value={state.interest}
                          onChange={(event) => handleChange(event, el.name)}
                          sx={{
                            color: '#9c5632',
                            fontFamily: 'KollektifBold',
                            '.MuiSvgIcon-root ': {
                              fill: '#9c5632 !important',
                            },
                            '&.MuiSelect-root:before': {
                              borderBottomColor: '#9c5632 !important',
                            },
                            '& .MuiInputBase-input': {
                              color: '#9c5632 !important',
                            },
                            '& .MuiInputBase-input:focus': {
                              color: '#9c5632 !important',
                            },
                          }}
                        >
                          <MenuItem value=''>
                            <em>None</em>
                          </MenuItem>
                          {el.options.map((opt) => (
                            <MenuItem
                              key={opt}
                              value={opt}
                              sx={{ fontFamily: 'Kollektif', color: '#9c5632', }}
                            >
                              {opt}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  )
                )}
              </Box>
            </Box>

              <Box>
                <Box
                  sx={{
                    textAlign: 'center',
                    backgroundImage: `url('${stamp}')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: 120,
                    height: 100,
                    mt: {xs: 5, lg:10}
                  }}
                  onClick={handleSubmit}
                />
              </Box>
           
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
