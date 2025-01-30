import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        sx={{ backgroundColor: "navy", boxShadow: "none" }}
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
            <Box sx={{ display: "flex", gap: 12, mr: 12 }}>
              <Typography component={Link} to="/" sx={navLinkStyle}>
                Home
              </Typography>
              <Typography component={Link} to="/projects" sx={navLinkStyle}>
                Projects
              </Typography>
            </Box>
          )}

          {/* Menu Button (centered) */}
          <Box sx={{ position: "fixed", textAlign: "center", zIndex: 1300 }}>
            <Box
              sx={{
                width: 130,
                height: 60,
                backgroundColor: "cyan",
                clipPath: "polygon(50% 100%, 100% 0%, 0% 0%)",
                position: "absolute",
                top: -11,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />

            <IconButton sx={menuButtonStyle} onClick={toggleMenu}>
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 12, ml: 12 }}>
              <Typography
                sx={navLinkStyle}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Typography>
              <Typography
                sx={navLinkStyle}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Full-Screen Menu Overlay */}
      {menuOpen && (
        <Box onClick={closeMenu} sx={fullScreenMenuStyle}>
          <Typography
            component={Link}
            to="/"
            onClick={closeMenu}
            sx={menuItemStyle}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            to="/projects"
            onClick={closeMenu}
            sx={menuItemStyle}
          >
            Projects
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Typography>
          <Typography
            sx={menuItemStyle}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Typography>
        </Box>
      )}
    </>
  );
};

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.5rem",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
  cursor: "pointer",
};

const menuButtonStyle = {
  color: "white",
  zIndex: 10,
  mt: "-10px",
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
  backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  color: "white",
  fontSize: "2rem",
};

const menuItemStyle = {
  color: "white",
  mb: 3,
  fontSize: "2rem",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
  textDecoration: "none",
  cursor: "pointer",
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
