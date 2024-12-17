import React from "react";
import styles from "./Socials.module.css";
import { useDataCustomHook } from "../../Data/data";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";


const Socials = () => {
  const data = useDataCustomHook();
  const {
    media: { platforms },
  } = data;

  return <Container maxWidth="sm">
  <Box
    display="flex"
    gap="20px"
    sx={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {platforms.map((platform) => (
      <Link
        href={platform.link}
        underline="none"
        target="_blank"
        key={platform.name}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: 40, md: 40 },
          }}
          image={platform.icons}
          alt={platform.name}
        />
      </Link>
    ))}
  </Box>
</Container>
};

export default Socials;
