import { useState } from "react";
import {
  FaTimes,
  FaBars,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDownload,
} from "react-icons/fa";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import profileImage from "./assets/Vahedin.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setIsOpen(true)}
        sx={{
          position: "fixed",
          top: 300,
          left: 300,
          zIndex: 1300,
          backgroundColor: "gray",
        }}
      >
        <FaBars size={20} />
      </IconButton>

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "200px",
          backgroundColor: "navy",
          padding: 2,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          zIndex: 1200,
        }}
      >

        <Avatar
          src={profileImage}
          sx={{ width: 64, height: 64, borderRadius: "50%" }}
        />
        <Typography variant="body1">
          <strong>Name:</strong> Vahedin
        </Typography>
        <Typography variant="body1">
          <strong>Occupation:</strong> Developer
        </Typography>
        <Typography variant="body1">
          <strong>Country:</strong> [Your Country]
        </Typography>
        <Typography variant="body1">
          <strong>City:</strong> [Your City]
        </Typography>
        <Typography variant="body1">
          <strong>Age:</strong> [Your Age]
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> [Your Email]
        </Typography>

        <Typography variant="body1">
          <strong>Languages:</strong>
        </Typography>
        <ul>
          <li>English</li>
          <li>Serbian</li>
          <li>Bosnian</li>
        </ul>

        <Typography variant="body1">
          <strong>Skills:</strong>
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <FaHtml5 size={20} color="orange" />
          <FaCss3Alt size={20} color="blue" />
          <FaJs size={20} color="yellow" />
          <FaPython size={20} color="blue" />
        </Box>

        <Box
          component="a"
          href="/path-to-your-cv.pdf"
          download
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          <FaDownload />
          <Typography variant="body1">Download CV</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
