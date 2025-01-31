import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const certifications = [
  {
    title: "Python & AI Developer",
    issuer: "IT ACADEMY",
    date: "December 2024",
    image: "/assets/certification.png",
    certificateUrl: "/assets/python_ai_certificate.pdf",
  },
  {
    title: "Microsoft Development Program(C#)",
    issuer: "IT ACADEMY",
    date: "Currently Enrolled",
    image: "/assets/certification.png",
    certificateUrl: "/assets/microsoft_csharp_certificate.pdf",
  },
];

const Certifications = () => {
  const theme = useTheme();

  return (
    <div
      style={{ background: theme.palette.background.default, padding: "20px" }}
    >
      <Grid container spacing={2} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={12} md={9} lg={6} key={index}>
            <Card sx={{ maxWidth: "none", textAlign: "center", mx: "auto", mt: 5, mb: 5, ml: {xs: 0, lg: 0} }}>
              <CardMedia
                component="img"
                height="700px"
                image={cert.image}
                alt={cert.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {cert.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Issued by:</strong> {cert.issuer}
                  <br />
                  <strong>Date:</strong> {cert.date}
                </Typography>
              </CardContent>
              <CardActions>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Certifications;
