import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const location = useLocation();

  // Background image based on current page
  const backgroundImage =
    location.pathname === "/projects"
      ? "url('/assets/Footer-Blue-Yellow.png')"
      : "url('/assets/Footer-Blue.png')";

  return (
    <Box
      id="contact"
      sx={{
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end", // Move content to bottom
        alignItems: "center",
        textAlign: "center",
        color: "white",
        paddingBottom: "20px", // Ensure spacing from bottom
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage,
      }}
    >
      <Box sx={{ marginBottom: "15px", textAlign: "center" }}>
        <Box sx={{ marginBottom: "10px" }}>
          <Typography
            variant="h10"
            gutterBottom
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontWeight: "bold",
            }}
          >
            FOLLOW ME
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/vahedin-hamidovic-790251338/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: theme.palette.primary.main, // Background color from theme
              color: theme.palette.background.default, // Icon color from theme
              "&:hover": {
                backgroundColor: "white",
                transform: "scale(1.2)",
              },
              width: "40px",
              height: "40px",
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/Vahedin1"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: theme.palette.primary.main, // Background color from theme
              color: theme.palette.background.default, // Icon color from theme
              "&:hover": {
                backgroundColor: "white",
                transform: "scale(1.2)",
              },
              width: "40px",
              height: "40px",
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/vaha04_/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.default,
              "&:hover": {
                backgroundColor: "white",
                transform: "scale(1.2)",
              },
              width: "40px",
              height: "40px",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{ fontSize: "12px", fontWeight: 300, textAlign: "center" }}
      >
        &copy; 2025 | www.vahedinhamidovic.com
      </Typography>
    </Box>
  );
};

export default Footer;
