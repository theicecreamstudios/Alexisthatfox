import React from "react";
import styles from "./CacaoCircles.module.css";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import FoxyButton from "../../components/FoxyButton/FoxyButton";
import { useDataCustomHook } from "../../Data/data";
import { useNavigate } from "react-router-dom";

const CacaoCircles = () => {
  const data = useDataCustomHook();
  const navigate = useNavigate();
  const {
    cacaoCircle: {
      healer,
      circle,
      brew,
      subHeader,
      btnText,
      btnTextLink,
      state,
    },
  } = data;
  return (
    <div className={styles.CacaoCircles}>
      <CssBaseline />
      {/* <Container maxWidth="xl"> */}

      {/* CACOA HEALER */}
      <Box
        sx={{
          background: "#312813",
          color: "white",
          py: 5,
          px: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* COCOA HEAALER */}
        <Box
          sx={{
            position: "absolute",
            top: 0, // Align image flush with the top of the viewport or container
            right: 0, // Keep it aligned to the right
            transformOrigin: "top right",
          }}
        >
          <CardMedia
            component="img"
            image={healer.accessory}
            alt="cacao healer"
            sx={{
              opacity: 0.6,
              height: { xs: "80px", sm: "100px", md: "120px" }, // Adjust size as needed
              width: "auto", // Maintain aspect ratio
              maxWidth: "100%", // Prevent overflow
            }}
          />
        </Box>
        <HeaderTitle title={healer.header} />

        <Box sx={{ flexGrow: 1, mt: 4, display: { xs: "none", md: "block" } }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ pb: 3 }}
          >
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                display: { xs: "none", sm: "block" },
                position: "relative", // Makes it easier to position the image
                paddingTop: 0, // Removes any unwanted top padding
                paddingBottom: 0, // Removes bottom padding
              }}
            >
              <Box
                sx={{
                  position: "absolute", // Allow positioning within the grid item
                  top: -62, // Align the image flush to the top of its container
                  left: -10, // Align the image to the left
                  right: 0, // Stretch the image across the full width
                  bottom: 0, // Ensure the image reaches the bottom of its container
                  width: "100%", // Make sure it takes full width
                  height: "100%", // Make it fill the container height
                }}
              >
                <CardMedia
                  component="img"
                  image={healer.img}
                  alt="cacoa healer"
                  sx={{
                    width: "100%", // Stretch the image to fill its container
                    height: "auto", // Maintain aspect ratio
                    borderTopRightRadius: "50%", // Keep rounded corners
                    borderTopLeftRadius: "50%", // Keep rounded corners
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* Your text or other content */}
                {/* </Box>
    </Grid>
  </Grid>
</Box> */}

                <Box sx={{ textAlign: "flex-start" }}>
                  {healer.description.map((el) => (
                    <Typography
                      key={el}
                      variant="body2"
                      gutterBottom
                      sx={{ mb: 2, px: 1, fontFamily: "balthazar" }}
                    >
                      {el}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Small devices */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            p: 3,
            mb: 8,
            background: "#312813",
            color: "white",
          }}
        >
          <Box sx={{ m: "auto", mb: 3 }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                mx: 1,
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
              image={healer.img}
              alt="cacoa healer"
            />
          </Box>
          <Box>
            <Typography
              component="div"
              variant="body2"
              gutterBottom
              sx={{
                mb: 3,
                fontFamily: "balthazar",
                fontSize: { xs: 17, md: 36 },
              }}
            >
              {healer.description.map((el, i) => (
                <React.Fragment key={`Desc${i}`}>
                  {el}
                  <br /> <br />
                </React.Fragment>
              ))}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* CACOA CIRCLE */}
      <Box
        sx={{
          py: 5,
          pl: { xs: "initial", md: 3 },

          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "initial", md: 500 },
        }}
      >
        <HeaderTitle title={circle.header} />

        <Box sx={{ flexGrow: 1, mt: 4, display: { xs: "none", md: "block" } }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ pb: 3 }}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* Your text or other content */}

                <Box sx={{ textAlign: "flex-start" }}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ mb: 2, px: 1, fontFamily: "balthazar" }}
                  >
                    {circle.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                display: { xs: "none", sm: "block" },
                position: "relative", // Makes it easier to position the image
                paddingTop: 0, // Removes any unwanted top padding
                paddingBottom: 0, // Removes bottom padding
              }}
            >
              <Box
                sx={{
                  position: "absolute", // Allow positioning within the grid item
                  top: -62, // Align the image flush to the top of its container
                  right: -10, // Align the image to the right
                  left: 0, // Stretch the image across the full width
                  bottom: 0, // Ensure the image reaches the bottom of its container
                  width: "100%", // Make sure it takes full width
                  height: { xs: "100%", md: "20vh" }, // Make it fill the container height
                }}
              >
                <CardMedia
                  component="img"
                  image={circle.img}
                  alt="cacoa healer"
                  sx={{
                    width: "100%", // Stretch the image to fill its container
                    height: "auto", // Maintain aspect ratio
                    borderTopRightRadius: "50%", // Keep rounded corners
                    borderTopLeftRadius: "50%", // Keep rounded corners
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Small devices */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            p: 3,
            mb: 8,
          }}
        >
          <Box sx={{ m: "auto", mb: 3 }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                mx: 1,
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
              image={circle.img}
              alt="cacoa healer"
            />
          </Box>
          <Box>
            <Typography
              component="div"
              variant="body2"
              gutterBottom
              sx={{
                mb: 3,
                fontFamily: "balthazar",
                fontSize: { xs: 17, md: 36 },
                textAlign: "center",
              }}
            >
              {circle.description}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* CACOA BREW */}
      <Box
        sx={{
          background: "#975A35",
          color: "white",
          py: 5,
          px: 3,
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "initial", md: 500 },
        }}
      >
        <HeaderTitle title={brew.header} />

        <Box sx={{ flexGrow: 1, mt: 4, display: { xs: "none", md: "block" } }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{ pb: 3 }}
          >
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              sx={{
                display: { xs: "none", sm: "block" },
                position: "relative", // Makes it easier to position the image
                paddingTop: 0, // Removes any unwanted top padding
                paddingBottom: 0, // Removes bottom padding
              }}
            >
              <Box
                sx={{
                  position: "absolute", // Allow positioning within the grid item
                  top: -62, // Align the image flush to the top of its container
                  left: -10, // Align the image to the left
                  right: 0, // Stretch the image across the full width
                  bottom: 0, // Ensure the image reaches the bottom of its container
                  width: "100%", // Make sure it takes full width
                  height: "100%", // Make it fill the container height
                }}
              >
                <CardMedia
                  component="img"
                  image={brew.img}
                  alt="cacoa brew"
                  sx={{
                    width: "100%", // Stretch the image to fill its container
                    height: "auto", // Maintain aspect ratio
                    borderTopRightRadius: "50%", // Keep rounded corners
                    borderTopLeftRadius: "50%", // Keep rounded corners
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={9}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ textAlign: "flex-start" }}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ mb: 2, px: 1, fontFamily: "balthazar" }}
                  >
                    {brew.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Small devices */}
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            p: 3,
            mb: 8,
            background: "#975A35",
            color: "white",
          }}
        >
          <Box sx={{ m: "auto", mb: 3 }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                mx: 1,
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
              image={brew.img}
              alt="cacoa brew"
            />
          </Box>
          <Box>
            <Typography
              component="div"
              variant="body2"
              gutterBottom
              sx={{
                mb: 3,
                fontFamily: "balthazar",
                fontSize: { xs: 17, md: 36 },
                textAlign: "center",
              }}
            >
              {brew.description}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ pt: 10, height: "40vh" }}>
        <Box sx={{ position: "relative", background: "#CFC5B3" }}>
          <Box
            sx={{
              textAlign: "center",
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              variant=""
              sx={{ fontFamily: "balthazar" }}
            >
              {subHeader}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: -17,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
            }}
          >
            <FoxyButton
              fullWidth={false}
              variant="contained"
              label={btnText.toUpperCase()}
              backgroundColor={"#1C310A"}
              hoverBackgroundColor={"#1C310A"}
              height={"initial"}
              width={"initial"}
              sx={{
                borderRadius: 5,
                fontSize: 12,
                color: "white",
                fontWeight: 700,
                fontFamily: "balthazar",
              }}
              onClick={() =>
                navigate(btnTextLink, {
                  state: { defaultInterest: state },
                })
              }
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CacaoCircles;
