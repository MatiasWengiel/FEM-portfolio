import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import axios from "axios";
import useContactForm from "./hooks/useContactForm";

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

  const labelStyles = { 
    width: { xs: 250, sm: 500 },
    marginTop: 1
  }

  const {
    setFormData,
    setSending,
    setSendingFailed,
    setFailedValidation,
    setValidationErrorMessage,
    handleChange,
    validate,
    state,
  } = useContactForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    //Resets validation if there was a previous failed validation, then validates again
    setFailedValidation({ email: false, message: false });
    setValidationErrorMessage({ email: "", message: "" });
    if (!validate()) return;

    setSending(true);
    setSendingFailed(false);

    axios
      .post("https://formbold.com/s/oaBd6", { data: state.formData })
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
    <Container>
      {state.sendingFailed && (
        <Alert
          severity="error"
          sx={{ position: "absolute", mt: "80px", width: "100vw" }}
        >
          Something went wrong with the contact form submission. Please try
          again.
        </Alert>
      )}
      <Box
        mx="auto"
        sx={{
          mt: { xs: "100px", sm: 15 },
          width: 1,
          display: "flex",
          flexFlow: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "80%", sm: 1 / 2 },
            minHeight: "inherit",
            display: "flex",
            flexFlow: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h1"
            sx={{ mb: 3, fontSize: { xs: "3rem", sm: "3rem", lg: "4rem" } }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, maxWidth: "85%", display: { xs: "none", md: "flex" } }}
          >
            I'd love to hear from you! If you are working on a project and need
            a full-stack web developer on your team, I will be happy to discuss
            whether I can help you meet your goals. I am also always open to
            feedback on this website, and happy to hear from people just wanting
            to say hi.
          </Typography>
        </Box>
        <Box sx={{ mt: { xs: 0, md: 0 } }}>
          <Box>
            <Typography variant="body1">Name:</Typography>
            <TextField
              onChange={handleChange}
              sx={labelStyles}
              name="name"
              label="What's your name?"
              value={state.formData.name}
              disabled={state.sending}
            ></TextField>
          </Box>
          <Box mt={1}>
            <Typography variant="body1">Email:</Typography>
            <TextField
              onChange={handleChange}
              sx={labelStyles}
              name="email"
              label="Please enter your e-mail"
              value={state.formData.email}
              error={state.failedValidation.email}
              helperText={state.validationErrorMessage.email}
              disabled={state.sending}
            ></TextField>
          </Box>
          <Box mt={1}>
            <Typography variant="body1">Message</Typography>
            <TextField
              onChange={handleChange}
              sx={labelStyles}
              name="message"
              multiline
              rows={4}
              label="What would you like to say?"
              value={state.formData.message}
              error={state.failedValidation.message}
              helperText={state.validationErrorMessage.message}
              disabled={state.sending}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {!state.sending && (
              <Button sx={buttonStyles} onClick={handleSubmit}>
                Submit
              </Button>
            )}
            {state.sending && (
              <CircularProgress
                sx={{ width: "200px", height: "36.5px", mt: "30px" }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
