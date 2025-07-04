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
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          margin: 0,
          padding: 0,
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* Large Cover Image with Link */}
        <Link
          href="https://unger-bau.info"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{ display: "block", width: "100%" }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "50vh", md: "100vh" },
              backgroundImage: "url('/assets/unger-project/unger-home.png')",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Link>

        {/* Project Info Bar — Styled like RAWMEN */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
            backgroundColor: "#E0E0E0",
            px: 2,
            gap: 4,
            mt: "-5px",
          }}
        >
          {/* Left: Author */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "1rem",
              color: "#d60000",
            }}
          >
            VAHEDIN
          </Typography>

          {/* Divider */}
          <Box
            sx={{
              width: "6px",
              height: "60%",
              backgroundColor: "#E0E0E0",
              borderLeft: "4px solid #d69a7c", // beige-style bar
            }}
          />

          {/* Center: Project Title and Link */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontSize: "1.6rem",
                color: "#081349", // UNGER BAU color
                fontFamily: "'Helvetica Neue', sans-serif",
              }}
            >
              UNGER BAU
            </Typography>

            <Link
              href="https://unger-bau.info"
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
              sx={{
                fontSize: "1.1rem",
                color: "#0000ee",
                fontFamily: "'Helvetica Neue', sans-serif",
                fontWeight: 500,
                textDecoration: "underline",
              }}
            >
              unger-bau.info
            </Link>
          </Box>

          {/* Right: Year */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: "medium",
              fontSize: "1rem",
              color: "#888",
            }}
          >
            2024
          </Typography>
        </Box>

        {/* Description Section */}
        <Box
          sx={{
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            mt: 10,
            mx: 10,
          }}
        >
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h4" fontWeight="bold" color="cyan">
              Description:
            </Typography>
            <Typography variant="body1">
              Unger-Bau.info is a professional website built for a construction
              business, offering masonry and reinforced concrete construction
              services.
            </Typography>
            <Typography variant="body1">
              The project is designed to provide a clear and modern user
              interface for clients to explore the company's services and
              contact information.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" fontWeight="bold" color="cyan">
              Key Features:
            </Typography>
            <Typography variant="body1">
              Modern and Responsive Design
            </Typography>
            <Typography variant="body1">
              Clear and Intuitive Navigation
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" fontWeight="bold" color="cyan">
              Built Using:
            </Typography>
            <Typography variant="body1">JavaScript</Typography>
            <Typography variant="body1">React</Typography>
            <Typography variant="body1">MUI (Material-UI)</Typography>
          </Box>
        </Box>

        {/* Project Screenshots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 3,
            my: 5,
          }}
        >
          {[
            "unger-leinstungen.png",
            "unger-uber-uns.png",
            "unger-kontakt.png",
          ].map((img, index) => (
            <Link
              key={index}
              href="https://unger-bau.info"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: { xs: "85%", md: "70%" },
                  height: { xs: "40vh", md: "85vh" },
                  backgroundImage: `url('/assets/unger-project/${img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Link>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Unger;
