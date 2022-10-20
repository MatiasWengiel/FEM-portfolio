import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const theme = useTheme();
  const buttonStyles = {
    width: "200px",
    height: "36.5px",
    mt: "30px",
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

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      mt="150px"
      mx="auto"
      sx={{
        width: 1,
        display: "flex",
        flexFlow: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: { xs: "center", md: "start" },
      }}
    >
      <Typography variant="h2" sx={{ mt: { xs: 2, md: 0 } }}>
        Contact Me
      </Typography>
      <Box>
        <Box>
          <Typography variant="body1">Name:</Typography>
          <TextField
            onChange={handleChange}
            sx={{ width: { xs: 250, sm: 500 } }}
            label="What's your name?"
          />
        </Box>
        <Box mt={1}>
          <Typography variant="body1">Email:</Typography>
          <TextField
            onChange={handleChange}
            sx={{ width: { xs: 250, sm: 500 } }}
            label="Please enter your e-mail"
          />
        </Box>
        <Box mt={1}>
          <Typography variant="body1">Message</Typography>
          <TextField
            onChange={handleChange}
            sx={{ width: { xs: 250, sm: 500 } }}
            label="I'll be happy to hear from you!"
            multiline
            rows={4}
          />
        </Box>
        <Button sx={buttonStyles}>Submit</Button>
      </Box>
    </Box>
  );
}
