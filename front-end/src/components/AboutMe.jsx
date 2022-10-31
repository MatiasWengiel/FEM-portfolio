import Image from "mui-image";
import { Box, Container, Typography, useTheme } from "@mui/material";
import myPicture from "../images/TestPicture.jpg";

export default function AboutMe(props) {
  const theme = useTheme();
  const mainContainerStyles = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    mt: { xs: "96px", sm: "150px" },
  };
  const imageContainerStyles = {
    m: 0,
    width: { xs: 1, sm: 1 / 3, md: 1 / 2 },
    height: { xs: 300, sm: 600 },
  };

  const imagePositioning = {
    xs: "top -65px right 0",
    sm: "top -75px left -30px",
    md: "top -75px right 0",
  };

  const textResponsiveFont = {
    lg: "1.75em",
    md: "1.55em",
    sm: "1.5em",
    xs: "1.25em",
  };

  return (
    <>
      <Box id="AboutMe" />
      <Container sx={mainContainerStyles}>
        <Container disableGutters sx={imageContainerStyles}>
          <Image src={myPicture} sx={{ objectPosition: imagePositioning }} />
        </Container>
        <Container sx={{ m: 0, width: { xs: 1, sm: 2 / 3, md: 1 / 2 } }}>
          <Typography
            variant="h1"
            sx={{ mb: 3, fontSize: { xs: "4rem", sm: "3rem", lg: "4rem" } }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: textResponsiveFont,
              color: `${theme.palette.primary.dark}`,
            }}
          >
            Enthusiastic Full-Stack Web Developer, passionate about writing code
            that is reusable, scalable and testable. Transitioning from a career
            in post-secondary education, with experience in both working within
            and leading multidisciplinary teams, breaking down and communicating
            complex technical information, and creating thorough, detailed
            documentation.
          </Typography>
        </Container>
      </Container>
    </>
  );
}
