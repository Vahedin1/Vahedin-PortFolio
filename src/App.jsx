import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Unger from "./pages/Unger.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Container } from "@mui/material";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(33, 255, 226)", // Header color
    },
    background: {
      default: "rgb(0, 11, 56)", // Home page background color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App" style={{}}>
          <Navbar />
          <Container maxWidth="xl" sx={{ padding: "20px" }}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/Unger" element={<Unger />} />
              <Route path="/*" element={<NoPage />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
