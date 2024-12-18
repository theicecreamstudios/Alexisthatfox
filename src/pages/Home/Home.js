import React from "react";
import styles from "./Home.module.css";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import FoxyButton from "../../components/FoxyButton/FoxyButton";
import CardContent from "@mui/material/CardContent";
import Brands from "../../components/Brands/Brands";
import { useDataCustomHook } from "../../Data/data";
import { useNavigate } from "react-router";

const Home = () => {
  const data = useDataCustomHook();
  const navigate = useNavigate();
  const {
    home: {
      jumbotron: { foxyImg, header, subHeader, bttnText, description },
    },
  } = data;

  return (
    <Box
      className={styles.Home}
      sx={{
        height: { xs: "initial", sm: "calc(100vh - 100px)" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          px: 2,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: 3,
            border: "none",
            borderShadow: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "initial" },
              borderShadow: "none",
              alignItems: { xs: "center", md: "center" },
            }}
          >
            <Box sx={{ px: 1 }}>
              <CardMedia
                component="img"
                sx={{
                  width: { xs: 300, md: 400 },
                  height: { xs: 300, md: 400 },
                  borderRadius: "50%",
                }}
                image={foxyImg}
                alt="Foxy"
              />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", maxWidth: "md" }}
            >
              <CardContent sx={{ flex: "1 0 auto", textAlign: "center" }}>
                <Typography
                  component="div"
                  variant="h3"
                  sx={{
                    color: "#8e4e32",
                    fontFamily: "Tenor Sans, sans-serif",
                  }}
                >
                  {" "}
                  {header}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    px: { xs: 1, sm: 2 },
                    fontFamily: "Tenor Sans, sans-serif",
                    fontSize: { xs: 12, md: 15 },
                    display: { xs: "none", sm: "block" },
                    mt: 3,
                    color: "#94998a",
                  }}
                >
                  {subHeader}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  textAlign: "center",
                  display: { xs: "none", md: "block" },
                }}
              >
                {description.map((text) => (
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      fontSize: 15,
                      fontFamily: "balthazar",
                      mb: 2,
                    }}
                  >
                    {text}
                  </Typography>
                ))}

                <FoxyButton
                  fullWidth={false}
                  variant="contained"
                  label={bttnText}
                  backgroundColor={"#1c310a"}
                  hoverBackgroundColor={"#1c310a"}
                  height={"initial"}
                  sx={{
                    width: 150,
                    borderRadius: 5,
                    fontSize: 15,
                    color: "white",
                    fontFamily: "balthazar",
                    fontWeight: 700,
                  }}
                  onClick={() => navigate("/meet-me")}
                />
              </Box>
            </Box>
          </Box>

          {/* Small devices */}
          <Box
            sx={{ textAlign: "center", display: { xs: "block", md: "none" } }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                mt: 3,
                px: 2,
                fontFamily: "Tenor Sans, sans-serif",
                fontSize: { xs: 12, md: 15 },
                display: { xs: "block", sm: "none" },
                color: "#94998a",
              }}
            >
              {subHeader}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              sx={{
                fontSize: 15,
                fontFamily: "balthazar",
                fontWeight: "bold",
                p: 3,
              }}
            >
              {description}
            </Typography>
            <FoxyButton
              fullWidth={false}
              variant="contained"
              label={bttnText}
              backgroundColor={"#1c310a"}
              hoverBackgroundColor={"#1c310a"}
              height={"initial"}
              sx={{
                width: 150,
                borderRadius: 5,
                fontSize: 15,
                color: "white",
                fontWeight: 700,
                fontFamily: "balthazar",
              }}
              onClick={() => navigate("/meet-me")}
            />
          </Box>
        </Box>
      </Box>
      <Brands />
    </Box>
  );
};

export default Home;
