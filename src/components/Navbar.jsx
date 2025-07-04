import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ isHome }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: theme.palette.background.default,
        boxShadow: isHome ? "0px 4px 12px rgba(0, 255, 255, 0.3)" : "none",
        borderBottom: isHome ? "2px solid #00ffff" : "none",

        borderRadius: isHome ? 2 : 0,
        width: "100%",
        px: 2,
        mt: 0,
        mb: isHome ? 6 : 0,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "center",
            gap: isMobile ? 4 : 12,
            py: 2,
          }}
        >
          {/* Home */}
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: "700",
              fontFamily: "'Poppins', sans-serif",
              color: theme.palette.primary.main,
              transition: "color 0.3s",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            HOME
          </Typography>
          {/* Projects*/}
          <Typography
            component={Link}
            to="/projects"
            sx={{
              textDecoration: "none",
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: "700",
              fontFamily: "'Poppins', sans-serif",
              color: theme.palette.primary.main,
              transition: "color 0.3s",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            PROJECTS
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
