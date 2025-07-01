import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Project3 from "./pages/Project3.jsx";
import Certifications from "./pages/Certifications.jsx";
import Unger from "./pages/Unger.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Container, Box } from "@mui/material";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Theme config
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(33, 255, 226)", // Cyan
    },
    secondary: {
      main: "#8000ff", // Purple/Violet
    },
    warning: {
      main: "#FFD700", // Yellow
    },
    background: {
      default: "rgb(0, 11, 56)",
    },
    text: {
      primary: "#ffffff", // White text
    },
  },
});

// Wrapper so we can use useLocation in App
const AppWrapper = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

function App() {
  const location = useLocation(); // ✅ This is how we get current route
  const isHome = location.pathname === "/"; // ✅ Check if on Home
  const hideNavbar = location.pathname === "/projects/unger";
  return (
    <div className="App">
      {!hideNavbar && (
        <Navbar isHome={["/", "/certifications"].includes(location.pathname)} />
      )}

      <Box sx={{ mt: isHome ? "-5px" : "0px" }}>
        <Container maxWidth="none" disableGutters sx={{ padding: "0px" }}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/unger" element={<Unger />} />
            <Route path="/projects/project3" element={<Project3 />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default AppWrapper;
