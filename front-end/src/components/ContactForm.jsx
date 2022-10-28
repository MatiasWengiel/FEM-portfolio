import {
  Alert,
  Box,
  Button,
  CircularProgress,
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
    setFailedValidation({ email: false, message: false });
    setValidationErrorMessage({ email: "", message: "" });
    if (!validate()) return;

    setSending(true);
    setSendingFailed(false);
    axios
      .post("https://formbold.com/s/oaBd6BREAKER", { data: state.formData })
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
              value={state.formData.name}
              disabled={state.sending}
            ></TextField>
          </Box>
          <Box mt={1}>
            <Typography variant="body1">Email:</Typography>
            <TextField
              onChange={handleChange}
              sx={{ width: { xs: 250, sm: 500 } }}
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
              sx={{ width: { xs: 250, sm: 500 } }}
              name="message"
              multiline
              rows={4}
              value={state.formData.message}
              error={state.failedValidation.message}
              helperText={state.validationErrorMessage.message}
              disabled={state.sending}
            ></TextField>
          </Box>
          <Box>
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
    </>
  );
}
