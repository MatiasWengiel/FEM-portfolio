import { Button, Typography, Box, Container, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import ContactButtons from "./ContactButtons";

export default function Footer(props) {
  const routesWithCallToAction = ["/", "/projects"];
  const useDisplayCallToAction = () => {
    const currentLocation = useLocation();
    if (!routesWithCallToAction.includes(currentLocation.pathname))
      return "none";
    return "flex";
  };
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

  const boxStyles = {
    position: "relative",
    bottom: 0,
    mt: { xs: "60px", sm: "96px" },
    color: `${theme.palette.secondary.main}`,
  };

  const callToActionContainerStyles = {
    display: useDisplayCallToAction,
    flexFlow: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    mb: { xs: "60px", sm: "96px" },
  };

  const footerBoxStyles = {
    display: "flex",
    alignItems: "center",
    height: "50px",
    backgroundColor: `${theme.palette.primary.dark}`,
    color: `inherit`,
  };

  return (
    <Box sx={boxStyles}>
      <Container sx={callToActionContainerStyles}>
        <Typography
          variant="h3"
          sx={{
            width: { xs: 1, sm: 1 / 2 },
            fontSize: { xs: "2rem", sm: "2.5rem", lg: "3.5rem" },
          }}
        >
          Interested in doing a project together?
        </Typography>
        <Button sx={buttonStyles} href="/contact">
          Contact Me
        </Button>
      </Container>
      <Box sx={footerBoxStyles}>
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
            <path
              fill={`${theme.palette.secondary.main}`}
              fillRule="evenodd"
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
          <ContactButtons />
        </Container>
      </Box>
    </Box>
  );
}
