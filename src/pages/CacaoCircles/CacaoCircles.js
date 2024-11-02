import React from 'react';
import styles from './CacaoCircles.module.css';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import {useDataCustomHook} from '../../Data/data';

const CacaoCircles = () => {
  const data = useDataCustomHook();
  const {cacaoCircle: {healer, circle, brew, subHeader, btnText}} = data;
  return(
  <div className={styles.CacaoCircles}>
    <CssBaseline />
    {/* <Container maxWidth="xl"> */}
    <Box sx={{background: '#312813', color: 'white', py: 5, px: 3}}>
        <HeaderTitle title={healer.header}/>
      <Box sx={{ flexGrow: 1, mt: 4, display: {xs: 'none', md: 'block'}}}>
        <Grid 
        container 
        spacing={{ xs: 1, md: 2 }} 
        columns={{ xs: 12, sm: 12, md: 12 }} 
        sx={{ pb: 3}}
        >
          <Grid item xs={6} sm={6} md={3} sx={{display: {xs: 'none', sm:'block'}}}>
              <Box>
              <CardMedia
                component="img"
                image={healer.img}
                alt="cacoa healer"
              />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={9} sx={{}}>
              <Box sx={{height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                <Box sx={{textAlign: 'center'}}>
                  {healer.description.map((el) => <Typography key={el} component="div" variant="caption" gutterBottom sx={{ mb: 2, px: 1, fontFamily:"KollektifBold"}}>
                    {el}
                  </Typography>)}
                </Box>
              </Box>
            </Grid>
            
        </Grid>
      </Box>

      {/* Small devices */}
      <Box sx={{display: {xs: 'block', md: 'none'}, p: 3, mb: 8, background: '#312813', color: 'white'}}>
        <Box sx={{float: 'left', width: '50%', mr: 3}}>
          <CardMedia
            component="img"
            sx={{ width: '100%', mx: 1 }}
            image={healer.img}
            alt="cacoa healer"
          />
        </Box>
        <Box>

        <Typography component="div" variant="body2" gutterBottom sx={{mb: 3,fontFamily:"KollektifBold"}}>
          {healer.description.map((el, i) => <React.Fragment key={`Desc${i}`}>
            {el}
            <br/> <br/> 
          </React.Fragment>)}
          
        </Typography>
        </Box>
      </Box>

    </Box>


    {/* The Cocoa Circle */}
    <Box sx={{px: 3}}>
      <HeaderTitle title={circle.header}/>
      <Box sx={{ flexGrow: 1, mt: 4, }}>
        <Grid 
        container 
        spacing={{ xs: 1, md: 2 }} 
        columns={{ xs: 12, sm: 12, md: 12 }} 
        sx={{ pb: 3}}
        >
          
          <Grid item xs={7}  sx={{}}>
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
              <Box sx={{textAlign: 'start', flexGrow: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Typography component="div" variant="caption" gutterBottom sx={{ mb: 2, px: 1,fontFamily:"Kollektif"}}>
                  {circle.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
            <CardMedia
              component="img"
              // sx={{ height: 300,  }}
              image={circle.img}
              alt="cacao circle"
            />
            </Box>
          </Grid> 
        </Grid>
      </Box>
    </Box>


    {/* What is in the cocoa brew*/}
    <Box sx={{background: '#975A35', color: 'white', p: 3}}>
    <HeaderTitle title={brew.header}/>
      <Box sx={{ flexGrow: 1, mt: 4, }}>
        <Grid 
        container 
        spacing={{ xs: 1, md: 2 }} 
        columns={{ xs: 12, sm: 12, md: 12 }} 
        sx={{ pb: 3}}
        >
          <Grid item xs={5}>
            <Box>
            <CardMedia
              component="img"
              // sx={{ height: 300,  }}
              image={brew.img}
              alt="cacoa brew"
            />
            </Box>
          </Grid> 
          
          <Grid item xs={7}  sx={{}}>
            <Box sx={{height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
              <Box sx={{textAlign: 'start', flexGrow: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Typography component="div" variant="caption" gutterBottom sx={{ mb: 2, px: 1,fontFamily:"KollektifBold"}}>
                  {brew.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    </Box>

    <Box sx={{height: '50vh'}}>
      <Box sx={{position: 'relative', background: '#1c310a', color: 'white'}}>
        <Box sx={{textAlign: 'center', height: 100, display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Typography component="div" variant="" sx={{fontWeight: 700,fontFamily:"KollektifBold"}}>{subHeader}</Typography>
        </Box>
        <Box sx={{ position: 'absolute', bottom: -17, left: '50%', transform: 'translateX(-50%)', zIndex: 9999,}}>
            <FoxyButton
              fullWidth={false}
              variant="contained" 
              label={btnText} 
              backgroundColor={'#c8bea9'}
              hoverBackgroundColor={'#c8bea9'}
              height={'initial'}
              width={'initial'}
              sx={{
                borderRadius: 5,
                fontSize:{xs: 12, md: 15},
                color: 'white',
                fontWeight: 700,
                boxShadow: '-7px -11px 20px 20px rgb(201 200 22 / 20%), inset 0px 0px 20px 0px rgb(255 244 204), 0px 1px 5px 0px rgb(226 214 180)'
              }}
            />
        </Box>
      </Box>
    </Box>
  </div>
)};


export default CacaoCircles;
