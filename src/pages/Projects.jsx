import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
import { faReact, faJs, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "Website: Unger-Bau.info",
    image: "/assets/Unger-Project/unger-home.png",
    skills: [
      { icon: faReact, color: "#61DBFB" },
      { icon: faJs, color: "#F7DF1E" },
      { icon: faHtml5, color: "#E44D26" },
    ],
    link: "/projects/unger",
  },
  {
    name: "Website: Vahedin Portfolio",
    image: "/assets/PortFolio-Project/Vahedins-Portfolio.PNG",
    skills: [
      { icon: faReact, color: "#61DBFB" },
      { icon: faJs, color: "#F7DF1E" },
      { icon: faHtml5, color: "#E44D26" },
    ],
    link: "/",
  },
];

const Projects = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [marginTop, setMarginTop] = useState(30); // default fallback

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      let image = "";
      let newMarginTop = 30;

      if (width >= 1400) {
        image = "/assets/BackGrounds/BG-Project-1800.png";
        newMarginTop = 30;
      } else if (width >= 1200) {
        image = "/assets/BackGrounds/BG-Project-1400.png";
        newMarginTop = 30;
      } else if (width >= 992) {
        image = "/assets/BackGrounds/BG-Project-1000.png";
        newMarginTop = 25;
      } else if (width >= 768) {
        image = "/assets/BackGrounds/BG-Project-800.png";
        newMarginTop = 20;
      } else {
        image = "/assets/BackGrounds/BG-Project-500.png";
        newMarginTop = 20;
      }

      setBackgroundImage(image);
      setMarginTop(newMarginTop);

      // Fallback for body background if needed
      document.body.style.backgroundImage = `url(${image})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "top";
      document.body.style.backgroundAttachment = "local";
    };

    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  const handleLinkClick = (link) => {
    navigate(link); // Navigate to the target link
    setTimeout(() => {
      window.location.reload(); // Refresh the page after a delay
    }, 100); // 100ms delay should be sufficient for React Router to complete the navigation
  };

  return (
    <AnimatePresence>
      <motion.div
        key={backgroundImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "local",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          padding: "0px 30px 0px 0px",
          marginTop: marginTop,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            ml: { xs: 0, md: 15 },
            mr: { xs: 0, md: 15 },
            mt: { xs: 0, md: 0 },
          }}
          justifyContent="center"
          maxWidth={"1800px"}
        >
          {projects.map((project, index) => (
            <Grid item xs={12} sm={12} md={9} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-bottom 0.3s ease-in-out",
                    "&:hover": {
                      borderBottom: `4px solid ${theme.palette.primary.main}`,
                    },
                  }}
                  onClick={() => navigate(project.link)}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: 300,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.name}
                      sx={{
                        height: "300px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.25)",
                        },
                      }}
                    />
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    padding={2}
                  >
                    <Typography variant="h6" fontWeight="bold" color='black'>
                      {project.name}
                    </Typography>
                    <Box display="flex" gap={1} mt={0}>
                      {project.skills.map((skill, i) => (
                        <FontAwesomeIcon
                          key={`${project.name}-${skill.icon.iconName}-${i}`}
                          icon={skill.icon}
                          size="2x"
                          style={{ color: skill.color }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AnimatePresence>
  );
};

export default Projects;
