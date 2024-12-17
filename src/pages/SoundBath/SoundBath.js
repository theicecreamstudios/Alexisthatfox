import React from "react";
import styles from "./SoundBath.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import FoxyButton from "../../components/FoxyButton/FoxyButton";
import { useDataCustomHook } from "../../Data/data";
import Grid from "@mui/material/Grid";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Socials from "../../components/Socials/Socials";
import { useNavigate } from "react-router-dom";

const SoundBath = () => {
  const data = useDataCustomHook();
  const navigate = useNavigate();

  const {
    soundBath: {
      header,
      image,
      description,
      accessory,
      impacts: {
        impactHeader,
        impactDescription,
        impactSubHeader,
        soundBathBenefits,
      },
      soundBathsImages,
      soundBathsSessions,
      findUs,
      subscribe,
      btnText,
      btnTextLink,
      state,
    },
  } = data;
  return (
    <div className={styles.SoundBath}>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            height: { xs: "30vh", md: "35vh", lg: "40vh" },
            background: "#1e3706",
            textAlign: "center",
          }}
        >
          <Box sx={{ mt: 1, position: "absolute" }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: 100, sm: 120, md: 200 },
                opacity: 0.6,
              }}
              image={accessory}
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
                width: { xs: 100, sm: 120, md: 200 },
                opacity: 0.6,
              }}
              image={accessory}
              alt="Foxy"
            />
          </Box>
          <Typography
            variant="h2"
            sx={{ py: 5, mb: 0, fontFamily: "Italiana", color: "#FFFFFF" }}
          >
            {header}
          </Typography>
        </Box>

        <CardMedia
          component="img"
          sx={{
            width: { xs: 200, sm: 300 },
            height: { xs: 200, sm: 300 },
            borderRadius: "50%",
            m: "auto",
            mt: { xs: "-90px", sm: "-140px" },
          }}
          image={image}
          alt="Foxy"
        />
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              width: { xs: "85%", md: "70%" },
              m: "auto",
              fontFamily: "balthazar",
              fontSize: "16px",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="90%"
          position="relative"
          margin="auto"
          sx={{ mt: 5 }}
        >
          <ArrowLeftIcon sx={{ mr: -1.5 }} />
          {/* Connecting Line */}
          <Box flex="1" height="2px" bgcolor="black"></Box>

          {/* Right Arrow */}
          <ArrowRightIcon sx={{ ml: -1.5 }} />
        </Box>
        <br />
        {/* impact */}
        <Box sx={{ pb: 5 }}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              m: "auto",
              fontFamily: "balthazar",
              fontSize: "2.0rem",
            }}
          >
            {impactHeader.toUpperCase()}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mt: 1,
              fontFamily: "balthazar",
              fontSize: "16px",
            }}
          >
            {impactDescription.toUpperCase()}
          </Typography>
          <br />
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              mt: -2,
              fontFamily: "balthazar",
              fontSize: "1.5rem",
            }}
          >
            {impactSubHeader.toUpperCase()}
          </Typography>
          <br />
          {soundBathBenefits.map((el, index) => (
            <Typography
              key={`${el.heading}-${index}`} // Ensure uniqueness
              component="div"
              variant="body2"
              gutterBottom
              sx={{
                p: 1,
                // fontSize: "0.8rem",
                fontSize: "16px",
                fontFamily: "balthazar",
              }}
            >
              <span style={{ marginRight: 5 }}> * </span>
              <span style={{ flexGrow: 1 }}>
                <span>{el.heading}: </span>
                <span>{el.content}</span>
              </span>
            </Typography>
          ))}
        </Box>
      </Container>
      <Box sx={{ flexGrow: 1, background: "#9b947d", p: 2, mt: 5 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {soundBathsImages.map((el, index) => (
              <Grid item xs={12} sm={12} md={4} key={`soundbath_img_${index}`}>
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: 200, sm: 300 },
                    height: { xs: 200, sm: 300 },
                    margin: "auto",
                    borderRadius: "50%",
                  }}
                  image={el}
                  alt="Foxy"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, p: 2, pb: 4 }}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 12, sm: 12, md: 12 }}
            >
              {soundBathsSessions.map((session) => (
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        textAlign: "center",
                        fontFamily: "Balthazar",
                        fontSize: "16px",
                      }}
                    >
                      {session.type}
                    </Typography>
                    {session.pricing.map((el) => (
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "center",
                          fontFamily: "balthazar",
                        }}
                        key={el}
                      >
                        {el}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              width: 350,
              fontFamily: "balthazar",
              fontSize: "16px",
              m: "auto",
              pb: 1,
            }}
          >
            {findUs}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="90%"
          position="relative"
          margin="auto"
          sx={{ mt: 5 }}
        >
          <ArrowLeftIcon sx={{ mr: -1.5 }} />
          {/* Connecting Line */}
          <Box flex="1" height="2px" bgcolor="black"></Box>

          {/* Right Arrow */}
          <ArrowRightIcon sx={{ ml: -1.5 }} />
        </Box>
        <br />
        {subscribe.map((el) => (
          <Box
            key={el}
            sx={{
              textAlign: "center",
              mt: -1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: 13,
                fontFamily: "balthazar",
              }}
            >
              {el.toUpperCase()}
            </Typography>
          </Box>
        ))}
        <Box sx={{ my: 1 }}>
          <Socials />
        </Box>
        <Box sx={{ textAlign: "center", mt: 2, mb: 2 }}>
          <FoxyButton
            fullWidth={false}
            variant="contained"
            label={btnText}
            backgroundColor={"#9C5632"}
            hoverBackgroundColor={"#9C5632"}
            height={"initial"}
            sx={{
              width: 170,
              borderRadius: 5,
              fontSize: 15,
              color: "white",
              fontFamily: "balthazar",
            }}
            onClick={() =>
              navigate(btnTextLink, {
                state: { defaultInterest: state },
              })
            }
          />
        </Box>
      </Container>
    </div>
  );
};

export default SoundBath;
