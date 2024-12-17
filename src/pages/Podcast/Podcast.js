import React from "react";
import styles from "./Podcast.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useDataCustomHook } from "../../Data/data";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

const Podcast = () => {
  const data = useDataCustomHook();
  const {
    podcastVlog: {
      vlog,
      podcast: { header, soon, air },
    },
  } = data;

  return (
    <div className={styles.Podcast}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, mt: 12 }}>
          <HeaderTitle title={vlog.header} fontFamily="Italiana" />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", sm: 300 },
                  }}
                  image={vlog.img}
                  alt="FoxyDesk"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center", my: { xs: 3, lg: "initial" } }}>
                <Typography sx={{ fontFamily: "Ovo", py: { sm: 4 } }}>
                  {vlog.text}
                </Typography>
                <Link href={vlog.link.path}>
                  <CardMedia
                    component="img"
                    sx={{ my: 3, width: 600 }}
                    image={vlog.link.img}
                    alt="FoxyYouTube"
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1, mt: 12 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HeaderTitle title={header} fontFamily="Italiana"  />
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: 200, sm: 300 },
                  }}
                  image={soon.img}
                  alt="ComingSoon"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HeaderTitle title={""} fontFamily='"Style Script", cursive;' />
                {/* <CardMedia
                  component="img"
                  sx={{
                    width: { xs: 200, sm: 300 },
                  }}
                  image={air.img}
                  alt="ComingSoon"
                /> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Podcast;
