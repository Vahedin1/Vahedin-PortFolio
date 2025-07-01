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
import { Link, useNavigate, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
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
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const DropAnimation = () => {
    return (
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: [0, 30, 60, 80], // Falling effect
          opacity: [1, 0.8, 0.6, 0.3, 0], // Gradual fade-out
        }}
        transition={{
          duration: 1.5, // Duration of drop animation
          repeat: Infinity, // Infinite loop
          repeatDelay: 0.1, // Delay before the next drop
        }}
        style={{
          position: "absolute",
          left: "40%",
          top: "70%", // Start just below the triangle
          transform: "translateX(-50%)",
          width: 16,
          height: 16,
          backgroundColor: "rgb(33, 255, 226)", // Light-colored drop
          borderRadius: "50%", // Circular shape
        }}
      />
    );
  };

  return (
    <>
      <Box
        className={
          location.pathname === "/projects/unger" ? "hidden-section" : ""
        }
      >
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
              <Box
                sx={{ position: "fixed", textAlign: "center", zIndex: 1300 }}
              >
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
                <DropAnimation />
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
                  <MenuIcon fontSize="inherit" sx={{ fontWeight: "bold" }} />
                </IconButton>
              </Box>
            )}

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 15, ml: 15 }}>
              </Box>
            )}
          </Toolbar>
        </AppBar>

       {/* Full-Screen Menu Overlay */}
{menuOpen && (
  <motion.div
    initial={{ y: "-100%" }} // Starts off-screen (right)
    animate={{ y: 0 }} // Slides in to the screen
    exit={{ y: "-100%" }} // Slides out when closed
    transition={{
      duration: 0.4, // Fast entrance
      ease: "easeInOut",
      exit: { duration: 1, ease: "easeInOut" },
    }} // Smooth transition
    style={fullScreenMenuStyle}
  >
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
        sx={{
          ...menuItemStyle,
          fontSize: {
            xs: '1.2rem',  // Extra small screens
            sm: '1.4rem',  // Small screens
            md: '1.6rem',  // Medium screens
            lg: '2rem',    // Large screens
          },
        }}
      >
        HOME
      </Typography>
      <Typography
        component={Link}
        to="/projects"
        onClick={closeMenu}
        sx={{
          ...menuItemStyle,
          fontSize: {
            xs: '1.2rem',  // Extra small screens
            sm: '1.4rem',  // Small screens
            md: '1.6rem',  // Medium screens
            lg: '2rem',    // Large screens
          },
        }}
      >
        PROJECTS
      </Typography>
      

    </Box>
  </motion.div>
)}

      </Box>
    </>
  );
};

const scrollToSection = (id) => {
  const executeScroll = () => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Small delay to ensure section is available
  };

  if (location.pathname !== "/") {
    navigate("/", { replace: false });
    setTimeout(executeScroll, 500); // Delay ensures the home page has loaded
  } else {
    executeScroll();
  }
};

export default Navbar;
