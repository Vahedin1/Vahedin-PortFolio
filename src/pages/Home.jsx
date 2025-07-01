import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  Avatar,
  LinearProgress,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend development",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
    ],
  },
  {
    category: "Backend development",
    skills: [
      { name: "Python (Core, OOP)", level: 85 },
      { name: "Python .NET", level: 60 },
      { name: "Web App Development", level: 75 },
      { name: "Service App Development", level: 65 },
    ],
  },
  {
    category: "Database & Data Access",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "Python Data Access", level: 65 },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning & AI", level: 50 },
      { name: "NLP & Large Language Models", level: 45 },
    ],
  },
  {
    category: "Software Engineering",
    skills: [
      { name: "Test Automation & QA", level: 60 },
      { name: "GUI Development (Tkinter/PyQt)", level: 70 },
    ],
  },
  {
    category: "Spoken languages",
    skills: [
      { name: "English", level: 80 },
      { name: "Serbian", level: 100 },
      { name: "Bosnian", level: 100 },
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/Home.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "top";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY;
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
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove #
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const cardStyle = {
    border: "2px solid #00ffff",
    boxShadow: "0px 4px 12px rgba(0, 255, 255, 0.3)",
    mb: 5,
    p: 4,
    bgcolor: theme.palette.background.default,
    color: "white",
    borderRadius: "12px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: "0px 6px 16px rgba(0, 255, 255, 0.5)",
    },
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card sx={cardStyle}>
          <Typography variant="h4" fontWeight="bold">
            Hi, I'm Vahedin Hamidović
          </Typography>
          <Typography variant="body1" paragraph>
            Python & FrontEnd Web Developer
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => scrollToSection("contact")}
            sx={{
              marginBottom: "20px",
            }}
          >
            Connect
          </Button>
        </Card>

        <Card sx={cardStyle}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              {/* 
            <Avatar
              alt="Vahedin Hamidović"
              src="/assets/Vahedin.png"
              sx={{ width: 120, height: 120, margin: "auto" }}
            />
            */}
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{ textAlign: "center", maxWidth: 800, mx: "auto", my: 0 }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  ABOUT ME
                </Typography>

                <Typography variant="body1" paragraph>
                  I am a passionate{" "}
                  <strong>Python and Front-End Web Developer</strong> based in
                  Serbia. I've completed a comprehensive Python Developer
                  program at <strong>ITAcademy</strong>.
                </Typography>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  Python Course by ITAcademy:
                </Typography>

                <Typography variant="body1" component="div">
                  <ul
                    style={{
                      lineHeight: "1.8",
                      paddingLeft: "1.2rem",
                      listStyleType: "none",
                      marginTop: "8px",
                    }}
                  >
                    <li>Python (Core, OOP, .NET)</li>
                    <li>HTML, CSS</li>
                    <li>MySQL</li>
                    <li>Web App Development</li>
                    <li>Graphic User Interface (GUI) Development</li>
                  </ul>
                </Typography>


                <Typography variant="body1" component="div">
                  <ul
                    style={{
                      lineHeight: "1.8",
                      paddingLeft: "1.2rem",
                      listStyleType: "none",
                      marginTop: "8px",
                    }}
                  >
                    <li>Python Data Access & Processing</li>
                    <li>Machine Learning & AI</li>
                    <li>NLP & Large Language Models</li>
                  </ul>
                </Typography>



                <Typography variant="body1" component="div">
                  <ul
                    style={{
                      lineHeight: "1.8",
                      paddingLeft: "1.2rem",
                      listStyleType: "none",
                      marginTop: "8px",
                    }}
                  >
                    <li>Test Automation & QA</li>
                    <li>Service App Development</li>
                  </ul>
                </Typography>
              </Box>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  mt: 2,
                }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/assets/CV Vahedin Hamidovic - E.pdf"; // Update with the actual path to your CV file
                  link.download = "CV Vahedin Hamidovic - E.pdf"; // The filename for download
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Card>

        {/* Box wrapping the skills section */}
        <Box id="skills2" sx={{ position: "relative", zIndex: 1 }}>
          <Card sx={cardStyle}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
            >
              SKILLS
            </Typography>
            {skills.map((section, index) => (
              <Box key={index} sx={{ mb: 10 }}>
                <Typography variant="h6" fontWeight="bold">
                  {section.category}
                </Typography>
                {section.skills.map((skill, i) => (
                  <Grid
                    container
                    key={i}
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <Grid item xs={3}>
                      <Typography variant="body1" sx={{ textAlign: "left" }}>
                        {skill.name}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={7}
                      sx={{
                        display: "flex",
                        justifyContent: "center", // Centers the progress bar horizontally
                        alignItems: "center", // Ensures it stays vertically centered
                        width: "80%",
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 2,
                          bgcolor: "white",
                          width: "70% ",
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body1"
                        sx={{ textAlign: "right", minWidth: 40 }}
                      >
                        {skill.level}%
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Box>
            ))}
            <Button
              variant="contained"
              onClick={() => navigate("/projects")}
              sx={{ mt: 2 }}
            >
              View my PROJECTS
            </Button>
          </Card>
        </Box>

        <Card sx={cardStyle}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            EDUCATION
          </Typography>
          <Typography variant="body1" paragraph>
            IT ACADEMY
          </Typography>
          <Typography variant="body1" paragraph>
            Python Developer - Graduated 2024
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/certifications")}
            sx={{
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            Certification
          </Button>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Home;
