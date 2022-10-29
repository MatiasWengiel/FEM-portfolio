import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Root(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  );
}
