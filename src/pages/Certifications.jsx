import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Python & AI Developer",
    issuer: "IT ACADEMY",
    date: "December 2024",
    validationNumber: "033267",
    images: {
      mobile: "/assets/certification-mobile.jpeg", // fallback to the single image
      pc: "/assets/certification-pc.png",
    },
    showValidationButton: true,
  },
  /* 
  {
    title: "Microsoft Development Program (C#)",
    issuer: "IT ACADEMY",
    date: "Currently Enrolled",
    validationNumber: "N/A",
    images: {
      mobile: "/assets/certification-mobile.jpeg",
      pc: "/assets/certification-pc.png",
    },
    showValidationButton: true,
  },*/
];

const Certifications = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{ background: theme.palette.background.default, padding: "20px" }}
    >
      <Grid container spacing={2} justifyContent="center">
        {certifications.map((cert, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          const imageToShow = isMobile ? cert.images.mobile : cert.images.pc;

          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              key={index}
              ref={ref}
              style={{ overflowX: "hidden" }}
            >
              <Card
                sx={{
                  maxWidth: "none",
                  textAlign: "center",
                  mx: "auto",
                  mt: 5,
                  mb: 0,
                  backgroundColor: "transparent",
                  display: "inline-block", // Ensures the card is inline-block
                  boxShadow: "none", // ← prevent MUI shadows
                  border: "none",
                }}
              >
                {inView && (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CardMedia
                      component="img"
                      image={imageToShow}
                      alt={`${cert.title} - Image`}
                      sx={{
                        height: 700,
                        width: "850px",
                        margin: "0 auto",
                        paddingTop: "60px",
                        display: "block",
                      }}
                    />
                  </motion.div>
                )}
                <div style={{ backgroundColor: "#000B38" }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        color: "rgb(33, 255, 226)",
                      }}
                    >
                      {cert.title}
                    </Typography>

                    <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
                      <span
                        style={{
                          color: "rgb(33, 255, 226)",
                          fontWeight: "bold",
                        }}
                      >
                        Issuer:
                      </span>{" "}
                      <span style={{ color: "white" }}>{cert.issuer}</span>
                      <br />
                      <span
                        style={{
                          color: "rgb(33, 255, 226)",
                          fontWeight: "bold",
                        }}
                      >
                        Date:
                      </span>{" "}
                      <span style={{ color: "white" }}>{cert.date}</span>
                      <br />
                      <span
                        style={{
                          color: "rgb(33, 255, 226)",
                          fontWeight: "bold",
                        }}
                      >
                        Validation No.:
                      </span>{" "}
                      <span style={{ color: "white" }}>
                        {cert.validationNumber}
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {cert.showValidationButton && (
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() =>
                          window.open(
                            "https://www.link-group.eu/certificate/",
                            "_blank"
                          )
                        }
                        sx={{
                          color: "#000B38", // Text color
                          backgroundColor: "rgb(33, 255, 226)",
                          mx: "auto",
                          my: 1,
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        Validate Certificate
                      </Button>
                    )}
                  </CardActions>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Certifications;
