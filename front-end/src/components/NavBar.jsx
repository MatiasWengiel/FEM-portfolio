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
    <Button key="Home" href="/">
      Home
    </Button>,
    <Button
      key="Github"
      href="https://github.com/MatiasWengiel"
      target="_blank"
    >
      Github
    </Button>,
    <Button key="Projects" href="/projects">
      Projects
    </Button>,
    <Button key="Contact" href="/contact">
      Contact Me
    </Button>,
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar sx={appBarStyles}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill="#33323D"
            fillRule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
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
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
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
