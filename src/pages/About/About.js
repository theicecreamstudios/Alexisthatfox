import React from 'react';
import styles from './About.module.css';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import CardFlip from '../../components/CardFlip/CardFlip';
import {useDataCustomHook} from '../../Data/data';

const About = () => {

  const data = useDataCustomHook();
  const {meetAlexis: {header, foxyImg, about, subHeader, services}} = data;

  return(
  <Box className={styles.About}>
    <CssBaseline />

    
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, mt: 4, display: {xs: 'none', sm: 'block'}}}>
        <Grid 
        container 
        spacing={{ xs: 1, md: 2 }} 
        columns={{ xs: 12, sm: 12, md: 12 }} 
        sx={{ pb: 3}}
        >
            <Grid item xs={12} sm={6} md={9} sx={{}}>
              <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <HeaderTitle title={header}/>
                <Box sx={{textAlign: 'center'}}>
                  {about.map((el, i) => <Typography key={`about_${i}`} component="div" variant="body2" gutterBottom sx={{mb: 3, px: 3,fontFamily: "Kollektif"}}>
                    {el}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={3} sx={{display: {xs: 'none', sm:'block'}}}>
              <Box>
              <CardMedia
                component="img"
                image={foxyImg}
                alt="Foxy"
              />
              </Box>
            </Grid>
        </Grid>
      </Box>
      <Box sx={{display: {xs: 'block', sm: 'none'}, px: 3, mb: 8}}>
        <Box sx={{float: 'right', width: '50%', mt: 3}}>
          <CardMedia
            component="img"
            sx={{ width: '100%', mx: 1 }}
            image={foxyImg}
            alt="Foxy"
          />
        </Box>
        <Box>
        <HeaderTitle title={header}/>

        <Typography component="div" variant="body2" gutterBottom sx={{mb: 3,fontFamily: "Kollektif"}}>
          {about.map((el) => <React.Fragment key={el}>
            {el}
            <br/> <br/>   
          </React.Fragment>)}
        </Typography>
        </Box>
      </Box>
    </Container>

    <Box sx={{ flexGrow: 1, position: 'relative', background: '#955B35'}}>
      <Box sx={{ width: 270, position: 'absolute', top: -35, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, background: 'white', p: 0.4,}}>
        <Typography component="div" variant="h2" sx={{
          // px: 2, 
          border: '2px solid #D7D3CA', 
          fontFamily: "BDSans",
          fontWeight: 400,
          fontStyle: 'normal',
          textAlign: 'center'
        }}>{subHeader}</Typography>
      </Box>
      <Toolbar/>
      <Box sx={{flexGrow: 1, py: 5, px: 3}}>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
        {services.map((el, index) => (
          <Grid item xs={2} sm={4} md={6} lg={3} key={index}>
            <CardFlip item={el}/>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  </Box>
)};

export default About;
