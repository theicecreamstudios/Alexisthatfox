import React from 'react';
import styles from './SensualDance.module.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import {useDataCustomHook} from '../../Data/data';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Toolbar from '@mui/material/Toolbar';

const SensualDance = () => {
  const data = useDataCustomHook();
  const {sensualDance: {header, foxyImg, description, workshopDescription, benefits, workshopBenefits, subText, subImg, subHeader, bttnText}} = data;

  return(
  <div className={styles.SensualDance}>
    <Container maxWidth="xl">
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ 
          background: '#1E310A', 
          color: 'white', 
          px: {xs: 3, md: 5},
          pt: {xs: 3, md: 5},
          pb: 22
          }}>
            <Box sx={{ fontFamily: "BDSans", textAlign: 'center', display: {xs:'none', lg: 'block'}}}>

            <HeaderTitle title={header}/>
            </Box>
        
          <Box sx={{flexGrow: 1, px: {md: 2}, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt:-4, border: 'none', borderShadow: 'none' }}>
      
              <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, border: 'none', borderShadow: 'none', alignItems: {xs: 'center', md: 'flex-start'} }}>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 'md' }}>
                  <CardContent sx={{ flex: '1 0 auto'}}>
                    <Box sx={{ fontFamily: "BDSans", textAlign: 'center', display: {xs:'block', lg: 'none'}}}>
                      <HeaderTitle title={header}/>
                    </Box>
                 
                  </CardContent>

                  <Box sx={{textAlign: 'start', display: {xs:'none', md: 'block'}}}>
                    <Typography component="div" variant="caption" gutterBottom sx={{ mb: 2, px: 1,fontFamily: "Kollektif"}}>
                      {description}
                    </Typography>
                    {benefits.map((el) => <Typography key={el} component="div" variant="caption" gutterBottom sx={{px: 1,fontFamily: "Kollektif"}}>*{el}</Typography>)}
                  </Box>
                </Box>
                <Box sx={{px: 1}}>
                  <CardMedia
                      component="img"
                      sx={{ 
                        width: {xs: 200, sm: 300},
                        height: {xs: 200, sm: 300},
                        
                        borderRadius: '50%' }}
                      image={foxyImg}
                      alt="Foxy"
                    />
                </Box>
              </Box>
      
              {/* Small devices */}
              <Box sx={{textAlign: 'start', display: {xs:'block', md: 'none'}}}>
                <Typography variant="body1"  sx={{my: 3, fontSize: {xs: 12, md: 16}, display: {xs: 'block', md: 'none',fontFamily: "Kollektif"}}}>
                  {description}
                </Typography>
                {benefits.map((el) => <Typography key={el} component="div" variant="caption" gutterBottom sx={{px: 1,fontFamily: "Kollektif"}}>*{el}</Typography>)}
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Box sx={{width: {xs: '95%', sm:'70%', md: '60%', lg:'50%'}, position: 'absolute', left: '50%', transform: 'translateX(-50%)', background: 'white', mt: -14}}>
        <Box sx={{
          backgroundColor: '#955B35',
          color: 'white',
          p: 3,
          height: {xs:'50%', md: '40%'},
          display: 'flex', flexDirection: 'column',fontFamily: "Kollektif"
        }}>
          <Typography variant="body2" sx={{ textAlign: 'center', mb: 3, fontSize: '1rem',fontFamily: "Kollektif"}}>
           {workshopDescription}
          </Typography>
          <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
            {workshopBenefits.map((el) => <Typography key={el} component="div" variant="caption" gutterBottom sx={{px: 1, fontSize: '0.8rem',fontFamily: "Kollektif"}}>*{el}</Typography>)}
          </Box>
        </Box>
          </Box>
      </Box>
      <Toolbar/>
      <Box sx={{
        '@media (max-width: 400px)': { mt: '55vh'},
        '@media (min-width: 401px) and (max-width: 500px)': { mt: '50vh'},
        '@media (min-width: 501px) and (max-width: 599px)': {mt: '65%' },
        '@media (min-width: 600px) and (max-width: 725px)': { mt: '60%'},
        '@media (min-width: 726px) and (max-width: 1000px)': {mt: '40vh' },
        '@media (min-width: 1001px)': {mt: '32vh' }
    }}/>
      <Typography variant="body2" sx={{ textAlign: 'start', mb: 3, fontSize: '1rem',fontFamily: "Kollektif"}}>
      {subText}

      </Typography>
      
      <Box sx={{ display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mb: 5}}>
        <CardMedia
            component="img"
            sx={{ 
              width: {xs: 100, sm: 200},
              height: {xs: 100, sm: 200}
            }}
            image={subImg}
            alt="Foxy"
          />
      </Box>
      
    

      <Box sx={{height: '50vh'}}>
      <Box sx={{position: 'relative', background: '#392D13', color: 'white'}}>
        <Box sx={{textAlign: 'center', height: 100, display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Typography component="div" variant="" sx={{fontWeight: 700,fontFamily: "KollektifBold"}}>{subHeader}</Typography>
        </Box>
      </Box>
        <Box sx={{ mt: 8, textAlign: 'center'}}>
            <FoxyButton
              fullWidth={false}
              variant="contained" 
              label={bttnText} 
              backgroundColor={'#CFC5B3'}
              hoverBackgroundColor={'#CFC5B3'}
              height={'initial'}
              width={'initial'}
              sx={{
                borderRadius: 5,
                fontSize:{xs: 15, md: 18},
                color: 'black',
                fontWeight: 700,
                // boxShadow: '0px 0px 20px 20px rgb(201 200 22 / 20%), inset 0px 0px 20px 0px rgb(255 244 204), 0px 1px 5px 0px rgb(226 214 180)'
              }}
            />
        </Box>
    </Box>
    </Container>
  </div>
)};

export default SensualDance;
