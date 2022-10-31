import { Button, Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Image } from "mui-image";
import heroBackground from "../images/HeroBannerPicture.jpg"; //Photo by Domenico Loia on unsplash

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Hero(props) {
  const theme = useTheme();
  const paperStyles = {
    borderRadius: 0,
    boxShadow: "none",
    paddingTop: { xs: "20px", sm: "30px" },
    paddingRight: { xs: "20px", sm: "30px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    position: { sm: "absolute" },
    bottom: { sm: 0 },
    maxWidth: { sm: "40%" },
    maxHeight: { sm: "60%" },
  };

  const typographyStyles = {
    fontSize: { lg: "2em", md: "1.5em", sm: "1.2em", xs: "1.5em" },
    fontWeight: "bold",
    marginBottom: { sm: "30px", xs: "20px" },
    color: `${theme.palette.primary.main}`,
  };

  const buttonStyles = {
    width: "200px",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-around",
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.secondary.main}`,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.secondary.main}`,
    },
  };

  return (
    <Container sx={{ mt: 15, position: "relative" }}>
      <Image
        sx={{ maxHeight: { xs: "400px", lg: "450px", xl: "600px" } }}
        src={heroBackground}
      />
      <Paper sx={paperStyles}>
        <Typography sx={typographyStyles}>
          Hey, I am Matias Wengiel and I am passionate about building great
          code.
        </Typography>
        <Button href="#AboutMe" sx={buttonStyles}>
          <KeyboardDoubleArrowDownIcon />
          About Me
        </Button>
      </Paper>
    </Container>
  );
}
