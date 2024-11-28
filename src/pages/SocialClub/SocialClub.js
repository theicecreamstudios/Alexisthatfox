import React from 'react';
import styles from './SocialClub.module.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { useDataCustomHook } from '../../Data/data';
import Link from '@mui/material/Link';
import InstagramIcon from '../../components/instagramIcon/instagramIcon';
import { Container, Grid, Typography } from '@mui/material';
import FoxyButton from '../../components/FoxyButton/FoxyButton';

const SocialClub = () => {
  const data = useDataCustomHook();
  const {
    SocialClub: {
      accessory,
      logo,
      header,
      description,
      clubImages,
      foxyMembership: { backgroundImage, icon, membershipHeader, memberships },
    },
  } = data;

  return (
    <div className={styles.SocialClub}>
      <CssBaseline />
      {/* Header Section */}
      <Box
        sx={{
          height: { xs: '35vh' }, // Parent container height
          background: '#DDD1C3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: { xs: '90%', sm: '70%', md: '50%' },
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component='img'
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
            image={logo}
            alt='Foxy'
          />
        </Box>
        <Box sx={{ position: 'absolute', left: 10, top: { xs: 15, sm: 20 } }}>
          <Link
            href={accessory.link}
            underline='none'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { xs: 'flex-start', sm: 'center' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              color: '#727272',
              fontSize: { xs: 9, md: 12 },
            }}
            target='_blank'
          >
            <InstagramIcon />

            <span>{accessory.linkText.toUpperCase()}</span>
          </Link>
        </Box>
      </Box>
      <Container maxWidth='xl'>
        <Box>
          <Typography
            variant='h5'
            sx={{
              textAlign: 'center',
              mt: 1,
              mb: 3,
            }}
          >
            {header.toUpperCase()}
          </Typography>
          {description.map((txt, index) => (
            <Typography
              variant='body2'
              sx={{
                mt: 1,
                mb: 3,
              }}
            >
              {txt}
            </Typography>
          ))}
        </Box>
        
      </Container>
      <Box>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Grid
            container
            spacing={0}
            columnSpacing={0}
            sx={{
              justifyContent: 'center', // Center images within the grid
            }}
          >
            {clubImages.map((image, index) => (
              <Grid item xs={6} md={3} key={`image-${index}`}>
                <Box
                  component='img'
                  src={image}
                  alt={`image-${index}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
            sx={{ position: 'relative', background: '#DDD1C3', color: 'white', height:70, mt: -1}}
          />
      </Box>

      {/* membership */}

      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: { xs: 'cover', md: 'auto' },
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            background: '#ffffffd9',
            width: '100%',
          }}
        >
          <Container>
            <Typography
              variant='h3'
              sx={{
                textAlign: 'center',
                my: 7,
              }}
            >
              {membershipHeader}
            </Typography>

            <Box
              display='flex'
              justifyContent='space-between'
              gap='32px'
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              {/** Reusable Function to Render a Column */}
              {memberships.map((column, columnIndex) => (
                <Box flex='1' key={column.title}>
                  <Typography
                    variant='h3'
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    {column.title}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    ({column.type})
                  </Typography>
                  <Typography variant='h6' sx={{}}>
                    {column.description.toUpperCase()}
                  </Typography>
                  {column.benefits.map((el, index) => (
                    <Typography
                      key={`${el}-${index}`} // Ensure uniqueness
                      component='div'
                      variant='h6'
                      gutterBottom
                      sx={{
                        p: 1,
                        // fontSize: '0.8rem',
                        fontFamily: 'Kollektif',
                        display: 'flex',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span style={{ marginRight: 5 }}> * </span>
                      <span style={{ flexGrow: 1 }}>{el.toUpperCase()}</span>
                    </Typography>
                  ))}
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      mt: 3,
                    }}
                  >
                    {column.note.toUpperCase()}
                  </Typography>

                    {/* Pricing */}
                  <Box flex='1' key={column.pricing.price}
                sx={{
                  textAlign:'center',
                  height: 500,
                  mt: 3
                }}>
                  <Typography variant='h6' sx={{my: 3}}>
                    {column.pricing.note}
                  </Typography>
                  <Typography
                    variant='h3'
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {column.pricing.price}
                  </Typography>
                  <Box
                    sx={{
                      p: 3,
                      position: 'relative', 
                      textAlign: 'center',
                      height: 'auto',
                    }}
                  >
                    {/* Button */}
                    <FoxyButton
                      fullWidth={false}
                      variant='contained'
                      label={column.pricing.btnText}
                      backgroundColor={'#955B35'}
                      hoverBackgroundColor={'#955B35'}
                      height={'initial'}
                      sx={{
                        width: 300,
                        fontSize: '2.5rem',
                        color: 'white',
                        fontWeight: 700,
                        cursor: 'pointer',
                        background: 'linear-gradient(135deg, rgba(191, 149, 63, 0.8), rgba(252, 246, 186, 0.8), rgba(179, 135, 40, 0.8), rgba(251, 245, 183, 0.8), rgba(170, 119, 28, 0.8))',
                        borderRadius: 40
                      }}
                    />

                    {/* Hand Icon */}
                    <CardMedia
                      component='img'
                      sx={{
                        width: 50,
                        position: 'absolute', 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(10px)', 
                        bottom: '-45px', 
                        rotate: '22deg'
                      }}
                      image={icon} 
                      alt='click'
                    />
                  </Box>

                  <Typography
                    variant='h6'
                    sx={{
                      mt: 10
                    }}
                  >
                    {column.pricing.btnMessage}
                  </Typography>
                </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* pricing session */}
      {/* <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: { xs: 'cover', md: 'auto' },
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            background: '#ffffffd9',
            width: '100%',
            mt: 10,
          }}
        >
          <Container>
            <Box
              display='flex'
              justifyContent='space-between'
              gap='32px'
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
             
              {memberships.map((column, columnIndex) => (
                <Box flex='1' key={column.pricing.price}
                sx={{
                  textAlign:'center',
                  height: 500
                }}>
                  <Typography variant='h6' sx={{}}>
                    {column.pricing.note}
                  </Typography>
                  <Typography
                    variant='h3'
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {column.pricing.price}
                  </Typography>
                  <Box
                    sx={{
                      p: 3,
                      position: 'relative', 
                      textAlign: 'center',
                      height: 'auto',
                    }}
                  >
                    <FoxyButton
                      fullWidth={false}
                      variant='contained'
                      label={column.pricing.btnText}
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
                      component='img'
                      sx={{
                        width: 50,
                        position: 'absolute', 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(10px)', 
                        bottom: '-45px', 
                        rotate: '22deg'
                      }}
                      image={icon} 
                      alt='click'
                    />
                  </Box>

                  <Typography
                    variant='h6'
                    sx={{
                      mt: 10
                    }}
                  >
                    {column.pricing.btnMessage}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box> */}
    </div>
  );
};

export default SocialClub;