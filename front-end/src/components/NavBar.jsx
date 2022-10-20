import {
  AppBar,
  Button,
  Box,
  IconButton,
  Typography,
  useTheme,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function NavBar(props) {
  const theme = useTheme();
  const appBarStyles = {
    height: 80,
    p: 5,
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
  };

  const navBarButtons = [
    <Button href="/">Home</Button>,
    <Button href="https://github.com/MatiasWengiel" target="_blank">
      , Github
    </Button>,
    <Button href="/projects">Projects</Button>,
    <Button>Contact Me</Button>,
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar sx={appBarStyles}>
      <Box>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
          <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
          <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
        </svg>
        <Typography
          variant="body"
          sx={{ color: theme.palette.primary.main, ml: 2 }}
        >
          Matias Wengiel
        </Typography>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexFlow: { xs: "column", sm: "row" },
        }}
      >
        {navBarButtons}
      </Box>
      <IconButton
        size="large"
        edge="start"
        color="primary"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: "flex", sm: "none" } }}
      >
        <MenuIcon onClick={handleDrawerToggle} />
      </IconButton>
      <Drawer
        sx={{ display: { sm: "none" } }}
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {navBarButtons}
      </Drawer>
    </AppBar>
  );
}
