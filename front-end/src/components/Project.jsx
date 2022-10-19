import { Container, Typography, Button } from "@mui/material";
import Image from "mui-image";
import { useTheme } from "@mui/material/styles";
export default function Project(props) {
  const theme = useTheme();
  const { id, title, pictureURL, descriptionText, taglineText, githubLink } = {
    ...props,
  };
  //Causes the orientation of the picture and text components to reverse in alternating fashion depending on the id prop
  const orientation = (id) => (id % 2 === 0 ? "row-reverse" : "row");

  return (
    <Container
      sx={{
        mt: 15,
        height: 350,
        position: "relative",
        display: "flex",
        flexFlow: orientation(id),
      }}
    >
      <Container
        disableGutters
        sx={{ width: 1 / 2, p: 3, background: "lightblue" }}
      >
        <Image src={pictureURL} sx={{ objectFit: "contain" }} />
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
            {title}
          </Typography>
          <Typography variant="h6" mb={1}>
            {taglineText}
          </Typography>
          <Typography variant="body1">{descriptionText}</Typography>
        </Container>
        <Button
          href={githubLink}
          target="_blank"
          sx={{
            border: `1px solid ${theme.palette.secondary.main}`,
            px: 3,
            py: 1,
            width: 250,
          }}
        >
          View Project Code
        </Button>
      </Container>
    </Container>
  );
}