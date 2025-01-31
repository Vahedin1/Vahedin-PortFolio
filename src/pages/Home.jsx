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

const skills = [
  {
    category: "Frontend development",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 45 },
      { name: "CSS", level: 80 },
      { name: "MUI", level: 80 },
      { name: "HTML", level: 80 },
    ],
  },
  {
    category: "Backend development",
    skills: [
      { name: "Django (Python)", level: 30 },
      { name: "ASP.NET Core (C#)", level: 15 },
      { name: "FastAPI (Python)", level: 15 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 75 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    category: "Mobile development",
    skills: [{ name: "C#", level: 15 }],
  },
  {
    category: "Software Development",
    skills: [
      { name: "C#", level: 15 },
      { name: "Python", level: 15 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 50 },
      { name: "CI/CD (Jenkins, GitHub Actions)", level: 50 },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 40 },
      { name: "Pandas & NumPy", level: 60 },
    ],
  },
  {
    category: "Game Development",
    skills: [
      { name: "Unity (C#)", level: 40 },
      { name: "Game Physics", level: 35 },
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
      sx={{ textAlign: "center", mt: 10, fontFamily: "Roboto, sans-serif" }}
    >
      <Card sx={cardStyle}>
        <Typography variant="h4" fontWeight="bold">
          Hi, I'm Vahedin Hamidović
        </Typography>
        <Typography variant="body1" paragraph>
          I am Software Developer
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
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              ABOUT ME
            </Typography>
            <Typography variant="body1" paragraph>
              Hello, my name is Vahedin Hamidović. I am a Software Developer
              from Serbia - Sjenica. Currently, I am unemployed. I love working
              on a variety of technologies including Web Development and Mobile
              App Development.
            </Typography>
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

      <Card id={"skills"} sx={cardStyle}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          SKILLS
        </Typography>
        {skills.map((section, index) => (
          <Box key={index} sx={{ mb: 5 }}>
            <Typography variant="h6" fontWeight="bold">
              {section.category}
            </Typography>
            {section.skills.map((skill, i) => (
              <Grid
                container
                key={i}
                alignItems="center"
                spacing={2}
                sx={{ mb: 1 }}
              >
                {/* Skill Name */}
                <Grid item xs={3}>
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    {skill.name}
                  </Typography>
                </Grid>

                {/* Progress Bar */}
                <Grid
                  item
                  xs={7}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      flexGrow: 1,
                      height: 8,
                      borderRadius: 2,
                      bgcolor: "white",
                      width: "100%", // Ensures all bars are the same length
                    }}
                  />
                </Grid>

                {/* Percentage */}
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
          sx={{
            mt: 2,

          }}
        >
          CHECK OUT MY PROJECTS
        </Button>
      </Card>

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
        <Typography variant="body1">
          Microsoft Development Program - Currently Enrolled
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
          Certifications
        </Button>
      </Card>
    </Container>
  );
};

export default Home;
