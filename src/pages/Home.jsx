import React, { useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Avatar,
} from "@mui/material";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/Home-Blue.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "top";
    document.body.style.backgroundAttachment = "local";

    return () => {
      document.body.style.backgroundImage = ""; // Clean up when the component unmounts
    };
  }, []);

  return (
    <Box sx={{ padding: "20px", marginTop: 100, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am a passionate Python Developer and Front-End Developer with hands-on
        experience in building dynamic web applications using React JS and
        Material UI. Currently, I am advancing my skills through the Microsoft
        Development Program at IT Academy. Languages: Bosnian, English, Serbian.
      </Typography>
      <Typography variant="body1">
        Let's connect and collaborate on exciting projects!
      </Typography>
      <Divider style={{ margin: "20px 0" }} />

      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Python Developer"
            secondary="IT Academy - Graduated 2024"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Microsoft Development Program C#"
            secondary="IT Academy - Currently enrolled"
          />
        </ListItem>
      </List>

      <Divider style={{ margin: "20px 0" }} />

      <Box id="skills">
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Python" />
          </ListItem>
          <ListItem>
            <ListItemText primary="React JS" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Material UI" />
          </ListItem>
          <ListItem>
            <ListItemText primary="HTML, CSS, JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemText primary="C#" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Home;
