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

const certifications = [
  {
    title: "Python & AI Developer",
    issuer: "IT ACADEMY",
    date: "December 2024",
    validationNumber: "033267",
    images: {
      mobile: "/assets/certification1.png", // fallback to the single image
      pc: "/assets/certification1.png",
    },
    showValidationButton: true,
  },
  {
    title: "Microsoft Development Program (C#)",
    issuer: "IT ACADEMY",
    date: "Currently Enrolled",
    validationNumber: "N/A",
    images: {
      mobile: "/assets/certification2-mobile.png",
      pc: "/assets/certification2-pc.png",
    },
    showValidationButton: false,
  },
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
            <Grid item xs={12} sm={12} md={9} lg={6} key={index} ref={ref}>
              <Card
                sx={{
                  maxWidth: "none",
                  textAlign: "center",
                  mx: "auto",
                  mt: 5,
                  mb: 5,
                }}
              >
                {inView && (
                  <CardMedia
                    component="img"
                    height="700px"
                    image={imageToShow}
                    alt={`${cert.title} - Image`}
                  />
                )}
                <div style={{ backgroundColor: "white" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Issuer:</strong> {cert.issuer}
                      <br />
                      <strong>Date:</strong> {cert.date}
                      <br />
                      <strong>Validation No.:</strong> {cert.validationNumber}
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
                          "&:hover": {
                            borderColor: "#FFCC00",
                            backgroundColor: "#000B38", // Optional hover background
                          },
                        }}
                      >
                        Validate Certificate
                      </Button>
                                      <Button
                                      variant="contained"
                                      color="primary"
                                      size="small"
                                      startIcon={<DownloadIcon />}
                                      onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = cert.certificateUrl;
                                        link.download = cert.title.replace(/\s+/g, "_") + ".pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                      }}
                                      sx={{ mx: "auto", my: 1 }}
                                    >
                                      Download Certificate
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
