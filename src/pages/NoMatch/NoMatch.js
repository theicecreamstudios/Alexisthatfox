import React from 'react';
import styles from './NoMatch.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const NoMatch = () => (
  <Box className={styles.NoMatch} sx={{
    backgroundImage: 'linear-gradient(125deg, #6a89cc, #b8e994)',
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Box class="container" sx={{
      width: '100%',
      textAlign: 'center',
      color: '#343434',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant="h2">Oops! Page not found.</Typography>
      <Typography variant="h1">404</Typography>
      <Typography variant="body2" sx={{mb: 3}}>We can't find the page you're looking for.</Typography>
      <Link 
        href={"/"} 
        underline="none" 
        sx={{
          fontFamily: 'Assistant, sans-serif',
          fontOpticalSizing: 'auto',
          fontStyle: 'normal',
          fontWeight: 700,
          cursor:"pointer",
          textDecoration: 'none',
          background: '#e55039aa',
          color: '#ffffff',
          padding: '12px 24px',
          display: 'inline-block',
          borderRadius: '25px',
          fontSize: 14,
          textTransform: 'uppercase',
          transition: '0.4s',
            "&:hover":{
              color: '#564e37'
            }
          }}
        >
        Go Back to home
      </Link>
    </Box>
  </Box>
);

export default NoMatch;
