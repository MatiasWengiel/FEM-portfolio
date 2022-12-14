import { Container, Typography, Button, Box } from "@mui/material";
import Image from "mui-image";
import { useTheme } from "@mui/material/styles";
export default function Project(props) {
  const theme = useTheme();
  const { id, title, pictureURL, descriptionText, taglineText, githubLink } =
    props;

  //Causes the orientation of the picture and text components to reverse in alternating fashion depending on the id prop
  const orientation = (id) => (id % 2 === 0 ? "row-reverse" : "row");
  //Add extra margin at the top for the first rendered to account for the NavBar
  const marginTop = (id) => (id === 1 ? 15 : 5);

  const textResponsiveFont = {
    lg: "1.2em",
    md: "1em",
    sm: "1em",
    xs: "1.25em",
  };

  const mainContainerStyles = {
    mt: marginTop(id),
    height: { md: 350 },
    position: "relative",
    display: "flex",
    flexFlow: { xs: "column", sm: orientation(id) },
  };

  const imageBoxStyles = {
    width: { xs: 1, sm: 1 / 3, md: 1 / 2 },
    p: 3,
    backgroundColor: `${theme.palette.secondary.light}`,
  };

  const textAreaStyles = {
    width: { xs: 1, sm: 2 / 3, md: 1 / 2 },
    px: 6,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  };

  const titleAndParagraphStyles = {
    display: "flex",
    flexFlow: "column",
    alignItems: "space-between",
    height: { sm: "350px" },
  };

  const titleTypographyStyles = {
    textAlign: "center",
    mt: { xs: 4, sm: 0 },
    mb: 2,
    fontSize: { xs: "2rem", sm: "3rem" },
  };

  const buttonStyles = {
    border: `1px solid ${theme.palette.secondary.main}`,
    px: 3,
    py: 1,
    mt: { xs: 4, sm: 0 },
    width: 250,
  };

  return (
    <Container sx={mainContainerStyles}>
      <Box sx={imageBoxStyles}>
        <Image src={pictureURL} fit="contain" />
      </Box>
      <Box sx={textAreaStyles}>
        <Box sx={titleAndParagraphStyles}>
          <Typography variant="h3" sx={titleTypographyStyles}>
            {title}
          </Typography>
          <Typography variant="h6" mb={1} sx={{ fontSize: textResponsiveFont }}>
            {taglineText}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: textResponsiveFont }}>
            {descriptionText}
          </Typography>
        </Box>
        <Button href={githubLink} target="_blank" sx={buttonStyles}>
          View Project Code
        </Button>
      </Box>
    </Container>
  );
}
