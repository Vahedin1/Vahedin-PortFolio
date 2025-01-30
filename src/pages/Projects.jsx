import React, { useEffect } from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    name: "Website: Unger-Bau.info",
    image: "/assets/project-unger/project-unger.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/unger",
  },
  {
    name: "Project 2",
    image: "/assets/project3.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/project-2",
  },
  {
    name: "Project 3",
    image: "/assets/project3.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/project-3",
  },
  {
    name: "Website: Unger-Bau.info",
    image: "/assets/project-unger/project-unger.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/unger",
  },
  {
    name: "Project 2",
    image: "/assets/project3.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/project-2",
  },
  {
    name: "Project 3",
    image: "/assets/project3.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/project-3",
  },
];

const Projects = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/project.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "top";
    document.body.style.backgroundAttachment = "local";

    return () => {
      document.body.style.backgroundImage = ""; // Clean up when the component unmounts
    };
  }, []);

  return (
    <Box sx={{ padding: "20px", marginTop: 30 }}>


      {/* Grid of Projects */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: "relative" }}>
              <Link
                to={project.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.name}
                  sx={{
                    height: "375px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">{project.name}</Typography>
                  <Box display="flex" justifyContent="center" gap={1} mt={1}>
                    {project.skills.map((icon, i) => (
                      <FontAwesomeIcon key={i} icon={icon} size="2x" />
                    ))}
                  </Box>
                </Box>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
