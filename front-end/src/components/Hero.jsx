import { Button, Container, Paper, Typography } from "@mui/material";
import { Image } from "mui-image";
import heroBackground from "../images/image-homepage-hero.jpg";

export default function Hero(props) {
  return (
    <Container
      sx={{
        mt: 15,
        position: "relative",
      }}
    >
      <Image src={heroBackground} />
      <Paper
        sx={{
          borderRadius: 0,
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            marginBottom: "50px",
          }}
        >
          Hey, I am Matias Wengiel and I love building beautiful websites.
        </Typography>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#5FB4A2">
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
