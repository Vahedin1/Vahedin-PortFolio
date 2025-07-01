import React from "react";
import { AppBar, Toolbar, Box, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Padding } from "@mui/icons-material";

const Navbar = ({ isHome }) => {
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
  sx={
    isHome
      ? {
          background: "linear-gradient(135deg, #001F3F, #001a35)",
          boxShadow: "0 0 10px 2px cyan",
          border: "2px solid cyan",
          width: "45%",
          mt: 4,
          mb: 6,
          borderRadius: 2,
          mx: "auto",
        }
      : {
          backgroundColor: "transparent", // or your desired default
          boxShadow: "none",
          border: "none",
          width: "100%",
          mt: 0,
          mb: 0,
          borderRadius: 0,
        }
  }
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
