import { Box, Container, Typography, useTheme } from "@mui/material";
import Image from "mui-image";
import myPicture from "../images/Matias-small.jpg";

interface AboutMeProps {}

export default function AboutMe(_props: AboutMeProps) {
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
          <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: "4rem", sm: "3rem", lg: "4rem" } }}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: textResponsiveFont,
              color: `${theme.palette.primary.dark}`,
            }}
          >
            I am a Software Development Consultant specializing in Data Transformation and Full-Stack Web Development. I
            thrive in fast-paced environments, delivering results across both established platforms and greenfield
            projects. As a pragmatic problem solver, I prioritize shipping working, maintainable, and modular code. My
            focus is on solutions that meet the requirements of today and the expectations of tomorrow, avoiding the
            pitfalls of infinitely complex 'future-proof' systems.
          </Typography>
        </Container>
      </Container>
    </>
  );
}
