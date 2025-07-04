import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: " Unger-Bau.info",
    image: "/assets/unger-project/unger-home.png",
    link: "/projects/unger",
    icons: [
      "/assets/icons/react.svg",
      "/assets/icons/materialui.svg",
      "/assets/icons/javascript.svg",
      "/assets/icons/html5.svg",
      "/assets/icons/css3.svg",
    ],
  },
  {
    name: "Personal Portfolio",
    image: "/assets/portfolio-project/Vahedins-Portfolio.PNG",
    link: "/",
    icons: [
      "/assets/icons/react.svg",
      "/assets/icons/materialui.svg",
      "/assets/icons/javascript.svg",
      "/assets/icons/html5.svg",
      "/assets/icons/css3.svg",
    ],
  },
];

const Projects = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      let image = "";

      if (width >= 1800) {
        image = "/assets/backgrounds/BG-Project-1800.png";
      } else if (width >= 1400) {
        image = "/assets/backgrounds/BG-Project-1400.png";
      } else if (width >= 900) {
        image = "/assets/backgrounds/BG-Project-1000.png";
      } else if (width >= 600) {
        image = "/assets/backgrounds/BG-Project-800.png";
      } else if (width >= 400) {
        image = "/assets/backgrounds/BG-Project-500.png";
      } else {
        image = "/assets/backgrounds/BG-Project-300.png";
      }

      setBackgroundImage(image);
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
    navigate(link);
    setTimeout(() => window.location.reload(), 100);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={backgroundImage || "bg-default"}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
      </AnimatePresence>

      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          pb: 8,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          "@media (max-width: 355px)": {
            mt: 17,
          },
          "@media (min-width: 356px) and (max-width: 400px)": {
            mt: 21,
          },
          "@media (min-width: 401px) and (max-width: 500px)": {
            mt: 22,
          },
          "@media (min-width: 501px) and (max-width: 550px)": {
            mt: 25,
          },
          "@media (min-width: 551px) and (max-width: 600px)": {
            mt: 27,
          },
          "@media (min-width: 601px) and (max-width: 700px)": {
            mt: 20,
          },
          "@media (min-width: 701px) and (max-width: 800px)": {
            mt: 23,
          },
          "@media (min-width: 801px) and (max-width: 900px)": {
            mt: 30,
          },
          "@media (min-width: 901px) and (max-width: 1000px)": {
            mt: 20,
          },
          "@media (min-width: 1001px) and (max-width: 1100px)": {
            mt: 25,
          },
          "@media (min-width: 1001px) and (max-width: 1200px)": {
            mt: 23,
          },
          "@media (min-width: 1201px) and (max-width: 1400px)": {
            mt: 30,
          },
          "@media (min-width: 1401px) and (max-width: 1500px)": {
            mt: 33,
          },
          "@media (min-width: 1501px) and (max-width: 1600px)": {
            mt: 35,
          },
          "@media (min-width: 1601px) and (max-width: 1700px)": {
            mt: 37,
          },
          "@media (min-width: 1701px) and (max-width: 1800px)": {
            mt: 38,
          },
          "@media (min-width: 1801px) and (max-width: 1900px)": {
            mt: 40,
          },
          "@media (min-width: 1901px) and (max-width: 2000px)": {
            mt: 40,
          },
          "@media (min-width: 2001px)": {
            mt: 55,
          },
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            ml: { xs: 0, md: 15 },
            mr: { xs: 0, md: 15 },
          }}
          justifyContent="center"
          maxWidth={"1800px"}
        >
          {projects.map((project, index) => (
            <Grid item xs={12} sm={12} md={9} lg={6} key={project.name}>
              <Box sx={{ pr: "20px" }}>
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "1 / 1",
                      cursor: "pointer",
                      "&:hover .hover-underline": {
                        opacity: 1,
                        transform: "scaleX(1)",
                      },
                    }}
                    onClick={() => handleLinkClick(project.link)}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.025)",
                        },
                      }}
                    />

                    {/* Hover Underline Box */}
                    <Box
                      className="hover-underline"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "10px",
                        width: "100%",
                        backgroundColor: "aqua",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        opacity: 0,
                        transition:
                          "transform 0s ease-in-out, opacity 0.3s ease-in-out",
                        zIndex: 2,
                      }}
                    />

                    {/* White Info Box on bottom of image projects*/}
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      bgcolor="white" // solid white, no transparency
                      padding={2}
                      textAlign="center"
                    >
                      <Typography variant="h6" fontWeight="bold" color="black">
                        {project.name}
                      </Typography>

                      {/* Icon Row */}
                      <Box
                        mt={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                        flexWrap="wrap"
                      >
                        {project.icons?.map((icon, i) => (
                          <Box
                            key={i}
                            component="img"
                            src={icon}
                            alt="tech-icon"
                            sx={{ width: 24, height: 24 }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
