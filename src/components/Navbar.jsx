import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Padding } from "@mui/icons-material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navLinkStyle = {
    textDecoration: "none",
    fontSize: isMobile ? "1.5rem" : "2.5rem", // Bigger font
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    color: theme.palette.primary.main,
    marginX: 3, // space between links
    "&:hover": {
      color: "white",
    },
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center", // center the items
            alignItems: "center",
            py: 2, // padding top and bottom
          }}
        >
          <Box sx={{ display: "flex", gap: 6 }}>
            <Typography component={Link} to="/" sx={navLinkStyle}>
              HOME
            </Typography>
            <Typography component={Link} to="/projects" sx={navLinkStyle}>
              PROJECTS
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
