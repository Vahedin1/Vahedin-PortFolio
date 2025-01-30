import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faHtml5 } from "@fortawesome/free-brands-svg-icons"; // Import FontAwesome icons

// Sample project data
const projects = [
  {
    name: "Website: Unger-Bau.info",
    image: "/assets/project.png",
    skills: [faReact, faNodeJs, faHtml5], // Using FontAwesome icons
    link: "/projects/unger-bau-info",
  },
  {
    name: "Project 2",
    image: "/assets/project.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/project-2",
  },
  {
    name: "Project 3",
    image: "/assets/project.png",
    skills: [faReact, faNodeJs, faHtml5],
    link: "/projects/project-3",
  },
];

const Projects = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      {/* Title and Subtitle Section */}
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          VAHEDIN
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "10px" }}>
          Selected Projects
        </Typography>
      </Box>

      {/* Grid of Projects */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ position: "relative" }}>
              {/* Wrap the Card in a Link */}
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
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    padding: "10px",
                    textAlign: "center",
                    height: "60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
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
