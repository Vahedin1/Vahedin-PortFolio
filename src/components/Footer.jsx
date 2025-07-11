import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const location = useLocation();

  const isLargeScreen = useMediaQuery("(min-width:1400px)");
  const normalizedPath = location.pathname.replace(/\/$/, "");

  const isExactProjectsPage = normalizedPath === "/projects";

  const backgroundImage = isExactProjectsPage
    ? isLargeScreen
      ? "url('/assets/backgrounds/Footer-Blue-Yellow 1800.png')"
      : "url('/assets/backgrounds/Footer-Blue-Yellow 1400.png')"
    : "url('/assets/backgrounds/Footer-Blue.png')";

  const hideFooter = location.pathname === "/projects/unger";

  if (hideFooter) return null;

  return (
    <Box
      id="contact"
      sx={{
        height: {
          xs: "200px",
          sm: "200px",
          md: "200px",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        paddingBottom: "20px",
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box sx={{ marginBottom: "15px", textAlign: "center" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontFamily: "Quicksand, sans-serif",
            fontWeight: "bold",
          }}
        >
          FOLLOW ME
        </Typography>

        {/* Icon */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/vahedin-hamidovic-790251338/"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconButtonStyle(theme)}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Vahedin1"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconButtonStyle(theme)}
          >
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:hamidovicvahedin1@gmail.com"
            sx={iconButtonStyle(theme)}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </IconButton>
        </Box>
      </Box>

      {/* Link */}
      <Typography
        variant="body2"
        sx={{
          fontSize: "12px",
          fontWeight: 300,
          textAlign: "center",
          mb: 2.5,
        }}
      >
        &copy; 2025 | vahedinhamidovic.netlify.app
      </Typography>
    </Box>
  );
};

const iconButtonStyle = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  "&:hover": {
    backgroundColor: "white",
    transform: "scale(1.2)",
  },
  width: "40px",
  height: "40px",
});

export default Footer;
