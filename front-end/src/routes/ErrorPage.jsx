import { Box, Container } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ErrorPage(props) {
  const error = useRouteError();
  console.error(error);

  return (
    <Box>
      <NavBar />
      <Container sx={{ mt: "150px" }}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>

      <Footer />
    </Box>
  );
}
