import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const Unger = () => {
  return (
    <Container maxWidth="md" sx={{ padding: "20px" }}>
      {/* Title Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Unger-Bau.info
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A website project built with React, Node.js, and HTML5
        </Typography>
      </Box>

      {/* Project Card */}
      <Card>
        <CardMedia
          component="img"
          height="400"
          image="/assets/project-unger/project-unger.png"
          alt="Unger-Bau.info"
        />
        <CardContent>
          <Typography variant="body1" paragraph>
            This website was developed to showcase construction projects and
            services offered by Unger-Bau. Built with modern web technologies,
            it ensures responsiveness and seamless user experience.
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <FontAwesomeIcon icon={faReact} size="2x" />
            <FontAwesomeIcon icon={faNodeJs} size="2x" />
            <FontAwesomeIcon icon={faHtml5} size="2x" />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Unger;
