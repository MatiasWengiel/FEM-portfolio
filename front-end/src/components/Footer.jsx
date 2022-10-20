import { Button, Typography, Box, Container, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer(props) {
  const theme = useTheme();
  const buttonStyles = {
    width: "200px",
    height: "36.5px",
    mt: { xs: "36.5px", sm: 0 },
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
    <Box
      sx={{
        position: "relative",
        bottom: 0,
        mt: "96px",
        color: `${theme.palette.secondary.main}`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexFlow: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: { xs: 1, sm: 1 / 2 },
            fontSize: { xs: "2rem", sm: "2.5rem", lg: "3.5rem" },
          }}
        >
          Interested in doing a project together?
        </Typography>
        <Button sx={buttonStyles}>Contact Me</Button>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "50px",
          height: "50px",
          backgroundColor: `${theme.palette.primary.dark}`,
          color: `inherit`,
        }}
      >
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
            <path
              fill={`${theme.palette.secondary.main}`}
              fill-rule="evenodd"
              d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
            />
          </svg>
          <Typography
            variant="body"
            sx={{ ml: 2, display: { xs: "none", sm: "flex" } }}
          >
            Matias Wengiel
          </Typography>
        </Container>
        <Container sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            href="https://www.linkedin.com/in/matias-wengiel/"
            target="__blank"
            sx={{ color: `inherit` }}
          >
            <LinkedInIcon />
          </Button>
          <Button
            href="https://github.com/MatiasWengiel"
            target="__blank"
            sx={{ color: `inherit` }}
          >
            <GitHubIcon />
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
