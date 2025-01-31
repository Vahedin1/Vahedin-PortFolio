import React from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
  Box,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HeaderMenuButton from "../components/Project-Header.jsx";

const Unger = () => {
  const theme = useTheme();
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <HeaderMenuButton />
      <Container maxWidth="false" disableGutters sx={{ margin: 0, padding: 0 }}>
        {/* Large Cover Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "50vh", md: "100vh" }, // Adjust height for mobile
            backgroundImage: "url('/assets/project-unger/project-unger.png')",
            backgroundSize: { xs: "cover", md: "cover" }, // Contain for mobile
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Project Info */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign={"center"}
          sx={{
            width: "100%",
            height: "100px",
            py: 2,
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
          }}
        >
          <Grid item xs={4} sx={{ margin: 0, padding: 0 }}>
            <Typography variant="h5" fontWeight="bold" color="red">
              VAHA
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ margin: 0, padding: 0 }}>
            <Typography variant="h5" fontWeight="bold" sx={{marginTop: {xs: 0, sm: 3}}}>
              <Link
                href="https://unger-bau.info"
                color="inherit"
                underline="none"
              >
                unger-bau.info
              </Link>
            </Typography>
            ;
          </Grid>
          <Grid item xs={4} sx={{ margin: 0, padding: 0 }}>
            <Typography variant="h5" color="text.secondary">
              2024
            </Typography>
          </Grid>
        </Grid>

        {/* Description */}
        <Box
          sx={{
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            mt: 10,
            mr: 10,
            ml: 10,
          }}
        >
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h4" fontWeight="bold" color="cyan">
              Description:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0 }}>
              Unger-Bau.info is a professional website built for a construction
              business, offering masonry and reinforced concrete construction
              services.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0 }}>
              The project is designed to provide a clear and modern user
              interface for clients to explore the company's services and
              contact information.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" fontWeight="bold" color="cyan">
              Key Features:
            </Typography>
            <Typography variant="body1" fontWeight="normal">
              Modern and Responsive Design
            </Typography>
            <Typography variant="body1" fontWeight="normal">
              Clear and Intuitive Navigation
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" fontWeight="bold" color="cyan">
              Built Using:
            </Typography>
            <Typography variant="body1" fontWeight="normal">
              JavaScript
            </Typography>
            <Typography variant="body1" fontWeight="normal">
              React
            </Typography>
            <Typography variant="body1" fontWeight="normal">
              MUI (Material-UI)
            </Typography>
          </Box>
        </Box>

        {/* Project Screenshots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column", // Ensures screenshots stack vertically
            gap: 3, // Adds space between screenshots
          }}
        >
          {[
            "project-screenshot1.png",
            "project-screenshot2.png",
            "project-screenshot3.png",
          ].map((img, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "85%", md: "70%" },
                height: { xs: "40vh", md: "85vh" }, // Adjust height for mobile
                backgroundImage: `url('/assets/project-unger/${img}')`,
                backgroundSize: { xs: "cover", md: "cover" }, // Adjust size
                backgroundPosition: "center",
                mt: 5,
                mb: 5,
              }}
            />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Unger;
