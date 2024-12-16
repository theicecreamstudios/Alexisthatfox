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
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const SensualDance = () => {
  const data = useDataCustomHook();
  const navigate = useNavigate();
  const {
    sensualDance: {
      header,
      accessory,
      foxyImg,
      description,
      workshopDescription,
      workshopdescription2,
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

  const handleButtonClick = () => {
    // Log the email to check if bttnLink is a valid email
    console.log("Button clicked, bttnLink:", bttnLink);

    // Check if bttnLink contains a valid email
    if (bttnLink && bttnLink.includes("@")) {
      console.log("Valid email, opening mail client.");
      // If email is valid, open the email client
      window.location.href = `mailto:${bttnLink}`;
    } else {
      console.log("Invalid email, navigating to /contact.");
      // If email is invalid, navigate to the contact page
      navigate("/contact");
    }
  };

  return (
    <div className={styles.SensualDance}>
      <Box sx={{ position: "relative" }}>
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
            background: "#1E310A",
            color: "white",
            px: { xs: 3, md: 5 },
            pt: { xs: 3, md: 5 },
            pb: 2,
          }}
        >
          <Box
            sx={{
              fontFamily: "BDSans",
              textAlign: "center",
              display: { xs: "none", lg: "block" },
            }}
          >
            <HeaderTitle title={header} />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              px: { md: 2 },
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
                mt: -4,
                border: "none",
                borderShadow: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  border: "none",
                  borderShadow: "none",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "md",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Box
                      sx={{
                        fontFamily: "BDSans",
                        textAlign: "center",
                        display: { xs: "block", lg: "none" },
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
                        sx={{ mb: 2, px: 1, fontFamily: "balthazar" }}
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
                          fontFamily: "balthazar",
                          display: "flex",
                        }}
                      >
                        <span style={{ marginRight: "5px" }}>*</span>
                        <span
                          style={{
                            flexGrow: 1,
                            fontWeight: 700,
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
                      fontSize: { xs: 20, md: 36 },
                      display: {
                        xs: "block",
                        md: "none",
                        fontFamily: "balthazar",
                        textAlign: "center",
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
                    sx={{
                      p: 1,
                      fontFamily: "balthazar",
                      display: "flex",
                      fontSize: { xs: 20, md: 36 },
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
              fontFamily: "balthazar",
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
                textAlign: "center",
              }}
            >
              {workshopDescription}
              <br />
              {workshopdescription2}
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
                        fontSize: "1.0rem",
                        fontFamily: "balthazar",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginRight: 5 }}> * </span>
                      <span style={{ flexGrow: 1 }}>{el}</span>
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
              textAlign: "center",
              mb: 3,
              fontSize: "1rem",
              fontFamily: "balthazar",
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

      <Box sx={{ height: "30vh" }}>
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
              sx={{ fontWeight: 700, fontFamily: "balthazar" }}
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
              color: "#FFFFFF", // Corrected the color code
              fontWeight: 700,
              fontFamily: "balthazar",
              px: 3,
            }}
            onClick={handleButtonClick} // Pass the handleButtonClick function to the FoxyButton
          />

          {/* <FoxyButton
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
              color: "#FFFFFF", // Corrected the color code
              fontWeight: 700,
              px: 3,
            }}
            onClick={() => {
              // Ensure the bttnLink is a valid email
              if (bttnLink && bttnLink.includes("@")) {
                window.location.href = `mailto:${bttnLink}`;
              } else {
                navigate("/contact");
                console.error("Invalid email address.");
              }
            }}
          /> */}
          {/* <FoxyButton
  label="Email Alexis"
  variant="contained"
  backgroundColor="#1E3706"
  hoverBackgroundColor="#2E4D08"
  onClick={() => {
    window.location.href =
      "mailto:alexisthatfox@gmail.com?subject=Hello%20Alexis&body=I%20wanted%20to%20get%20in%20touch!";
  }}
  fullWidth={false}
  height="50px"
  width="150px"
  sx={{
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 8,
  }}
  href="mailto:alexisthatfox@gmail.com?subject=Hello%20Alexis&body=I%20wanted%20to%20get%20in%20touch!"
  component="a"
/> */}
          {/* <div style={{ textAlign: "center" }}>
            <p>Contact me via:</p>
            <FoxyButton
              label="Email via Gmail"
              variant="contained"
              backgroundColor="#1E3706"
              hoverBackgroundColor="#2E4D08"
              onClick={() => {
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=alexisthatfox@gmail.com&su=Hello%20Alexis&body=I%20wanted%20to%20get%20in%20touch!`;
                window.open(gmailUrl, "_blank");
              }}
              sx={{ marginRight: "10px" }}
            />
            <FoxyButton
              label="Copy Email Address"
              variant="outlined"
              backgroundColor="#FFFFFF"
              hoverBackgroundColor="#F0F0F0"
              onClick={() => {
                navigator.clipboard.writeText("alexisthatfox@gmail.com");
                alert("Email address copied to clipboard!");
              }}
            />
            <FoxyButton
              label="Email Alexis"
              variant="contained"
              backgroundColor="#1E3706"
              hoverBackgroundColor="#2E4D08"
              onClick={() => {
                window.location.href =
                  "mailto:alexisthatfox@gmail.com?subject=Hello%20Alexis&body=I%20wanted%20to%20get%20in%20touch!";
              }}
              fullWidth={false}
              height="50px"
              width="150px"
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                borderRadius: 8,
              }}
              href="mailto:alexisthatfox@gmail.com?subject=Hello%20Alexis&body=I%20wanted%20to%20get%20in%20touch!"
              component="a"
            />
          </div> */}
        </Box>
      </Box>
    </div>
  );
};

export default SensualDance;
