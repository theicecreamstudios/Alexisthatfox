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
import {useDataCustomHook} from '../../Data/data';


const Contact = () => {
  const data = useDataCustomHook();
  const {contact: {img, initialState, forms, btnText}} = data;
  const [state, setState] = useState(initialState);



  const handleChange = (event, name) => {
    const value = event.target.value;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('STATE::::', state);
    setState(initialState);
  }

  
  return(
  <div className={styles.Contact}>
    <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ position: 'relative'  }}>
        <Box sx={{ height: { xs: '17vh', md: '25vh' }, bgcolor: '#cfe8fc', width: '100%', backgroundImage: `url(${img})` }}>
        </Box>
          <Box sx={{width: {xs: '90%', lg:'50%'}, position: 'absolute', left: '50%', transform: 'translateX(-50%)', background: 'white', p: 1, mt: -9}}>
        <Box sx={{
          backgroundColor: '#955B35',
          color: 'white',
          p: 3
        }}>
          {forms.map((el) => 
          el.formType === 'input' ?
          <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'end', mt: 4}} key={el.name}>
            <Typography variant="body2" sx={{mr: 1,fontFamily:"KollektifBold"}}>{el.label}</Typography>
              <TextField 
              id="standard-basic" 
              variant="standard"
              multiline={el.multiline} 
              rows={el.rows}
              sx={{
                color: 'white', 
                fontFamily:"KollektifBold",
                flexGrow: 1, 
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white !important', // Change border bottom color to white
                },
                '& .MuiInput-underline.Mui-focused:after': {
                  borderBottomColor: 'white !important', // Change border bottom color to white on focus
                },
                '& .MuiInputBase-input': {
                  color: 'white !important', // Change text input color to white
                },
                '& .MuiInputBase-input:focus': {
                  color: 'white !important', // Change text input color to white on focus
                },
            }}
            onChange={(event) => handleChange(event, el.name)}
            />
          </Box>
          :
          <Box sx={{display: 'flex', flexDirection: 'column', mt: 4 }}>
            <Typography variant="body2" sx={{mt: 1, 
              fontFamily:"KollektifBold",
              textAlign: 'center', }}>{el.label}</Typography>
             <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={state.interest}
                onChange={(event) => handleChange(event, el.name)}
                label="Age"
                sx={{
                  color: "white",
                  fontFamily:"KollektifBold",
                  '.MuiSvgIcon-root ': {
                    fill: "white !important",
                  },
                  '&.MuiSelect-root:before' : {
                    borderBottomColor: 'white !important'
                  },
                  '& .MuiInputBase-input': {
                    color: 'white !important', // Change text input color to white
                  },
                  '& .MuiInputBase-input:focus': {
                    color: 'white !important', // Change text input color to white on focus
                  },
                  
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {el.options.map((opt) => <MenuItem value={opt} sx={{fontFamily:"Kollektif"}} key={opt}>{opt}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
          )}

          <Box sx={{textAlign: 'center', mt: 10}}>
            <FoxyButton
              fullWidth={false}
              variant="contained" 
              label={btnText} 
              backgroundColor={'#312813'}
              hoverBackgroundColor={'#312813'}
              height={'initial'}
              onClick={handleSubmit}
              sx={{
                width: 250,
                borderRadius: 5,
                fontSize: 20,
                color: 'white',
                fontWeight: 700,
              }}
            />
          </Box>
        </Box>
      </Box>
        </Box>
      </Container>
  </div>
)};

export default Contact;
