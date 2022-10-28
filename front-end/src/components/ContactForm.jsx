import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sendingFailed, setSendingFailed] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    setSendingFailed(false);
    axios
      .post("https://formbold.com/s/oaBd6", { data: formData })
      .then((r) => {
        if (r.status === 201) {
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setSendingFailed(true);
        setSending(false);
      });
  };
  return (
    <>
      {sendingFailed && (
        <Alert
          severity="error"
          sx={{ position: "absolute", mt: "80px", width: "100vw" }}
        >
          Something went wrong with the contact form submission. Please try
          again.
        </Alert>
      )}
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
              name="name"
              label="What's your name?"
              value={formData.name}
              disabled={sending}
            ></TextField>
          </Box>
          <Box mt={1}>
            <Typography variant="body1">Email:</Typography>
            <TextField
              onChange={handleChange}
              sx={{ width: { xs: 250, sm: 500 } }}
              name="email"
              label="Please enter your e-mail"
              value={formData.email}
              required
              disabled={sending}
            ></TextField>
          </Box>
          <Box mt={1}>
            <Typography variant="body1">Message</Typography>
            <TextField
              onChange={handleChange}
              sx={{ width: { xs: 250, sm: 500 } }}
              name="message"
              label="I'll be happy to hear from you!"
              multiline
              rows={4}
              value={formData.message}
              required
              disabled={sending}
            ></TextField>
          </Box>
          <Box>
            {!sending && (
              <Button sx={buttonStyles} onClick={handleSubmit}>
                Submit
              </Button>
            )}
            {sending && (
              <CircularProgress
                sx={{ width: "200px", height: "36.5px", mt: "30px" }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
