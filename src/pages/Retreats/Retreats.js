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
import { useDataCustomHook } from '../../Data/data';
import Link from '@mui/material/Link';

const positions = [
  { top: 0, left: 0 },
  { top: 0, right: 0 },
  { bottom: 0, left: 0 },
  { bottom: 0, right: 0 },
];

const SectionHeader = ({ text, subText }) => (
  <Box sx={{ my: 5 }}>
    <Typography variant='h2' sx={{ textAlign: 'center', m: 'auto' }}>
      {text}
    </Typography>
    <Typography variant='h5' sx={{ textAlign: 'center', m: 'auto', mt: -1 }}>
      {subText}
    </Typography>
  </Box>
);
const RetreatCard = ({ header, subHeader, description, img, reverse }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      mb: 5,
    }}
  >
    <SectionHeader text={header} subText={subHeader} />
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: reverse ? 'row-reverse' : 'row',
        },
      }}
    >
      <Box>
        <CardMedia
          component='img'
          sx={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            margin: 'auto',
          }}
          image={img}
          alt='Foxy'
        />
      </Box>
      <Box>
        {description.map((paragraph, index) => (
          <Typography
            variant='body1'
            key={`retreat_description_${index}`}
            sx={{
              mt: 3,
              px: 2,
              fontSize: { xs: 12, md: 15 },
              color: 'white',
              fontFamily: 'KollektifBold',
            }}
          >
            {paragraph}
          </Typography>
        ))}
      </Box>
    </Box>
  </Box>
);

const Retreats = () => {
  const data = useDataCustomHook();
  const {
    retreats: {
      
      jumbotron: {
        icon,
        retreatsHeader,
        description,
        videoSrc,
        subHeader,
        retreatIntroHeader,
        accessory,
      },
      retreat: {
        groupRetreats,
        couplesRetreat: { couples },
        upcoming,
      },
      memories,
      sponsor,
      subText,
      
    },
  } = data;

  return (
    <div className={styles.Contact}>
      <CssBaseline />
      <Box
        sx={{
          height: { xs: '30vh', lg: '35vh' },
          background: '#1e3706',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', left: 10, top: { xs: 15, sm: 20 } }}>
          <CardMedia
            component='img'
            sx={{
              width: { xs: 50, sm: 100, md: 150 },
              height: { xs: 50, sm: 100, md: 150 },
              border: '1px solid gold',
              borderRadius: '50%',
            }}
            image={icon}
            alt='Foxy'
          />
        </Box>
        <Box sx={{ position: 'absolute', right: 10, top: { xs: 15, sm: 20 } }}>
          <Link
            href={accessory.link}
            underline='none'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#FFFFFF',
              fontSize: 10,
            }}
            target="_blank"
          >
            <CardMedia
              component='img'
              sx={{
                width: 50,
                mr: -1.2,
                borderRadius: '50%',
              }}
              image={accessory.icon}
              alt='Foxy'
            />
            {accessory.linkText.toUpperCase()}
          </Link>
        </Box>

        <Typography
          // variant='h2'
          sx={{
            pt: { xs: 7, sm: 5 },
            mb: 0,
            color: '#FFFFFF',
            fontSize: { xs: '2rem', md: '4rem' },
          }}
        >
          {retreatsHeader}
        </Typography>
        <Typography
          variant='body2'
          sx={{ mb: 0, color: '#FFFFFF', fontSize: { xs: 10, md: 12 } }}
        >
          {subHeader.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: 300, sm: 300 },
          height: { xs: 200, sm: 300 },
          m: 'auto',
          mt: { xs: '-80px', sm: '-100px' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <video
          controls
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src={videoSrc} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Container maxWidth='xl'>
        <Box sx={{ mt: 2 }}>
          <Typography
            variant='body2'
            sx={{
              width: { xs: 300, sm: 300 },
              m: 'auto',
              mt: -2,
              mb: 2,
              textAlign: 'center',
            }}
          >
            {retreatIntroHeader}
          </Typography>
          {description.map((text) => (
            <Typography
              key={text}
              variant='body2'
              sx={{
                textAlign: 'center',
                m: 'auto',
                fontFamily: 'Kollektif',
                mb: 2,
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Container>

      {/* retreats */}
      <Box sx={{ background: '#955B35', mb: 5, p: 5, color: 'white' }}>
        {Object.entries(groupRetreats).map(([key, retreat], index) => (
          <Box key={retreat.header}>
            <RetreatCard
              header={retreat.header}
              subHeader={retreat.subHeader}
              description={retreat.description}
              img={retreat.img}
              reverse={index % 2 ? true : false}
            />
          </Box>
        ))}
      </Box>

      <Container maxWidth='xl'>
        {/* Couples */}
        <Box sx={{}}>
          <Typography
            component='div'
            variant='body2'
            sx={{
              fontFamily: 'Gotu, sans-serif',
              mb: 3,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 30,
            }}
          >
            {couples.header}
          </Typography>
          <Box
            sx={{
              border: 'none',
              borderShadow: 'none',
            }}
          >
            <Box sx={{ px: 1, textAlign: 'center', position: 'relative' }}>
              <CardMedia
                component='img'
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  margin: 'auto',
                }}
                image={couples.img}
                alt='Foxy'
              />
            </Box>
            <Box sx={{}}>
              <CardContent sx={{ flex: '1 0 auto', textAlign: 'start' }}>
                {couples.description.map((txt) => (
                  <Typography
                    key={txt}
                    variant='body1'
                    component='div'
                    sx={{
                      mt: 3,
                      px: 2,
                      fontSize: { xs: 12, md: 15 },
                      fontFamily: 'Kollektif',
                    }}
                  >
                    {txt}
                  </Typography>
                ))}
              </CardContent>
            </Box>
          </Box>
        </Box>

        {/* UpComing Retreat */}
        <Box sx={{ flexGrow: 1, my: 5, }}>
          <Typography
            component='div'
            variant='body2'
            sx={{
              fontFamily: 'Gotu, sans-serif',
              mb: 8,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 30,
            }}
          >
            {upcoming.header}
          </Typography>
          <Container maxWidth='md'>
          <Box
            sx={{
              display: 'grid', // Use grid layout
              gap: { xs: 2, md: 2.5 }, // Reduce spacing on medium and larger screens
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)', // 2 items per row on extra-small screens
                sm: 'repeat(3, 1fr)', // 3 items per row on small screens
                md: 'repeat(4, 1fr)', // 4 items per row on medium and larger screens
              },
              mt: 5,
            }}
          >
            {upcoming.retreats.map((item, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  transition: 'transform 0.3s', // Smooth hover transition
                  '&:hover': {
                    animation: 'bounce 0.5s', // Bounce effect on hover
                  },
                  '@keyframes bounce': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-10px)', // Move up slightly
                    },
                  },
                }}
              >
                <CardMedia
                  component='img'
                  sx={{
                    width: { xs: '90%', sm: 150 }, // Maintain the same image size
                    cursor: 'pointer',
                    borderRadius: 2, // Optional: Add slight rounding for aesthetic
                  }}
                  image={item.img}
                  alt={`Item ${index}`}
                />
              </Box>
            ))}
          </Box>
            </Container>
          <Typography
            component='div'
            variant='h3'
            sx={{ my: 9, mb: 5, textAlign: 'center', color: '#9C5733' }}
          >
            {subText}
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          background: '#1E310A',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '52vh',
          mb: 5,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: 350,
            p: 3,
            background: 'white',
            mt: 2,
            position: 'relative',
            transform: 'rotate(10deg)',
          }}
        >
          <Typography
            component='div'
            variant='body2'
            sx={{
              fontFamily: 'Gotu, sans-serif',
              mt: -3,
              textAlign: 'center',
              fontWeight: 700,
              fontSize: 20,
              color: 'salmon',
            }}
          >
            {memories.header}
          </Typography>
          {positions.map((position, index) => (
            <Box
              key={`pin_${index}`}
              sx={{
                position: 'absolute',
                ...position,
              }}
            >
              <CardMedia
                component='img'
                sx={{
                  width: 30,
                  margin: 'auto',
                }}
                image={memories.pinIcon}
                alt='pin'
              />
            </Box>
          ))}
          <CardMedia
            component='img'
            sx={{
              margin: 'auto',
            }}
            image={memories.img}
            alt='Retreat'
          />
        </Box>

        <Box sx={{ p: 3, position: 'absolute', bottom: -10, right: 8 }}>
          <FoxyButton
            fullWidth={false}
            variant='contained'
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
            component='img'
            sx={{
              width: 50,
              margin: 'auto',
              position: 'absolute',
              right: 0,
              bottom: '-20px',
              transform: 'rotate(347deg)',
            }}
            image={memories.handIcon}
            alt='Retreat'
          />
        </Box>
      </Box>
      {/* become a sponsor */}
      <Container maxWidth='xl'>
        <Box sx={{ mb: 4 }}>
          <Typography
            component='div'
            variant='h2'
            sx={{ mt: -3, textAlign: 'center' }}
          >
            {sponsor.header}
          </Typography>
          <Typography
            component='div'
            variant='body2'
            sx={{ p: 3, pt: 1, fontFamily: 'KollektifBold' }}
          >
            {sponsor.description}{' '}
            <a href={`mailto: ${sponsor.email}`} 
            style={{ color: 'inherit' }}
            target='_blank' rel="noreferrer"
            >
              {' '}
              {sponsor.email}{' '}
            </a>
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <FoxyButton
              fullWidth={false}
              variant='contained'
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
              onClick={() => {
                const newTab = window.open('', '_blank');
                if (newTab) {
                  newTab.location.href = `mailto:${sponsor.email}`;
                }
              }}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Retreats;
