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

  const cardStyle = {
    width: "100%",
    maxWidth: "800px",
    color: "white",
    borderRadius: "12px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: "0px 6px 16px rgba(0, 255, 255, 0.5)",
    },
  };

  return (
    <Box>
      <AppBar
        position="static"
        marginTop="100px"
        sx={
          isHome
            ? {
                bgcolor: theme.palette.background.default,
                boxShadow: "0px 4px 12px rgba(0, 255, 255, 0.3)",
                border: "2px solid #00ffff",
                width: "100%",
                maxWidth: "800px",
                mt: 0,
                mb: 6,
                borderRadius: 2,
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",
                mx: "auto",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "0px 6px 16px rgba(0, 255, 255, 0.5)",
                },
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
