import React from "react";
import styles from "./About.module.css";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { useDataCustomHook } from "../../Data/data";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Socials from "../../components/Socials/Socials";
import broomStick from "../../assets/accessories/broomstick.png";

const About = () => {
  const navigate = useNavigate();
  const data = useDataCustomHook();
  const {
    meetAlexis: {
      header,
      foxyImg,
      about,
      subHeader,
      services,
      exploreService,
      media: { mediaHeader, accessory },
    },
  } = data;

  const handlePageNavigation = (link, state) => {
    navigate(link, {
      state: { defaultInterest: state },
    });
  };

  return (
    <Box className={styles.About}>
      <CssBaseline />

      <Box
        sx={{
          position: "absolute",
          top: "50px", // Adjust the distance from the top
          left: { xs: "350px", md: "200px" },
          zIndex: 10, // Ensure it appears above other content
        }}
      >
        <CardMedia
          component="img"
          image={broomStick} // Replace with your image variable or URL
          alt="Small Image"
          sx={{
            width: "150px", // Adjust the size of the image
            height: "150px", // Keep the image square, or omit for natural proportions
            borderRadius: "0%", // Makes the image circular (optional)
            display: { xs: "none", sm: "block" },
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, mt: 4, display: { xs: "none", sm: "block" } }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ pb: 3 }}
          >
            <Grid item xs={12} sm={6} md={9} sx={{}}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <HeaderTitle title={header} />
                <Box sx={{ textAlign: "center" }}>
                  {about.map((el, i) => (
                    <Typography
                      key={`about_${i}`}
                      component="div"
                      variant="body2"
                      gutterBottom
                      sx={{ mb: 3, px: 3, fontFamily: "balthazar" }}
                    >
                      {el}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Box>
                <CardMedia
                  component="img"
                  image={foxyImg}
                  alt="Foxy"
                  sx={{
                    borderTopRightRadius: "48%",
                    borderTopLeftRadius: "48%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* small screen */}
        <Box sx={{ display: { xs: "block", sm: "none" }, px: 3, mb: 8 }}>
          <Box sx={{ float: "right", width: "50%", mt: 3 }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                mx: 1,
                borderTopRightRadius: "48%",
                borderTopLeftRadius: "48%",
              }}
              image={foxyImg}
              alt="Foxy"
            />
          </Box>
          <Box>
            <HeaderTitle title={header} />

            <Typography
              component="div"
              variant="body2"
              gutterBottom
              sx={{ mb: 3, fontFamily: "balthazar" }}
            >
              {about.map((el) => (
                <React.Fragment key={el}>
                  {el}
                  <br /> <br />
                </React.Fragment>
              ))}
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box sx={{ flexGrow: 1, position: "relative", background: "#955B35" }}>
        <Box
          sx={{
            width: { xs: 300, sm: 400 },
            position: "absolute",
            top: -35,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            background: "#ffffff",
            p: 0.4,
          }}
        >
          <Typography
            component="div"
            variant="h3"
            sx={{
              // px: 2,
              border: "2px solid #D7D3CA",
              fontFamily: "Italiana, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              textAlign: "center",
              fontSize: { xs: 40, sm: 50 },
            }}
          >
            {subHeader}
          </Typography>
        </Box>
        <Container>
          <Box sx={{ flexGrow: 1, py: 5, px: 3 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 1 }}
              columns={{ xs: 4, sm: 12, md: 12 }}
            >
              <Grid item xs={12} md={6}>
                <Container maxWidth="sm">
                  <Box sx={{ flexGrow: 1, py: 3, px: 3 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 4 }}
                      columns={{ xs: 4, sm: 12, md: 12 }}
                    >
                      {services.withDesc.map((el, index) => (
                        <Grid item xs={2} sm={6} key={el.primary}>
                          <Card
                            sx={{
                              background: "#d4a481",
                              color: "#ffffff",
                              borderRadius: { xs: "56%", sm: "50%", md: "56%" },
                            }}
                          >
                            <CardContent
                              sx={{
                                height: { xs: 120, sm: 180 },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: el.secondary
                                  ? "center"
                                  : "center",
                                alignItems: "center",
                                py: 3,
                                wordWrap: "wrap",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handlePageNavigation(el.link, el.state)
                              }
                            >
                              <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                  textAlign: "center",
                                  textWrap: "wrap",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "1.3rem",
                                    md: "0.9rem",
                                    lg: "1.3rem",
                                  },
                                  fontFamily: "balthazar",
                                  color: "#ffffff",
                                  borderRadius: "45%",
                                }}
                              >
                                {el.primary}
                              </Typography>
                              {el.secondary && (
                                <Typography
                                  variant="h6"
                                  component="div"
                                  sx={{
                                    textAlign: "center",
                                    mt: 2,
                                    fontSize: { xs: "0.6rem", sm: "1rem" },
                                    fontFamily: "balthazar",
                                    color: "#ffffff",
                                  }}
                                >
                                  {el.secondary}
                                </Typography>
                              )}
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                      <Grid item xs={12} sm={12}>
                        <Box sx={{ width: "inherit" }}>
                          <Typography
                            variant="caption"
                            component="div"
                            sx={{
                              color: "#ffffff",
                              fontFamily: "balthazar",
                              fontWeight: 700,
                            }}
                          >
                            {exploreService}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </Grid>

              <Grid item xs={12} md={6}>
                <Container maxWidth="sm">
                  <Box sx={{ flexGrow: 1, py: 3, px: 3 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 4 }}
                      columns={{ xs: 4, sm: 12, md: 12 }}
                    >
                      {services.withoutDesc.map((el, index) => (
                        <Grid item xs={2} sm={6} key={el.primary}>
                          <Card
                            sx={{
                              background: "#d4a481",
                              color: "#ffffff",
                              borderRadius: {
                                xs: "156%",
                                sm: "150%",
                                md: "56%",
                              },
                            }}
                          >
                            <CardContent
                              sx={{
                                height: { xs: 120, sm: 180 },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: el.secondary
                                  ? "center"
                                  : "center",
                                alignItems: "center",
                                py: 3,
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handlePageNavigation(el.link, el.state)
                              }
                            >
                              <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                  textAlign: "center",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "1.3rem",
                                    md: "0.9rem",
                                    lg: "1.3rem",
                                  },
                                  fontFamily: "balthazar",
                                  color: "#ffffff",
                                  p: 3,
                                }}
                              >
                                {el.primary.toUpperCase()}
                              </Typography>
                              {el.secondary && (
                                <Typography
                                  variant="h6"
                                  component="div"
                                  sx={{
                                    width: 170,
                                    textAlign: "center",
                                    mt: 2,
                                    fontSize: { xs: "0.6rem", sm: "1rem" },
                                    fontFamily: "balthazar",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    p: 3,
                                  }}
                                >
                                  {el.secondary}
                                </Typography>
                              )}
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                      {services.withoutDesc.map((el, index) => (
                        <Grid item xs={2} sm={6}>
                          <Box sx={{ width: "inherit" }}>
                            <Typography
                              variant="caption"
                              component="div"
                              sx={{
                                color: "#ffffff",
                                fontFamily: "balthazar",
                                fontWeight: 700,
                              }}
                            >
                              {el.description}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            mb: 4,
          }}
        >
          <img
            src={accessory}
            alt="accessory"
            style={{
              width: "50px",
              transform: "rotate(348deg)",
              marginTop: 8,
            }}
          />
          <Box>
            <Typography
              variant="h2"
              component="div"
              sx={{ fontFamily: "Italiana", fontSize: "40px" }}
            >
              {mediaHeader.toUpperCase()}
            </Typography>
          </Box>
        </Box>
        <Socials />
      </Box>
    </Box>
  );
};

export default About;
