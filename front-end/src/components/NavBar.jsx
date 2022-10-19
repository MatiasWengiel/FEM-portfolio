import { AppBar, Button, Box, IconButton } from "@mui/material";

export default function NavBar(props) {
  const appBarStyles = {
    minHeight: 80,
    p: 5,
    display: "flex",
    flexFlow: "row",
    justifyContent: { xs: "center", sm: "space-between" },
    alignItems: "center",
    background: "white",
  };

  return (
    <AppBar sx={appBarStyles}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
          <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
          <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
        </svg>
      </div>
      <Box sx={{ display: "flex", flexFlow: { xs: "column", sm: "row" } }}>
        <Button href="/">Home</Button>
        <Button href="https://github.com/MatiasWengiel" target="_blank">
          Github
        </Button>
        <Button href="/projects">Projects</Button>
        <Button>Contact Me</Button>
      </Box>
    </AppBar>
  );
}
