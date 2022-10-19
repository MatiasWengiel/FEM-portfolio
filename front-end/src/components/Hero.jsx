import { Button, Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Image } from "mui-image";
import heroBackground from "../images/image-homepage-hero.jpg";

export default function Hero(props) {
  const theme = useTheme();
  const paperStyles = {
    borderRadius: 0,
    boxShadow: "none",
    paddingTop: { sm: "30px", xs: "20px" },
    paddingRight: { sm: "30px", xs: "20px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    position: { sm: "absolute" },
    bottom: { sm: 0 },
    maxWidth: { sm: "40%" },
    maxHeight: { sm: "50%" },
  };

  const typographyStyles = {
    fontSize: { lg: "2.5em", md: "1.75em", sm: "1.2em", xs: "1.5em" },
    fontWeight: "bold",
    marginBottom: { sm: "30px", xs: "20px" },
    color: `${theme.palette.primary.dark}`,
  };

  const buttonStyles = {
    width: "200px",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-around",
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.secondary.main}`,
  };

  return (
    <Container
      sx={{
        mt: 15,
        position: "relative",
      }}
    >
      <Image src={heroBackground} />
      <Paper sx={paperStyles}>
        <Typography sx={typographyStyles}>
          Hey, I am Matias Wengiel and I am passionate about building great
          code.
        </Typography>
        <Button href="#AboutMe" sx={buttonStyles}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
            <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
              <path d="M0 9l8 4 8-4" />
              <path opacity=".5" d="M0 5l8 4 8-4" />
              <path opacity=".25" d="M0 1l8 4 8-4" />
            </g>
          </svg>
          About Me
        </Button>
      </Paper>
    </Container>
  );
}
