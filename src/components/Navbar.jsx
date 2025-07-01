import React from "react";
import { AppBar, Toolbar, Box, Typography, Container, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ isHome }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navLinkStyle = {
    textDecoration: "none",
    fontSize: isMobile ? "1.5rem" : "2.5rem",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    color: theme.palette.primary.main,
    marginX: 3,
    "&:hover": {
      color: "white",
    },
  };

  return (
    <AppBar
      position="static"
      sx={
        isHome
          ? {
              bgcolor: theme.palette.background.default,
              boxShadow: "0px 4px 12px rgba(0, 255, 255, 0.3)",
              border: "2px solid #00ffff",
              borderRadius: 2,
              width: "50%",
              mx: "auto",
              mt: 0,
              mb: 6,
            }
          : {
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              width: "100%",
              mt: 0,
              mb: 0,
              borderRadius: 0,
            }
      }
    >
      <Container >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 2,
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
      </Container>
    </AppBar>
  );
};

export default Navbar;
