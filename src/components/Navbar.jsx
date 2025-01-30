import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinkStyle = {
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    color: theme.palette.primary.main,
  };

  const menuButtonStyle = {
    color: "white",
    zIndex: 10,
    mt: "-20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
    fontSize: "2rem",
  };

  const fullScreenMenuStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/assets/Header-Menu.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    color: "white",
    fontSize: "50px",
    fontWeight: "700",
    fontFamily: "Quicksand, sans-serif",
  };

  const menuItemStyle = {
    mb: 3,
    color: "white",
    fontSize: "3rem",
    mt: 7,
    fontFamily: "Quicksand, sans-serif",
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.background.default, // Use theme background
          color: theme.palette.primary.main, // Use theme text color
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Hide Navigation Links on Mobile */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 15, mr: 15 }}>
              <Typography
                component={Link}
                to="/"
                sx={{
                  ...navLinkStyle,
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                HOME
              </Typography>
              <Typography
                component={Link}
                to="/projects"
                sx={{
                  ...navLinkStyle,
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                PROJECTS
              </Typography>
            </Box>
          )}

          {/* Menu Button (centered) */}
          {!menuOpen && (
            <Box sx={{ position: "fixed", textAlign: "center", zIndex: 1300 }}>
              <Box
                sx={{
                  width: 130,
                  height: 60,
                  backgroundColor: theme.palette.primary.main,
                  clipPath: "polygon(50% 100%, 100% 0%, 0% 0%)",
                  position: "absolute",
                  top: -11,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
              <IconButton
                sx={{
                  ...menuButtonStyle,
                  fontWeight: "bold", // Ensures the button itself has bold styling
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.25)", // Scale up on hover
                  },
                }}
                onClick={toggleMenu}
              >
                <MenuIcon fontSize="inherit" sx={{fontWeight: "bold"}} />
              </IconButton>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 15, ml: 15 }}>
              <Typography
                sx={{
                  ...navLinkStyle,
                  "&:hover": {
                    color: "white",
                  },
                }}
                onClick={() => scrollToSection("contact")}
              >
                CONTACT
              </Typography>
              <Typography
                sx={{
                  ...navLinkStyle,
                  "&:hover": {
                    color: "white",
                  },
                }}
                onClick={() => scrollToSection("skills")}
              >
                PAGE4
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Full-Screen Menu Overlay */}
      {menuOpen && (
        <Box
          onClick={closeMenu}
          sx={{
            ...fullScreenMenuStyle,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Centers items vertically
            alignItems: "center", // Centers items horizontally
            textAlign: "center", // Ensures text alignment
            height: "100vh", // Ensures full-screen centering
          }}
        >
          <IconButton
            onClick={toggleMenu}
            sx={{
              position: "absolute",
              top: 20,
              color: "white",
              fontSize: "3rem",
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            onClick={closeMenu}
            sx={menuItemStyle}
          >
            HOME
          </Typography>
          <Typography
            component={Link}
            to="/projects"
            onClick={closeMenu}
            sx={menuItemStyle}
          >
            PROJECTS
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => scrollToSection("skills")}
          >
            PAGE4
          </Typography>
        </Box>
      )}
    </>
  );
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const targetPosition = section.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // Adjust this value to control speed (in milliseconds)
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }
};

export default Navbar;
