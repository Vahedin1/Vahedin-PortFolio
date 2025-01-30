import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { Phone, Email, LinkedIn } from "@mui/icons-material";

backgroundImage: "url(/path/to/your/image.jpg)";

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am a passionate Python Developer and Front-End Developer with hands-on
        experience in building dynamic web applications using React JS and
        Material UI. Currently, I am advancing my skills through the Microsoft
        Development Program at IT Academy.

        Languages:
        Bosnian
        English
        Serbian
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
    
      {/* 
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="h5" gutterBottom>
        Experience
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="None"
            secondary=" "
          />
        </ListItem>
      </List>
      <Divider style={{ margin: "20px 0" }} />
*/}
    </Container>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    backgroundColor: "transparent",
    color: "white",
    padding: "20px 0",
    marginTop: "auto",
  },
  contactContainer: {
    marginBottom: "10px",
  },
  header: {
    marginBottom: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  icon: {
    marginRight: "8px",
  },
  copyright: {
    marginTop: "10px",
    fontSize: "14px",
  },
  copyrightLink: {
    color: "#ddd",
    textDecoration: "none",
  },
};

export default Home;
