import React from 'react';
import styles from './Shop.module.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useDataCustomHook} from '../../Data/data';

const Shop = () => {
  const data = useDataCustomHook();
  const {shop: {img, header, subHeader}} = data;
  
  return(
  <div className={styles.Shop}>
    <Container maxWidth="lg">
      <CardMedia>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="800"
            image={img}
            alt="foxy brand"
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 100,
              textAlign:'center',
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: 'white',
              padding: '0px',
            }}
          >
            <Typography variant="h5" sx={{fontFamily:"KollektifBold"}}>{header}</Typography>
            <Typography variant="body2" sx={{fontFamily:"KollektifBold"}}>{subHeader}</Typography>
          </Box>
        </Box>
      </CardMedia>
    </Container>
  </div>
)};



export default Shop;
