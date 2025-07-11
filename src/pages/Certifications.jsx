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
    courseName: "Python & Ai Developer",
    issuer: "ITAcademy",
    validationNumber: "033267",
    images: {
      mobile: "/assets/certification-mobile.jpeg",
      pc: "/assets/certification-pc.png",
    },
    showValidationButton: true,
  },
];

const Certifications = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const cardStyle = {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0px 4px 12px ${theme.palette.primary.main}50`,
    p: 4,
    bgcolor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: "12px",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: `0px 6px 16px ${theme.palette.primary.main}80`,
    },
  };
  return (
    <div
      style={{ background: theme.palette.background.default, padding: "0px" }}
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
                  maxWidth: isMobile ? "95%" : "850px",
                  textAlign: "center",
                  mx: "auto",
                  mt: isMobile ? 0 : 0,
                  mb: 0,
                  backgroundColor: "transparent",
                  boxShadow: "none",
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
                        width: isMobile ? "90%" : "700px",
                        height: isMobile ? "auto" : "500px",
                        maxHeight: "100%",
                        objectFit: "contain",
                        margin: "0 auto",
                        paddingTop: isMobile ? "15px" : "30px",
                        display: "block",
                        borderRadius: "12px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </motion.div>
                )}
                <div style={{ backgroundColor: "#000B38" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        color: "rgb(33, 255, 226)",
                      }}
                    >
                      <span
                        style={{
                          color: "rgb(33, 255, 226)",
                          fontWeight: "bold",
                        }}
                      >
                        Course:
                      </span>{" "}
                      <span style={{ color: "white" }}>{cert.courseName}</span>
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      <span
                        style={{
                          color: "rgb(33, 255, 226)",
                        }}
                      >
                        Issuer:
                      </span>{" "}
                      <span style={{ color: "white" }}>{cert.issuer}</span>
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
                    <CardActions>
                      {cert.showValidationButton && (
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                          onClick={() =>
                            window.open(
                              "https://www.link-group.eu/certificate/",
                              "_blank"
                            )
                          }
                          sx={{
                            mx: "auto",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          Validate Certificate
                        </Button>
                      )}
                    </CardActions>
                  </CardContent>
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
