import { Container, Typography, Button } from "@mui/material";
import Image from "mui-image";
import myPicture from "../images/TestPicture.jpg";

export default function Project(props) {
  const orientation = "row";
  return (
    <Container
      sx={{
        mt: 15,
        height: 350,
        position: "relative",
        display: "flex",
        flexFlow: { orientation },
      }}
    >
      <Container
        disableGutters
        sx={{ width: 1 / 2, p: 3, background: "lightgrey" }}
      >
        <Image src={myPicture} />
      </Container>
      <Container
        disableGutters
        sx={{
          width: 1 / 2,
          px: 6,
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Container disableGutters>
          <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
            Title
          </Typography>
          <Typography variant="body1">
            This is the description of the Project. It will have a list of stack
            like React, Node, Express and Such
          </Typography>
        </Container>
        <Button
          href="#"
          sx={{ border: "1px solid black", px: 3, py: 1, width: 200 }}
        >
          View Project
        </Button>
      </Container>
    </Container>
  );
}
