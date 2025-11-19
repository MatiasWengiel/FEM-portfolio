import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";

interface ContactButtonsProps {}

export default function ContactButtons(_props: ContactButtonsProps) {
  return (
    <>
      <Button href="https://www.linkedin.com/in/matias-wengiel/" target="__blank" sx={{ color: `inherit` }}>
        <LinkedInIcon />
      </Button>
      <Button href="https://github.com/MatiasWengiel" target="__blank" sx={{ color: `inherit` }}>
        <GitHubIcon />
      </Button>
    </>
  );
}
