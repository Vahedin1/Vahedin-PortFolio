import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
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
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    category: "Backend development",
    skills: [
      { name: "Python Fundamentals", level: 90 },
      { name: "Python .NET", level: 65 },
      { name: "Web App Development", level: 85 },
      { name: "Service App Development", level: 60 },
    ],
  },
  {
    category: "Database & Data Access",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "Python Data Access", level: 60 },
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
      { name: "Graphic App Development (Tkinter/PyQt)", level: 75 },
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
      const duration = 800;
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
      const id = location.hash.substring(1);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const cardStyle = {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 4px 12px ${theme.palette.primary.main}50`,
    mb: 5,
    p: 4,
    bgcolor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: "12px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: `0px 6px 16px ${theme.palette.primary.main}80`,
    },
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
        mt: 8,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Intro Card */}
        <Card sx={cardStyle}>
          <Typography variant="h4" fontWeight="bold" color="primary">
            Hi, I'm Vahedin Hamidović
          </Typography>
          <Typography variant="body1" paragraph color="text.primary">
            Python & FrontEnd Web Developer
          </Typography>
          <Typography variant="body1" paragraph color="text.primary">
            I am a passionate{" "}
            <strong>Python and Front-End Web Developer</strong> based in Serbia.{" "}
            <br></br>
            I've completed a comprehensive Python Developer program at{" "}
            <strong>ITAcademy</strong>.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mb: 2, fontWeight: "bold" }}
            onClick={() => scrollToSection("contact")}
          >
            Connect
          </Button>
        </Card>

        {/* Course Description Card */}
        <Card sx={cardStyle}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Python Course by ITAcademy:
          </Typography>
          <Box component="div" sx={{ textAlign: "center" }}>
            {/* First group */}
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.2 }}>
              Python Fundamentals
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.2 }}>
              HTML & CSS
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.2 }}>
              MySQL
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.2 }}>
              Web App Development
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
              Graphic App Development 
            </Typography>

            {/* Second group */}
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.2 }}>
              Python Data Access & Processing
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.2 }}>
              Machine Learning & AI
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
              NLP & Large Language Models
            </Typography>

            {/* Third group */}
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.5 }}>
              Test Automation & QA
            </Typography>
            <Typography variant="body1" color="text.primary" sx={{ mb: 0.5 }}>
              Service App Development
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<DownloadIcon />}
            sx={{ mt: 2, fontWeight: "bold" }}
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/CV_Vahedin Hamidovic_EN.pdf";
              link.download = "CV_Vahedin Hamidovic_EN.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV
          </Button>
        </Card>
        {/* Education Card */}
        <Card sx={cardStyle}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            color="primary"
          >
            EDUCATION
          </Typography>
          <Typography variant="body1" paragraph color="text.primary">
            IT ACADEMY
          </Typography>
          <Typography variant="body1" paragraph color="text.primary">
            Python Developer - Graduated 2024
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/certifications")}
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            Certification
          </Button>
        </Card>

        {/* Skills Section */}
        <Box id="skills2" sx={{ position: "relative", zIndex: 1 }}>
          <Card sx={cardStyle}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
              color="primary"
            >
              SKILLS
            </Typography>
            {skills.map((section, index) => (
              <Box key={index} sx={{ mb: 8 }}>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
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
                      <Typography
                        variant="body1"
                        color="text.primary"
                        sx={{ textAlign: "left" }}
                      >
                        {skill.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 2,
                          bgcolor: "rgba(255,255,255,0.1)",
                          width: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Typography
                        variant="body1"
                        color="text.primary"
                        sx={{ textAlign: "right" }}
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
              color="secondary"
              onClick={() => navigate("/projects")}
              sx={{ mt: 2 }}
            >
              View my PROJECTS
            </Button>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home;
