import React from "react";
import styles from "./Events.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useDataCustomHook } from "../../Data/data";
import FoxyButton from "../../components/FoxyButton/FoxyButton";

const Events = () => {
  const data = useDataCustomHook();
  const {
    events: {
      header,
      glitter,
      description,
      btnText,
      btnTextLink,
      img,
      accessory,
    },
  } = data;

  return (
    <div className={styles.Events}>
      <CssBaseline />
      {/* Header Section */}
      <Box
        sx={{
          height: { xs: "30vh", md: "45vh" },
          background: "#1e3706",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Box sx={{ mt: 1, position: "absolute" }}>
          <CardMedia
            component="img"
            sx={{
              width: { xs: 70, sm: 100, md: 200 },
              opacity: 0.6,
            }}
            image={glitter}
            alt="Foxy"
          />
        </Box>
        <Box
          sx={{
            mt: 3,
            position: "absolute",
            right: 0,
            transform: "rotate(93deg)",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: 70, sm: 100, md: 200 },
              opacity: 0.6,
            }}
            image={glitter}
            alt="Foxy"
          />
        </Box>
        <Typography
          variant="h3"
          sx={{
            pt: 2,
            mb: 0,
            color: "#FFFFFF",
            fontFamily: "Italiana",
            fontSize: { sm: "2rem", md: "4rem" },
            "@media (max-width: 395px)": { fontSize: "2rem" },
            "@media (max-width: 375px)": { fontSize: "1.8rem" },
          }}
        >
          {header}
        </Typography>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: "-80px", sm: "-100px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "70%", sm: "50%", md: 350 },
            m: "auto",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "50%", md: 200 },
              height: "auto",
              position: "absolute",
              top: -2,
              left: { xs: -17, md: -80 },
              transform: "rotate(348deg)",
            }}
            image={accessory}
            alt="Foxy"
          />

          <CardMedia
            component="img"
            sx={{
              // width: { xs: '70%', sm: '50%', md: 350 },
              height: "auto",
              p: 2,
              background: "white",
            }}
            image={img}
            alt="Foxy"
          />
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <FoxyButton
          fullWidth={false}
          variant="contained"
          label={btnText.toUpperCase()}
          backgroundColor={"#a1653e"}
          hoverBackgroundColor={"#706953"}
          height={"initial"}
          width={"initial"}
          sx={{
            borderRadius: 5,
            fontSize: { xs: 15, md: 18 },
            color: "#FFFFF",
            fontWeight: 700,
            fontFamily: "balthazar",
            px: 5,
          }}
          onClick={() => {
            const newTab = window.open("", "_blank");
            if (newTab) {
              newTab.location.href = btnTextLink;
            }
          }}
        />
      </Box>
    </div>
  );
};

export default Events;
