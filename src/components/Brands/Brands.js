// credit : https://codesandbox.io/p/sandbox/infinite-horizontal-auto-scroll-y82f8?file=%2Fsrc%2Fstyles.css%3A43%2C1
import React from 'react';
import styles from './Brands.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useDataCustomHook} from '../../Data/data';




const Brands = ({ speed = 25000 }) => {
  const data = useDataCustomHook();
  const {home: {brand: {images, header}}} = data;

  return(
  <Box className={styles.Brands} sx={{background: '#F7F7F7', position: 'relative'}}>
       <Typography variant="h6" sx={{
        textAlign: 'center',
        py: 2
      }}>{header}</Typography>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage}/>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage}/>
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage}/>
              </div>
            ))}
          </section>
        </div>
      </div>
  </Box>
)};


export default Brands;
