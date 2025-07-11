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
    <div
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
      }}
    >
      <HeaderMenuButton />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          margin: 0,
          padding: 0,
          backgroundColor: "0a0a0a",
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
              height: { xs: "79vh", md: "79vh" },
              backgroundImage: "url('/assets/unger-project/unger-home.png')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Link>

        {/* White Big Info Box*/}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#e3e3e3",
            px: 2,
            py: { xs: 4, md: 2 },
            pt: { xs: 4, md: "20px" },
            height: { xs: "auto", md: "200px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            spacing={{ xs: 2, md: 4 }}
            flexWrap="wrap"
          >
            {/* Author */}
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2rem", md: "2.2rem" },
                  color: "#d60000",
                  fontFamily: "'Helvetica Neue', sans-serif",
                }}
              >
                VAHEDIN
              </Typography>
            </Grid>

            {/* Devider  */}
            <Grid item>
              <Box
                sx={{
                  width: { xs: "350px", md: "4px" },
                  height: { xs: "4px", md: "60px" },
                  backgroundColor: "#aaa",
                  borderRadius: "2px",
                  mx: { xs: "auto", md: 2 },
                  my: { xs: 2, md: "auto" },
                }}
              />
            </Grid>

            {/* UNGER BAU Title & Link */}
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.6rem",
                  color: "#081349",
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
                  fontWeight: 500,
                  textDecoration: "underline !important",
                }}
              >
                unger-bau.info
              </Link>
            </Grid>

            {/* Year */}
            <Grid item>
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
            </Grid>
            {/* Devider  */}
            <Grid item>
              <Box
                sx={{
                  width: { xs: "350px", md: "4px" },
                  height: { xs: "4px", md: "60px" },
                  backgroundColor: "#aaa",
                  borderRadius: "2px",
                  mx: { xs: "auto", md: 2 },
                  my: { xs: 2, md: "auto" },
                }}
              />
            </Grid>

            {/* Icons */}
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                wrap="nowrap"
              >
                {[
                  { src: "/assets/icons/react.svg", alt: "React" },
                  { src: "/assets/icons/html5.svg", alt: "HTML5" },
                  { src: "/assets/icons/css3.svg", alt: "CSS3" },
                  { src: "/assets/icons/javascript.svg", alt: "JavaScript" },
                  { src: "/assets/icons/materialui.svg", alt: "Material UI" },
                ].map((icon, index) => (
                  <Grid item key={index}>
                    <Box
                      component="img"
                      src={icon.src}
                      alt={icon.alt}
                      sx={{
                        width: 40,
                        height: 40,
                        transition: "transform 0.3s",
                        "&:hover": { transform: "scale(1.15)" },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
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
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "1rem", md: "2rem" }, mt: 2 }}
            >
              Unger-Bau.info is a professional website built for a construction
              business, offering masonry and reinforced concrete construction
              services. The platform provides a reliable digital presence for
              clients looking to engage with a trusted local construction
              partner.The project is designed to deliver a clean and modern user
              experience, optimized for both desktop and mobile devices. It
              includes a well-structured services overview, a dedicated contact
              section, and a company background page — all styled with a strong,
              professional visual identity that reflects the quality and
              reliability of Unger Bau's work.
            </Typography>
          </Box>
        </Box>

        {/* Project Screenshots showcase section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 3,
            my: 5,
            mb: 0,
            pb: 0,
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
