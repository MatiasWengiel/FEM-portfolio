import { Box, Container } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

interface ErrorPageProps {}

export default function ErrorPage(_props: ErrorPageProps) {
  const error = useRouteError() as { statusText?: string; message?: string };
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
