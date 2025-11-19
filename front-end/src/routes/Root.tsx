import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

interface RootProps {}

export default function Root(_props: RootProps) {
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
