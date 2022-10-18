import Image from "mui-image";
import { Container, Typography } from "@mui/material";
import testPicture from "../images/TestPicture.jpg";

export default function AboutMe(props) {
  return (
    <>
      <Container
        id="AboutMe"
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          mt: { xs: "96px", sm: "150px" },
        }}
      >
        <Container
          disableGutters
          sx={{
            m: 0,
            width: { xs: 1, sm: 1 / 3, md: 1 / 2 },
            height: { xs: 300, sm: 600 },
          }}
        >
          <Image
            src={testPicture}
            sx={{
              objectPosition: {
                xs: "top -65px right 0",
                sm: "top -75px left -30px",
                md: "top -75px right 0",
              },
            }}
          />
        </Container>
        <Container sx={{ m: 0, width: { xs: 1, sm: 2 / 3, md: 1 / 2 } }}>
          <Typography
            variant="h1"
            mb={3}
            sx={{ fontSize: { xs: "4rem", sm: "3rem", lg: "4rem" } }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                lg: "1.75em",
                md: "1.55em",
                sm: "1.5em",
                xs: "1.25em",
              },
            }}
          >
            Enthusiastic Full-Stack Web Developer, passionate about writing code
            that is reusable, scalable and testable. Transitioning from a career
            in post-secondary education, with experience in both working within
            and leading multidisciplinary teams, breaking down and communicating
            complex technical information to learners, and creating thorough
            documentation.
          </Typography>
        </Container>
      </Container>
    </>
  );
}
