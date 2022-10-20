import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactButtons() {
  return (
    <>
      <Button
        href="https://www.linkedin.com/in/matias-wengiel/"
        target="__blank"
        sx={{ color: `inherit` }}
      >
        <LinkedInIcon />
      </Button>
      <Button
        href="https://github.com/MatiasWengiel"
        target="__blank"
        sx={{ color: `inherit` }}
      >
        <GitHubIcon />
      </Button>
    </>
  );
}
