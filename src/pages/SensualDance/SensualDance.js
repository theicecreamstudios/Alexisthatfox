import React from "react";
import styles from "./SensualDance.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import FoxyButton from "../../components/FoxyButton/FoxyButton";
import { useDataCustomHook } from "../../Data/data";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Toolbar from "@mui/material/Toolbar";

const SensualDance = () => {
  const data = useDataCustomHook();
  const {
    sensualDance: {
      header,
      accessory,
      foxyImg,
      description,
      workshopDescription,
      benefits,
      workshopBenefits,
      subText,
      subImg,
      subHeader,
      bttnText,
      bttnLink,
    },
  } = data;

  const midIndex = Math.ceil(workshopBenefits.length / 2);
  const firstColumn = workshopBenefits.slice(0, midIndex);
  const secondColumn = workshopBenefits.slice(midIndex);

  return (
    <div className={styles.SensualDance}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ mt: 1, position: 'absolute' }}>
          <CardMedia
            component='img'
            sx={{
              width: {xs: 100, sm: 120,  md: 200},
              opacity: 0.6
            }}
            image={accessory}
            alt='Foxy'
          />
        </Box>
        {/* <Box sx={{ mt: 3, position: 'absolute', right: 0, transform: 'rotate(93deg)' }}>
          <CardMedia
            component='img'
            sx={{
              width: {xs: 100, sm: 120,  md: 200},
              opacity: 0.6
            }}
            image={accessory}
            alt='Foxy'
          />
        </Box> */}
        <Box
          sx={{
            background: '#1E310A',
            color: 'white',
            px: { xs: 3, md: 5 },
            pt: { xs: 3, md: 5 },
            pb: 22,
          }}
        >
          <Box
            sx={{
              fontFamily: 'BDSans',
              textAlign: 'center',
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <HeaderTitle title={header} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              px: { md: 2 },
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: -4,
                border: 'none',
                borderShadow: 'none',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  border: 'none',
                  borderShadow: 'none',
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 'md',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Box
                      sx={{
                        fontFamily: 'BDSans',
                        textAlign: 'center',
                        display: { xs: 'block', lg: 'none' },
                      }}
                    >
                      <HeaderTitle title={header} />
                    </Box>
                  </CardContent>

                  <Box
                    sx={{
                      textAlign: "start",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {description.map((text) => (
                      <Typography
                        component="div"
                        variant="body2"
                        gutterBottom
                        sx={{ mb: 2, px: 1, fontFamily: "Ovo" }}
                        key={text}
                      >
                        {text}
                      </Typography>
                    ))}
                    {benefits.map((el) => (
                      <Typography
                        key={el}
                        // component='div'
                        variant="body2"
                        gutterBottom
                        sx={{
                          p: 1,
                          fontFamily: "Ovo",
                          display: "flex",
                        }}
                      >
                        <span style={{ marginRight: "5px" }}>*</span>
                        <span
                          style={{
                            flexGrow: 1,
                          }}
                        >
                          {el}
                        </span>
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ px: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 200, sm: 300 },
                      height: { xs: 200, sm: 300 },
                      mt: { xs: 3, md: 8, lg: "initial" },
                      borderRadius: "50%",
                    }}
                    image={foxyImg}
                    alt="Foxy"
                  />
                </Box>
              </Box>

              {/* Small devices */}
              <Box
                sx={{
                  textAlign: "start",
                  display: { xs: "block", md: "none" },
                }}
              >
                {description.map((text) => (
                  <Typography
                    variant="body1"
                    key={text}
                    sx={{
                      my: 3,
                      fontSize: { xs: 12, md: 16 },
                      display: {
                        xs: "block",
                        md: "none",
                        fontFamily: "Ovo",
                      },
                    }}
                  >
                    {text}
                  </Typography>
                ))}

                {benefits.map((el) => (
                  <Typography
                    key={el}
                    component="div"
                    variant="caption"
                    gutterBottom
                    sx={{ p: 1, fontFamily: "Ovo", display: "flex" }}
                  >
                    <span style={{ marginRight: "5px" }}>*</span>
                    <span
                      style={{
                        flexGrow: 1,
                      }}
                    >
                      {el}
                    </span>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box>
          <Box
            sx={{
              color: "#955B35",
              p: 3,
              height: { xs: "50%", md: "40%" },
              display: "flex",
              flexDirection: "column",
              fontFamily: "Ovo",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                // textAlign: 'center',
                p: -3,
                mb: 3,
                fontSize: "1.2rem",
                fontFamily: "Italiana",
              }}
            >
              {workshopDescription}
            </Typography>

            <Box display="flex" justifyContent="space-between" gap="32px">
              {/** Reusable Function to Render a Column */}
              {[firstColumn, secondColumn].map((column, columnIndex) => (
                <Box flex="1" key={columnIndex}>
                  {column.map((el, index) => (
                    <Typography
                      key={`${el}-${index}`} // Ensure uniqueness
                      component="div"
                      variant="body2"
                      gutterBottom
                      sx={{
                        p: 1,
                        fontSize: "0.8rem",
                        fontFamily: "Ovo",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginRight: 5 }}> * </span>
                      <span style={{ flexGrow: 1 }}>{el.toUpperCase()}</span>
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ background: "#FBF9F7", p: 3 }}>
        <Container maxWidth="xl">
          <Typography
            variant="body2"
            sx={{
              textAlign: "start",
              mb: 3,
              fontSize: "1rem",
              fontFamily: "Ovo",
            }}
          >
            {subText}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mb: 5,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: 100, sm: 200 },
                height: { xs: 100, sm: 200 },
              }}
              image={subImg}
              alt="Foxy"
            />
          </Box>
        </Container>
      </Box>

      <Box sx={{ height: "70vh" }}>
        <Box
          sx={{ position: "relative", background: "#CFC5B3", color: "white" }}
        >
          <Box
            sx={{
              textAlign: "center",
              height: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              variant=""
              sx={{ fontWeight: 700, fontFamily: "KollektifBold" }}
            >
              {subHeader}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <FoxyButton
            fullWidth={false}
            variant="contained"
            label={bttnText}
            backgroundColor={"#1E3706"}
            hoverBackgroundColor={"#1E3706"}
            height={"initial"}
            width={"initial"}
            sx={{
              borderRadius: 5,
              fontSize: { xs: 15, md: 18 },
              color: "#FFFFF",
              fontWeight: 700,
              px: 3,
            }}
            onClick={() => {
              const newTab = window.open("", "_blank");
              if (newTab) {
                newTab.location.href = `mailto:${bttnLink}`;
              }
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default SensualDance;
