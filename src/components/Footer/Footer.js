

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      sx={{ textAlign: "center", fontFamily: "Tenor Sans", color: "white" }}
      variant="body2"
    >
      <Link
        color="inherit"
        href="https://theicecreamstudio.com/"
        target="_blank"
      >
        Designed by The iceCreamStudio.com
      </Link>{" "}
      {new Date().getFullYear()}
      {""}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function FooterPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CssBaseline />

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: {xs: 4, md: 5},
            px: 2,
            mt: 2, // Pushes the footer to the bottom
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? "#392d14" : "#392d14",
          }}
        >
          <Container>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Tenor Sans",
                color: "white",
              }}
              variant="body2"
            >
              {"Copyright © "} AlexisThatFox Inc.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
