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
import { useDataCustomHook } from '../../Data/data';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const serviceKey = process.env.REACT_APP_EMAILJS_KEY;
const templateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY;

const Contact = () => {
  const data = useDataCustomHook();
  const {
    contact: {
      header,
      accessory,
      stamp,
      initialState,
      forms,
      brownPaper,
      messageSentSuccess,
      messageSentFailed,
    },
  } = data;
  const [state, setState] = useState(initialState);
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  useEffect(() => emailjs.init('s7caCHPM23LHkbEln'), []);

  const handleChange = (event, name) => {
    const value = event.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform form validation
    const { name, email, interest, message } = state;
    if (!name || !email || !interest || !message) {
      setSeverity('warning');
      setFeedback('Please fill out all required fields.');
      setOpen(true);
      return;
    }
  
    // Check for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSeverity('warning');
      setFeedback('Please enter a valid email address.');
      setOpen(true);
      return;
    }
  
    // Proceed to send email
    handleSubmitMail(state);
  };

  const handleSubmitMail = async (data) => {
    const serviceId = serviceKey;
    const templateId = templateKey
    try {
      await emailjs.send(serviceId, templateId, {
        name: data.name,
        email: data.email,
        interest: data.interest,
        message: data.message,
      });
      setState(initialState)
      setSeverity('success')
      setFeedback(messageSentSuccess)
      setOpen(true);
    } catch (error) {
      console.log(error);
      setSeverity('error')
      setFeedback(messageSentFailed)
      setOpen(false);
    }
  };

  return (
    <div className={styles.Contact}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          sx={{
            width: { xs: "initial", md: "80vw" },
            m: "auto",
          }}
        >
          <Box
            sx={{
              backgroundImage: {
                xs: `url('${brownPaper}')`,
                md: `url('${accessory}')`,
              },
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: { xs: "75vh", sm: "75vh", md: "80vh" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flexDirection: "column",
              mb: { xs: "8vh", md: "1vh" },
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
                width: { xs: "80%", sm: "50%", md: 350 },
                maxWidth: "90%",
                position: "relative",
                padding: 2,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#9c5632",
                  mb: 2,
                  fontFamily: "balthazar",
                }}
              >
                {header}
              </Typography>

              <Box
                sx={{
                  p: { xs: 2, sm: "initial" },
                }}
              >
                {forms.map((el, i) =>
                  el.formType === "input" ? (
                    <Box
                      key={el.name}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "end",
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          mr: 1,
                          fontFamily: "balthazar",
                          color: "#9c5632",
                        }}
                      >
                        {el.label}
                      </Typography>
                      <TextField
                        id="standard-basic"
                        variant="standard"
                        multiline={el.multiline}
                        rows={el.rows}
                        type={el.type}
                        value={state[el.name]}
                        sx={{
                          color: "#9c5632",
                          fontFamily: "KollektifBold",
                          flexGrow: 1,
                          "& .MuiInput-underline:before": {
                            borderBottomColor: "#9c5632 !important",
                          },
                          "& .MuiInput-underline.Mui-focused:after": {
                            borderBottomColor: "#9c5632 !important",
                          },
                          "& .MuiInputBase-input": {
                            color: "#9c5632 !important",
                          },
                          "& .MuiInputBase-input:focus": {
                            color: "#9c5632 !important",
                          },
                        }}
                        onChange={(event) => handleChange(event, el.name)}
                      />
                    </Box>
                  ) : (
                    <Box
                      key={el.name}
                      sx={{ display: "flex", flexDirection: "column", mt: 4 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1,
                          fontFamily: "KollektifBold",
                          textAlign: "center",
                          color: "#9c5632",
                        }}
                      >
                        {el.label}
                      </Typography>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <Select
                          value={state.interest}
                          onChange={(event) => handleChange(event, el.name)}
                          sx={{
                            color: "#9c5632",
                            fontFamily: "KollektifBold",
                            ".MuiSvgIcon-root ": {
                              fill: "#9c5632 !important",
                            },
                            "&.MuiSelect-root:before": {
                              borderBottomColor: "#9c5632 !important",
                            },
                            "& .MuiInputBase-input": {
                              color: "#9c5632 !important",
                            },
                            "& .MuiInputBase-input:focus": {
                              color: "#9c5632 !important",
                            },
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {el.options.map((opt) => (
                            <MenuItem
                              key={opt}
                              value={opt}
                              sx={{ fontFamily: "Kollektif", color: "#9c5632" }}
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
                  textAlign: "center",
                  backgroundImage: `url('${stamp}')`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: 120,
                  height: 100,
                  mt: { xs: 5, lg: 10 },
                }}
                onClick={handleSubmit}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {feedback}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
