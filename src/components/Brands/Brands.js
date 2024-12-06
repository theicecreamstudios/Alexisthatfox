// credit : https://codesandbox.io/p/sandbox/infinite-horizontal-auto-scroll-y82f8?file=%2Fsrc%2Fstyles.css%3A43%2C1
import React from "react";
import styles from "./Brands.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDataCustomHook } from "../../Data/data";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Brands = ({ speed = 25000 }) => {
  const data = useDataCustomHook();
  const {
    home: {
      brand: { images, header },
    },
  } = data;

  return (
    <Box className={styles.Brands} sx={{ position: "relative" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="90%"
        position="relative"
        margin="auto"
      >
        <ArrowLeftIcon sx={{ mr: -1.5 }} />
        {/* Connecting Line */}
        <Box flex="1" height="2px" bgcolor="black"></Box>

        {/* Right Arrow */}
        <ArrowRightIcon sx={{ ml: -1.5 }} />
      </Box>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: -1,
          pb: 2,
          fontFamily: "Ovo",
        }}
      >
        {header}
      </Typography>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className={styles.image} key={id}>
                <img src={image} alt={id} className={styles.brandImage} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </Box>
  );
};

export default Brands;
