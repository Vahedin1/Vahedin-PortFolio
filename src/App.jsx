import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Certifications from "./pages/Certifications.jsx";
import Unger from "./pages/Unger.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Box } from "@mui/material";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(33, 255, 226)",
    },
    secondary: {
      main: "#8000ff",
    },
    warning: {
      main: "#FFD700",
    },
    background: {
      default: "rgb(0, 11, 56)",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const AppWrapper = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const hideNavbar = location.pathname === "/projects/unger";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!hideNavbar && (
        <Navbar isHome={["/", "/certifications"].includes(location.pathname)} />
      )}

      <Box sx={{ flex: 1, mt: isHome ? "-5px" : "0px" }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/unger" element={<Unger />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default AppWrapper;
