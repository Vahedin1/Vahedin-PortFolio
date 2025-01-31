import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
import { faReact, faJs, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Website: Unger-Bau.info",
    image: "/assets/project-unger/project-unger.png",
    skills: [
      { icon: faReact, color: "#61DBFB" },
      { icon: faJs, color: "#F7DF1E" },
      { icon: faHtml5, color: "#E44D26" },
    ],
    link: "/projects/unger",
  },
  {
    name: "Website: Vahedin Portfolio",
    image: "/assets/Vahedins-Portfolio.PNG",
    skills: [
      { icon: faReact, color: "#61DBFB" },
      { icon: faJs, color: "#F7DF1E" },
      { icon: faHtml5, color: "#E44D26" },
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  {
    name: "",
    image: "/assets/Untitled.png",
    skills: [
    ],
    link: "/",
  },
  
];

  const Projects = () => {
    const theme = useTheme();
    const [backgroundImage, setBackgroundImage] = useState("");
  
    useEffect(() => {
      const updateBackground = () => {
        if (window.innerWidth < 768) {
          document.body.style.backgroundImage =
            "url('/assets/Project-Mobile.png')";
        } else {
          document.body.style.backgroundImage = "url('/assets/Project-PC.png')";
        }
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "top";
        document.body.style.backgroundAttachment = "local";
        
      };
  
      updateBackground(); // Set initial background
      window.addEventListener("resize", updateBackground); // Update on resize
  
      return () => {
        window.removeEventListener("resize", updateBackground);
        document.body.style.backgroundImage = ""; // Clean up on unmount
      };
    }, []);

  const handleLinkClick = (link) => {
    navigate(link); // Navigate to the target link
    setTimeout(() => {
      window.location.reload(); // Refresh the page after a delay
    }, 100); // 100ms delay should be sufficient for React Router to complete the navigation
  };

  return (
    <AnimatePresence mode="wait">
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
          padding: "20px",
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3} justifyContent="center" maxWidth={"1800px"}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={9} md={6} lg={4} key={index}>
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
                >
                  <Link
                    to={project.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleLinkClick}
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
                      <Typography variant="h6" fontWeight="bold">
                        {project.name}
                      </Typography>
                      <Box display="flex" gap={1} mt={0}>
                        {project.skills.map((skill, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={skill.icon}
                            size="2x"
                            style={{ color: skill.color }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Link>
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