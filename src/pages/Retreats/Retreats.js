import React from 'react';
import styles from './Retreats.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import FoxyButton from '../../components/FoxyButton/FoxyButton';
import {useDataCustomHook} from '../../Data/data';



const positions = [
  { top: 0, left: 0 },
  { top: 0, right: 0 },
  { bottom: 0, left: 0 },
  { bottom: 0, right: 0 }
];


const Retreats = () => {
  const data = useDataCustomHook();
  const {retreats: {jumbotron, retreat:{header, healing, girlsTrip, couples, upcoming, subText}, memories, sponsor}} = data;
  
  return(
  <div className={styles.Contact}>
    <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ position: 'relative'  }}>
          <Box sx={{height: {xs:'30vh', md: '25vh'}, bgcolor: '#1e3706', position: 'relative',
        }}>
            <Box sx={{position: 'absolute', left: 0}}>
              <CardMedia
                component="img"
                sx={{ 
                  width: {xs: 150, md: 155},
                  height: {xs:'29vh', md: '25vh'}
                  // margin: 'auto'
                  }}
                image={jumbotron.icon}
                alt="Foxy"
              />
            </Box>
            <Box sx={{ 
              color: 'white',
              textAlign: 'center', 
              position: 'absolute', left: '50%', top: 4, transform: 'translateX(-50%)',
              
            }}>
          
              <Typography variant="h2" sx={{my: 2, mb:0, fontFamily:"BDSans"}}>{jumbotron.header}</Typography>
              <Typography variant="body2" sx={{color: '#955b35', fontWeight: 700,fontFamily:"KollektifBold"}}>{jumbotron.subHeader}</Typography>
            </Box>
          </Box>
          <Box sx={{width: {xs: '70%', lg:'50%'}, position: 'absolute', left: '50%', transform: 'translateX(-50%)', background: 'white', p: 1, mt: {xs: -5, sm: -9}}}>
        <Box sx={{
          // backgroundColor: '#FADD76',
          color: 'black',
          p: 3,
          height: {xs:'27vh', md: '40vh'}
        }}
        >
          <video width="100%" height="100%" controls autoPlay muted loop>
            <source src={jumbotron.videoSrc} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </Box>
          </Box>
        </Box>
        <Box sx={{ mt: {xs:'27vh', md: '40vh'} }}>
          <Typography variant="body2" sx={{textAlign: 'center', width: {xs: '85%', md: '70%'}, m: 'auto',fontFamily:"Kollektif"}}>
           {jumbotron.description}
          </Typography>

        </Box>
        <Box sx={{my: 5}}>
          <Typography variant="h1" sx={{textAlign: 'center', m: 'auto',fontFamily:"BDSans"}}>
            {header}
          </Typography>
        </Box>

        <Box sx={{background: '#955B35', mb: 5, p: 5, color:'white' }}>
          <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', mb: 3}}>
            <Typography component="div" variant="h1" sx={{ fontFamily:"BDSans", mb: {xs: 2, sm: -3}, textAlign: 'center'}}>{healing.header}</Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: {xs: 'column', sm: 'row'}
            }}>
              <Box>
                <CardMedia
                      component="img"
                      sx={{ 
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        margin: 'auto'
                        }}
                      image={healing.img}
                      alt="Foxy"
                    />

              </Box>
                   <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}, color:'white',fontFamily:"KollektifBold"}}>
                    {healing.description}
                  </Typography>

            </Box>

          </Box>

          {/* Girls Retreat */}
          <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography component="div" variant="h1" sx={{ fontFamily:"BDSans", mb: {xs: 2, sm: -3}, textAlign: 'center'}}>{girlsTrip.header}</Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: {xs: 'column-reverse', sm: 'row'}
            }}>
              <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15}, color:'white',fontFamily:"KollektifBold"}}>
              {girlsTrip.description}
              </Typography>
              <Box>
                <CardMedia
                      component="img"
                      sx={{ 
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        margin: 'auto'
                        }}
                      image={girlsTrip.img}
                      alt="Foxy"
                    />

              </Box>

            </Box>

          </Box>
        </Box>

          <Box sx={{}}>
              <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", mb: 3, textAlign: 'center', fontWeight: 700, fontSize: 30}}>{couples.header}</Typography>
            <Box sx={{ display: {xs: 'block', sm: 'flex'}, border: 'none', borderShadow: 'none', alignItems: {xs: 'center', md: 'flex-start'} }}>
              <Box sx={{px: 1, textAlign: 'center',position:'relative'}}>
                  <CardMedia
                      component="img"
                      sx={{ 
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        margin: 'auto'
                        }}
                      image={couples.img}
                      alt="Foxy"
                    />
                   <Box sx={{
                      position:'absolute',
                      top:0,
                      left:0,
                   }}>
                     <Typography variant="body1"  component="div" sx={{fontSize: {xs: 8, md: 12}, backgroundColor:'green', 
                     borderRadius:1,
                     p:1,
                     fontFamily:"Kollektif"}}>
                      {couples.tx}
                    </Typography>
                   <CardMedia
                      component="img"
                      sx={{ 
                        width: 80,
                        height: 80,
                        
                        }}
                      image={couples.img2}
                      alt="Foxy"
                    />
                   </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                  <CardContent sx={{ flex: '1 0 auto', textAlign: 'start' }}>
                    <Typography variant="body1"  component="div" sx={{mt: 3, px: 2, fontSize: {xs: 12, md: 15},fontFamily:"Kollektif"}}>
                      {couples.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Box>


          {/* UpComing Retreat */}
          <Box sx={{ flexGrow: 1, my: 5 }}>

          <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", mb: 8, textAlign: 'center', fontWeight: 700, fontSize: 30}}>{upcoming.header}</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
              {upcoming.retreats.map((el, i) => <Grid item xs={2} sm={6} md={3} key={`Retreat_${i}`} >
                  <Box>
                  <CardMedia
                  
                      component="img"
                      sx={{ 
                        width: {xs: '100%', sm: 250},
                        margin: 'auto',
                        cursor: 'pointer'
                        }}
                      image={el.img}
                      alt="Retreat"
                    />
                  </Box>
                </Grid>)}
                
            </Grid>

            <Typography component="div" variant="h2" sx={{ fontFamily:"BDSans", my: 9, mb: 15, textAlign: 'center'}}>{subText}</Typography>
          </Box>

          <Box sx={{
            background: '#1E310A', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '52vh',
            my: 5,
            position: 'relative'
            }}>

            <Box sx={{width: 350, p: 3, background: 'white',mt: 2, position: 'relative', transform: 'rotate(10deg)'}}>
            <Typography component="div" variant="body2" sx={{ fontFamily: "Gotu, sans-serif", mt: -3, textAlign: 'center', fontWeight: 700, fontSize: 20, color: 'salmon'}}>{memories.header}</Typography>
              {positions.map((position, index) => (
                <Box
                  key={`pin_${index}`}
                  sx={{
                    position: 'absolute',
                    ...position
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ 
                      width: 30,
                      margin: 'auto'
                    }}
                    image={memories.pinIcon} 
                    alt="pin"
                  />
                </Box>
              ))}
              <CardMedia
                component="img"
                sx={{
                  margin: 'auto'
                  }}
                image={memories.img}
                alt="Retreat"
              />
            </Box>
            
            <Box sx={{p: 3, position: 'absolute', bottom: -10, right: 0}}>
              <FoxyButton
                fullWidth={false}
                variant="contained" 
                label={memories.link.btnText} 
                backgroundColor={'#955B35'}
                hoverBackgroundColor={'#955B35'}
                height={'initial'}
                sx={{
                  width: 250,
                  fontSize: '1rem',
                  color: 'white',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              />
              <CardMedia
                component="img"
                sx={{ 
                  width: 50,
                  margin: 'auto',
                  position: 'absolute',
                  right: 0,
                  bottom: '-20px',
                  transform: 'rotate(347deg)'
                  }}
                image={memories.handIcon}
                alt="Retreat"
              />
            </Box>
          </Box>

          <Box sx={{mb: 4}}>
            <Typography component="div" variant="h2" sx={{ fontFamily:"BDSans", mt: -3, textAlign: 'center'}}>
              {sponsor.header}
            </Typography>
            <Typography component="div" variant="body2" sx={{  p: 3, pt: 1,fontFamily:"KollektifBold"}}>
              {sponsor.description} <a href= {`mailto: ${sponsor.email}`} style={{color: 'inherit'}}> {sponsor.email} </a>
            </Typography>
            <Box sx={{textAlign: 'center'}}>
              <FoxyButton
                fullWidth={false}
                variant="contained" 
                label={sponsor.btnText} 
                backgroundColor={'#312813'}
                hoverBackgroundColor={'#312813'}
                height={'initial'}
                sx={{
                  width: 300,
                  borderRadius: 5,
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 700,
                }}
              />
            </Box>
          </Box>
      </Container>
  </div>
  )
};

export default Retreats;
